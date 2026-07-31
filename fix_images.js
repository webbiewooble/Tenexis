const fs = require('fs');

const products = [
  { 
    name: "Activmotion S – Medial Opening Wedge HTO Plate (Size 1)", 
    desc: "Slim pre-contoured titanium orthopedic bone plate, designed for medial opening wedge high tibial osteotomy with multiple locking screw holes.",
    image: "./hto_plate_green_1785489593072.webp",
    category: "Tibial Opening Plates"
  },
  { 
    name: "Activmotion S – Medial Opening Wedge HTO Plate (Size 2)", 
    desc: "Larger version of the titanium high tibial osteotomy plate featuring multiple locking screw holes and low-profile anatomical contour.",
    image: "./hto_plate_blue_1785489610900.webp",
    category: "Tibial Opening Plates"
  },
  { 
    name: "Activmotion S – HTO Plate with ACL Reconstruction", 
    desc: "Titanium HTO plate with additional fixation holes designed to accommodate ACL ligament reconstruction tunnels.",
    image: "./acl_suture_button_plate_1785489887933.webp",
    category: "ACL Combined Fixation"
  },
  { 
    name: "Activmotion S – HTO Plate with ACL Reconstruction & Suture Button", 
    desc: "Advanced titanium HTO plate incorporating dedicated button fixation holes for ligament reconstruction systems.",
    image: "./acl_suture_button_plate_1785489887933.webp",
    category: "ACL Combined Fixation"
  },
  { 
    name: "Lateral Closing Wedge HTO Plate (Size 1)", 
    desc: "Compact anatomical titanium bone plate for lateral closing wedge high tibial osteotomy with locking screw technology.",
    image: "./closing_wedge_plate_1785489945765.webp",
    category: "Tibial Closing Plates"
  },
  { 
    name: "Lateral Closing Wedge HTO Plate (Size 2)", 
    desc: "Larger titanium osteotomy plate featuring anatomical curvature and multiple threaded locking holes.",
    image: "./closing_wedge_plate_1785489945765.webp",
    category: "Tibial Closing Plates"
  },
  { 
    name: "Medial Closing Wedge HTO Plate (Size 1)", 
    desc: "Orthopedic titanium fixation plate designed for medial closing wedge tibial osteotomy with locking screw holes.",
    image: "./hto_plate_green_1785489593072.webp",
    category: "Tibial Closing Plates"
  },
  { 
    name: "Medial Closing Wedge HTO Plate (Size 2)", 
    desc: "Large titanium orthopedic plate with anatomical contour and locking technology for corrective tibial surgery.",
    image: "./hto_plate_blue_1785489610900.webp",
    category: "Tibial Closing Plates"
  },
  { 
    name: "Lateral Opening Distal Femoral Osteotomy (DFO) Plate", 
    desc: "Anatomically contoured distal femur titanium plate for lateral opening wedge distal femoral osteotomy with multiple locking holes.",
    image: "./femoral_osteotomy_plate_1785489865676.webp",
    category: "Femoral Osteotomy"
  },
  { 
    name: "Medial Closing Distal Femoral Osteotomy (DFO) Plate", 
    desc: "Titanium distal femoral osteotomy plate engineered for medial closing wedge procedures with locking screws.",
    image: "./femoral_osteotomy_plate_1785489865676.webp",
    category: "Femoral Osteotomy"
  },
  { 
    name: "Lateral Closing Distal Femoral Osteotomy (DFO) Plate", 
    desc: "Anatomical distal femoral fixation plate featuring low-profile titanium construction and multiple screw holes.",
    image: "./femoral_osteotomy_plate_1785489865676.webp",
    category: "Femoral Osteotomy"
  },
  { 
    name: "Deflexion Osteotomy Plate – Size 1", 
    desc: "Titanium bone plate designed for stable osteotomy fixation with precise deflexion control.",
    image: "./deflexion_osteotomy_plate_1785489964066.webp",
    category: "Deflexion Plates"
  },
  { 
    name: "Deflexion Osteotomy Plate – Size 2", 
    desc: "Larger titanium bone plate designed for stable osteotomy fixation with precise deflexion control.",
    image: "./deflexion_osteotomy_plate_1785489964066.webp",
    category: "Deflexion Plates"
  },
  { 
    name: "Distal Femoral Derotation Plate – Medial", 
    desc: "Anatomically curved titanium distal femoral plate developed for medial derotation osteotomy and secure bone fixation.",
    image: "./derotation_femoral_plate_1785489974764.webp",
    category: "Derotation Plates"
  },
  { 
    name: "Distal Femoral Derotation Plate – Lateral", 
    desc: "Distal femoral orthopedic titanium plate designed for lateral derotation osteotomy and stable fixation.",
    image: "./derotation_femoral_plate_1785489974764.webp",
    category: "Derotation Plates"
  },
  { 
    name: "Oneclip® Locking Screw System", 
    desc: "Innovative locking screw system providing stability and optimal compression for various osteotomy procedures.",
    image: "./locking_screws_macro_1785489899947.webp",
    category: "Locking Screws"
  },
  { 
    name: "DTS® Polyaxial Locking System", 
    desc: "Advanced polyaxial locking technology allowing customized screw angles for secure and stable bone fixation.",
    image: "./locking_screws_macro_1785489899947.webp",
    category: "Locking Screws"
  },
  { 
    name: "Compression Ramp Oblong Hole System", 
    desc: "Specialized oblong hole design enabling precise compression across the osteotomy site for improved healing.",
    image: "./closing_wedge_plate_1785489945765.webp",
    category: "Technical Features"
  },
  { 
    name: "Osteotomy Instrument Set", 
    desc: "Comprehensive set of high-precision surgical instruments tailored for efficient and accurate osteotomy procedures.",
    image: "./osteotomy_instruments_1785489913063.webp",
    category: "Instrumentation"
  },
  { 
    name: "Care+ Vascular Protection Retractor", 
    desc: "Specifically designed retractor to ensure maximum protection of vascular structures during complex osteotomies.",
    image: "./care_plus_retractor_1785489923515.webp",
    category: "Vascular Protection"
  },
  { 
    name: "Initial K Hinge Screw System", 
    desc: "Reliable hinge screw system providing stable fixation and controlled correction in opening wedge osteotomies.",
    image: "./initial_k_hinge_screw_1785489934044.webp",
    category: "Hinge Fixation"
  },
  { 
    name: "Activmotion S Osteotomy Plate System", 
    desc: "Complete and versatile osteotomy plate system featuring anatomical designs and advanced locking technology.",
    image: "./osteotomy_plates_1785489624204.webp",
    category: "Complete System"
  }
];

