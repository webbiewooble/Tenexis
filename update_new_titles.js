const fs = require('fs');

const products = [
  { name: "Activmotion S – Medial Opening Wedge HTO Plate (Size 1)", desc: "Slim pre-contoured titanium orthopedic bone plate, designed for medial opening wedge high tibial osteotomy with multiple locking screw holes." },
  { name: "Activmotion S – Medial Opening Wedge HTO Plate (Size 2)", desc: "Larger version of the titanium high tibial osteotomy plate featuring multiple locking screw holes and low-profile anatomical contour." },
  { name: "Activmotion S – HTO Plate with ACL Reconstruction", desc: "Titanium HTO plate with additional fixation holes designed to accommodate ACL ligament reconstruction tunnels." },
  { name: "Activmotion S – HTO Plate with ACL Reconstruction & Suture Button", desc: "Advanced titanium HTO plate incorporating dedicated button fixation holes for ligament reconstruction systems." },
  { name: "Lateral Closing Wedge HTO Plate (Size 1)", desc: "Compact anatomical titanium bone plate for lateral closing wedge high tibial osteotomy with locking screw technology." },
  { name: "Lateral Closing Wedge HTO Plate (Size 2)", desc: "Larger titanium osteotomy plate featuring anatomical curvature and multiple threaded locking holes." },
  { name: "Medial Closing Wedge HTO Plate (Size 1)", desc: "Orthopedic titanium fixation plate designed for medial closing wedge tibial osteotomy with locking screw holes." },
  { name: "Medial Closing Wedge HTO Plate (Size 2)", desc: "Large titanium orthopedic plate with anatomical contour and locking technology for corrective tibial surgery." },
  { name: "Lateral Opening Distal Femoral Osteotomy (DFO) Plate", desc: "Anatomically contoured distal femur titanium plate for lateral opening wedge distal femoral osteotomy with multiple locking holes." },
  { name: "Medial Closing Distal Femoral Osteotomy (DFO) Plate", desc: "Titanium distal femoral osteotomy plate engineered for medial closing wedge procedures with locking screws." },
  { name: "Lateral Closing Distal Femoral Osteotomy (DFO) Plate", desc: "Anatomical distal femoral fixation plate featuring low-profile titanium construction and multiple screw holes." },
  { name: "Deflexion Osteotomy Plate – Size 1", desc: "Titanium bone plate designed for stable osteotomy fixation with precise deflexion control." },
  { name: "Deflexion Osteotomy Plate – Size 2", desc: "Larger titanium bone plate designed for stable osteotomy fixation with precise deflexion control." },
  { name: "Distal Femoral Derotation Plate – Medial", desc: "Anatomically curved titanium distal femoral plate developed for medial derotation osteotomy and secure bone fixation." },
  { name: "Distal Femoral Derotation Plate – Lateral", desc: "Distal femoral orthopedic titanium plate designed for lateral derotation osteotomy and stable fixation." },
  { name: "Oneclip® Locking Screw System", desc: "Innovative locking screw system providing stability and optimal compression for various osteotomy procedures." },
  { name: "DTS® Polyaxial Locking System", desc: "Advanced polyaxial locking technology allowing customized screw angles for secure and stable bone fixation." },
  { name: "Compression Ramp Oblong Hole System", desc: "Specialized oblong hole design enabling precise compression across the osteotomy site for improved healing." },
  { name: "Osteotomy Instrument Set", desc: "Comprehensive set of high-precision surgical instruments tailored for efficient and accurate osteotomy procedures." },
  { name: "Care+ Vascular Protection Retractor", desc: "Specifically designed retractor to ensure maximum protection of vascular structures during complex osteotomies." },
  { name: "Initial K Hinge Screw System", desc: "Reliable hinge screw system providing stable fixation and controlled correction in opening wedge osteotomies." },
  { name: "Activmotion S Osteotomy Plate System", desc: "Complete and versatile osteotomy plate system featuring anatomical designs and advanced locking technology." }
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
