const fs = require('fs');

const codeMap = {
  "Activmotion S – Medial Opening Wedge HTO Plate (Size 1)": { left: "ATGP1D-ST", right: "ATDP1D-ST" },
  "Activmotion S – Medial Opening Wedge HTO Plate (Size 2)": { left: "ATGP2D-ST", right: "ATDP2D-ST" },
  "Activmotion S – HTO Plate with ACL Reconstruction": { left: "ALTGP1D-ST", right: "ALTDP1D-ST" },
  "Activmotion S – HTO Plate with ACL Reconstruction & Suture Button": { left: "AETGP1D-ST", right: "AETDP1D-ST" },
  "Lateral Closing Wedge HTO Plate (Size 1)": { left: "BTGBD1D-ST", right: "BTDBD1D-ST" },
  "Lateral Closing Wedge HTO Plate (Size 2)": { left: "BTGBD2D-ST", right: "BTDBD2D-ST" },
  "Medial Closing Wedge HTO Plate (Size 1)": { left: "BTGMD1D-ST", right: "BTDMD1D-ST" },
  "Medial Closing Wedge HTO Plate (Size 2)": { left: "BTGMD2D-ST", right: "BTDMD2D-ST" },
  "Lateral Opening Distal Femoral Osteotomy (DFO) Plate": { left: "JATGL1D-ST", right: "JATDL1D-ST" },
  "Medial Closing Distal Femoral Osteotomy (DFO) Plate": { left: "JBTGM1D-ST", right: "JBTDM1D-ST" },
  "Lateral Closing Distal Femoral Osteotomy (DFO) Plate": { left: "JCTGL1D-ST", right: "JCTDL1D-ST" },
  "Deflexion Osteotomy Plate – Size 1": { left: "BATGMD1D-ST", right: "BATDMD1D-ST" },
  "Deflexion Osteotomy Plate – Size 2": { left: "BATGMD2D-ST", right: "BATDMD2D-ST" },
  "Distal Femoral Derotation Plate – Medial": { left: "JCTGM1D-ST", right: "JCTDM1D-ST" },
  "Distal Femoral Derotation Plate – Lateral": { left: "JCTGL1D-ST", right: "JCTDL1D-ST" }
};

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // First, let's remove the AlpineJS block if we added it
    content = content.replace(/<div class="flex flex-col space-y-3 mb-6 relative z-10" x-data="\{ code: '' \}">.*?<\/div>\s*<\/div>/gs, '');
    
    // We want to insert the buttons and the code display area right after the description <p>
    content = content.replace(/(<h3 class="[^"]*">(.*?)<\/h3>\s*<p class="[^"]*">.*?<\/p>)/g, (match, prefix, title) => {
        let codes = codeMap[title.trim()] || { left: "N/A", right: "N/A" };
        
        let buttonsHtml = `
                        <div class="flex flex-col space-y-3 mb-6 relative z-10">
                            <div class="flex space-x-3">
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(${codes.left})'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Left</button>
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(${codes.right})'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Right</button>
                            </div>
                            <div class="text-sm font-bold text-medical-600 bg-medical-50 border border-medical-100 rounded-lg p-3 text-center transition-all" style="display: none;"></div>
                        </div>`;
        return prefix + buttonsHtml;
    });
    
    fs.writeFileSync(filename, content);
    console.log(`${filename}: updated.`);
}

processFile('products.html');
processFile('products-2.html');
