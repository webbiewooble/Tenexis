const fs = require('fs');

const newProducts = [
  "Activmotion S – Medial Opening Wedge HTO Plate (Size 1)",
  "Activmotion S – Medial Opening Wedge HTO Plate (Size 2)",
  "Activmotion S – HTO Plate with ACL Reconstruction",
  "Activmotion S – HTO Plate with ACL Reconstruction & Suture Button",
  "Lateral Closing Wedge HTO Plate (Size 1)",
  "Lateral Closing Wedge HTO Plate (Size 2)",
  "Medial Closing Wedge HTO Plate (Size 1)",
  "Medial Closing Wedge HTO Plate (Size 2)",
  "Lateral Opening Distal Femoral Osteotomy (DFO) Plate",
  "Medial Closing Distal Femoral Osteotomy (DFO) Plate",
  "Lateral Closing Distal Femoral Osteotomy (DFO) Plate",
  "Deflexion Osteotomy Plate – Size 1",
  "Deflexion Osteotomy Plate – Size 2",
  "Distal Femoral Derotation Plate – Medial",
  "Distal Femoral Derotation Plate – Lateral",
  "Oneclip®️ Locking Screw System",
  "DTS®️ Polyaxial Locking System",
  "Compression Ramp Oblong Hole System",
  "Osteotomy Instrument Set",
  "Care+ Vascular Protection Retractor",
  "Initial K Hinge Screw System",
  "Activmotion S Osteotomy Plate System"
];

function processFile(filename, startIndex) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Regex to match <h3 ...>TITLE</h3>\n\n<p ...>DESC</p>
    // We want to replace the TITLE and DESC.
    
    // Actually, we can use a simpler approach by just finding the h3s and ps one by one
    let h3Count = 0;
    
    content = content.replace(/<h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">(.*?)<\/h3>\s*<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">(.*?)<\/p>/gs, (match, title, desc) => {
        if (startIndex + h3Count < newProducts.length) {
            let newTitle = newProducts[startIndex + h3Count];
            let newDesc = "Premium implant and surgical solution optimized for maximum patient outcomes and precise surgical correction.";
            if (newTitle.includes("Retractor")) newDesc = "Protects the vascular structures during the cutting phase with dedicated surgical retractors.";
            else if (newTitle.includes("Hinge Screw")) newDesc = "A 4.5 mm cannulated headless compressive screw to reinforce the bone hinge during osteotomy.";
            else if (newTitle.includes("Screw System") || newTitle.includes("Hole System")) newDesc = "Advanced locking technology ensuring optimal stability, controlled compression, and secure fixation.";
            else if (newTitle.includes("Instrument")) newDesc = "Dedicated instruments to prepare, create and maintain the appropriate angular correction during osteosynthesis.";
            else if (newTitle.includes("HTO") || newTitle.includes("DFO") || newTitle.includes("Osteotomy")) newDesc = "Anatomically contoured plate designed for secure fixation and optimal stability in osteotomy procedures.";
            
            h3Count++;
            return `<h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">${newTitle}</h3>\n                        \n                        <p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">${newDesc}</p>`;
        }
        return match; // If there are more than expected
    });
    
    fs.writeFileSync(filename, content);
    console.log(`${filename}: Replaced ${h3Count} items.`);
}

processFile('products.html', 0);
processFile('products-2.html', 11);