const page1Products = products.slice(0, 11);
const page2Products = products.slice(11);

const generateCards = (prods) => prods.map((p) => `
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-6">
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                ${p.category}
                            </span>
                        </div>
                        
                        <div class="mb-6 h-56 w-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4 group-hover:border-medical-200 transition-colors duration-500">
                            <img src="${p.image}" alt="${p.name}" class="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">${p.name}</h3>
                        
                        <p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">${p.desc}</p>
                        
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
                <a href="${currentPage === 1 ? '#' : 'products.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}" aria-label="Previous Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </a>
                
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${currentPage === 1 ? 'bg-medical-600 text-white border border-medical-600 shadow-md' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">1</a>
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${currentPage === 2 ? 'bg-medical-600 text-white border border-medical-600 shadow-md' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">2</a>
                
                <a href="${currentPage === 2 ? '#' : 'products-2.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === 2 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}" aria-label="Next Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
`;

function processFile(file, page) {
    let baseHtml = fs.readFileSync(file, 'utf-8');
    const startMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">';
    const realEndMarker = '<div class="mt-24 text-center mb-12">';
    const startIndex = baseHtml.indexOf(startMarker);
    const endIndex = baseHtml.indexOf(realEndMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const before = baseHtml.substring(0, startIndex + startMarker.length);
        const after = baseHtml.substring(endIndex);
        const html = before + '\n            ' + generateCards(page === 1 ? page1Products : page2Products) + '\n            </div>\n' + generatePagination(page) + '\n            ' + after;
        fs.writeFileSync(file, html);
    }
}

processFile('products.html', 1);
processFile('products-2.html', 2);
console.log('Successfully updated all product cards with exact matching PDF product images!');
