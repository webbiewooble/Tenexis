const fs = require('fs');

const products = [
  { name: "Medial Opening HTO Plate", desc: "Slim pre-contoured titanium orthopedic bone plate for the left proximal tibia, designed for medial opening wedge high tibial osteotomy with multiple locking screw holes." },
  { name: "Medial Opening HTO Plate", desc: "Anatomically curved titanium bone fixation plate for the right proximal tibia with locking holes for medial opening wedge osteotomy." },
  { name: "Medial Opening HTO Plate", desc: "Larger version of the left-sided titanium high tibial osteotomy plate featuring multiple locking screw holes and low-profile anatomical contour." },
  { name: "Medial Opening HTO Plate", desc: "Large right-sided anatomical titanium HTO plate with elongated body and multiple locking screw holes." },
  { name: "HTO + Ligamentoplasty Plate", desc: "Left-sided titanium HTO plate with additional fixation holes designed to accommodate ACL ligament reconstruction tunnels." },
  { name: "HTO + Ligamentoplasty Plate", desc: "Right anatomical titanium osteotomy plate featuring extra fixation points for combined ACL reconstruction procedures." },
  { name: "HTO + Ligamentoplasty & Button Plate", desc: "Advanced left-sided titanium HTO plate incorporating dedicated button fixation holes for ligament reconstruction systems." },
  { name: "HTO + Ligamentoplasty & Button Plate", desc: "Right-sided orthopedic titanium plate with integrated button fixation design for ligamentoplasty and osteotomy surgery." },
  { name: "Lateral Closing HTO Plate", desc: "Compact left anatomical titanium bone plate for lateral closing wedge high tibial osteotomy with locking screw technology." },
  { name: "Lateral Closing HTO Plate", desc: "Right-sided titanium orthopedic fixation plate designed for lateral closing wedge tibial osteotomy procedures." },
  { name: "Lateral Closing HTO Plate", desc: "Larger left-sided titanium osteotomy plate featuring anatomical curvature and multiple threaded locking holes." },
  { name: "Lateral Closing HTO Plate", desc: "Large right anatomical titanium locking plate for stable fixation during lateral closing wedge osteotomy." },
  { name: "Medial Closing HTO Plate", desc: "Left-sided orthopedic titanium fixation plate designed for medial closing wedge tibial osteotomy with locking screw holes." },
  { name: "Medial Closing HTO Plate", desc: "Right anatomical titanium plate offering rigid fixation for medial closing wedge osteotomy surgery." },
  { name: "Medial Closing HTO Plate", desc: "Large left titanium orthopedic plate with anatomical contour and locking technology for corrective tibial surgery." },
  { name: "Medial Closing DFO Plate", desc: "Large right-sided titanium bone plate designed for stable medial closing wedge osteotomy fixation." },
  { name: "Lateral Opening DFO Plate", desc: "Anatomically contoured left distal femur titanium plate for lateral opening wedge distal femoral osteotomy with multiple locking holes." },
  { name: "Lateral Opening DFO Plate", desc: "Right distal femoral orthopedic titanium plate designed for lateral opening wedge correction and stable fixation." },
  { name: "Medial Closing DFO Plate", desc: "Left-sided titanium distal femoral osteotomy plate engineered for medial closing wedge procedures with locking screws." },
  { name: "Medial Closing DFO Plate", desc: "Right anatomical distal femoral fixation plate featuring low-profile titanium construction and multiple screw holes." },
  { name: "Medial Derotation & Closing DFO Plate", desc: "Specialized left/right anatomical titanium distal femur plate designed for femoral derotation and closing wedge osteotomy with locking fixation." },
  { name: "Lateral Derotation & Closing DFO Plate", desc: "Anatomically curved titanium distal femoral plate developed for lateral derotation osteotomy and secure bone fixation." }
];

const page1Products = products.slice(0, 11);
const page2Products = products.slice(11);

const iconSvg = `<svg class="w-8 h-8 text-medical-600 group-hover:text-medical-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`;

const generateCards = (prods) => prods.map(p => `
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-6">
                            \${iconSvg}
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                Titanium Fixation
                            </span>
                        </div>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">\${p.name}</h3>
                        
                        <p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">\${p.desc}</p>
                        
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                        </div>
                    </div>
                </div>`).join('');

const generatePagination = (currentPage) => `
            <div class="flex justify-center items-center mt-16 space-x-2 relative z-10">
                <a href="\${currentPage === 1 ? '#' : 'products.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border \${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}" aria-label="Previous Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </a>
                
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm \${currentPage === 1 ? 'bg-medical-600 text-white border border-medical-600 shadow-md' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">1</a>
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm \${currentPage === 2 ? 'bg-medical-600 text-white border border-medical-600 shadow-md' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">2</a>
                
                <a href="\${currentPage === 2 ? '#' : 'products-2.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border \${currentPage === 2 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}" aria-label="Next Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
`;

let baseHtml = fs.readFileSync('products.html', 'utf-8');

const startMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">';
const endMarker = '<div class="mt-24 text-center mb-12">';

const startIndex = baseHtml.indexOf(startMarker);
const endIndex = baseHtml.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const before = baseHtml.substring(0, startIndex + startMarker.length);
    const after = baseHtml.substring(endIndex);
    
    // Page 1
    fs.writeFileSync('products.html', before + generateCards(page1Products) + '\n            </div>\n' + generatePagination(1) + '\n            ' + after);
    
    // Page 2
    fs.writeFileSync('products-2.html', before + generateCards(page2Products) + '\n            </div>\n' + generatePagination(2) + '\n            ' + after);
    
    console.log("Updated product titles.");
} else {
    console.log("Error finding start/end markers in products.html");
}
