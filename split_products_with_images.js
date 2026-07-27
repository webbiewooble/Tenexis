const fs = require('fs');

const products = [
  { name: "Medial Opening HTO Plate – Left Size 1", desc: "Slim pre-contoured titanium orthopedic bone plate for the left proximal tibia, designed for medial opening wedge high tibial osteotomy with multiple locking screw holes." },
  { name: "Medial Opening HTO Plate – Right Size 1", desc: "Anatomically curved titanium bone fixation plate for the right proximal tibia with locking holes for medial opening wedge osteotomy." },
  { name: "Medial Opening HTO Plate – Left Size 2", desc: "Larger version of the left-sided titanium high tibial osteotomy plate featuring multiple locking screw holes and low-profile anatomical contour." },
  { name: "Medial Opening HTO Plate – Right Size 2", desc: "Large right-sided anatomical titanium HTO plate with elongated body and multiple locking screw holes." },
  { name: "HTO + Ligamentoplasty Plate – Left", desc: "Left-sided titanium HTO plate with additional fixation holes designed to accommodate ACL ligament reconstruction tunnels." },
  { name: "HTO + Ligamentoplasty Plate – Right", desc: "Right anatomical titanium osteotomy plate featuring extra fixation points for combined ACL reconstruction procedures." },
  { name: "HTO + Ligamentoplasty & Button Plate – Left", desc: "Advanced left-sided titanium HTO plate incorporating dedicated button fixation holes for ligament reconstruction systems." },
  { name: "HTO + Ligamentoplasty & Button Plate – Right", desc: "Right-sided orthopedic titanium plate with integrated button fixation design for ligamentoplasty and osteotomy surgery." },
  { name: "Lateral Closing HTO Plate – Left Size 1", desc: "Compact left anatomical titanium bone plate for lateral closing wedge high tibial osteotomy with locking screw technology." },
  { name: "Lateral Closing HTO Plate – Right Size 1", desc: "Right-sided titanium orthopedic fixation plate designed for lateral closing wedge tibial osteotomy procedures." },
  { name: "Lateral Closing HTO Plate – Left Size 2", desc: "Larger left-sided titanium osteotomy plate featuring anatomical curvature and multiple threaded locking holes." },
  { name: "Lateral Closing HTO Plate – Right Size 2", desc: "Large right anatomical titanium locking plate for stable fixation during lateral closing wedge osteotomy." },
  { name: "Medial Closing HTO Plate – Left Size 1", desc: "Left-sided orthopedic titanium fixation plate designed for medial closing wedge tibial osteotomy with locking screw holes." },
  { name: "Medial Closing HTO Plate – Right Size 1", desc: "Right anatomical titanium plate offering rigid fixation for medial closing wedge osteotomy surgery." },
  { name: "Medial Closing HTO Plate – Left Size 2", desc: "Large left titanium orthopedic plate with anatomical contour and locking technology for corrective tibial surgery." },
  { name: "Medial Closing HTO Plate – Right Size 2", desc: "Large right-sided titanium bone plate designed for stable medial closing wedge osteotomy fixation." },
  { name: "Lateral Opening DFO Plate – Left", desc: "Anatomically contoured left distal femur titanium plate for lateral opening wedge distal femoral osteotomy with multiple locking holes." },
  { name: "Lateral Opening DFO Plate – Right", desc: "Right distal femoral orthopedic titanium plate designed for lateral opening wedge correction and stable fixation." },
  { name: "Medial Closing DFO Plate – Left", desc: "Left-sided titanium distal femoral osteotomy plate engineered for medial closing wedge procedures with locking screws." },
  { name: "Medial Closing DFO Plate – Right", desc: "Right anatomical distal femoral fixation plate featuring low-profile titanium construction and multiple screw holes." },
  { name: "Medial Derotation & Closing DFO Plate", desc: "Specialized left/right anatomical titanium distal femur plate designed for femoral derotation and closing wedge osteotomy with locking fixation." },
  { name: "Lateral Derotation & Closing DFO Plate", desc: "Anatomically curved titanium distal femoral plate developed for lateral derotation osteotomy and secure bone fixation." }
];

const page1Products = products.slice(0, 11);
const page2Products = products.slice(11);

const generateCards = (prods) => prods.map(p => {
    let imgSrc = p.name.includes("DFO") ? "./assets/dfo_plate.jpg" : "./assets/hto_plate.jpg";
    
    return `
                <div class="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col text-left">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${imgSrc}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-6">
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                                Titanium Plate
                            </span>
                        </div>
                    </div>
                    
                    <div class="p-8 lg:p-10 flex flex-col h-full bg-white z-10 relative">
                        <h3 class="text-xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">${p.name}</h3>
                        
                        <p class="text-sm text-slate-600 font-light leading-relaxed mb-8 flex-grow">${p.desc}</p>
                        
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                            <div class="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-all duration-500">
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>`;
}).join('');

const page1CardsHtml = generateCards(page1Products);
const page2CardsHtml = generateCards(page2Products);

const startMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">';
const endMarker = '<div class="flex justify-center items-center mt-16 space-x-2 relative z-10">';

let originalProductsHtml = fs.readFileSync('products.html', 'utf-8');

const startIndex = originalProductsHtml.indexOf(startMarker);
const endIndex = originalProductsHtml.indexOf(endMarker);

const generatePagination = (currentPage) => `
            <div class="flex justify-center items-center mt-16 space-x-2 relative z-10">
                <a href="${currentPage === 1 ? '#' : 'products.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </a>
                
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${currentPage === 1 ? 'bg-medical-600 text-white border border-medical-600' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">1</a>
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm ${currentPage === 2 ? 'bg-medical-600 text-white border border-medical-600' : 'bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors'}">2</a>
                
                <a href="${currentPage === 2 ? '#' : 'products-2.html'}" class="w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === 2 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors'}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
`;

if (startIndex !== -1 && endIndex !== -1) {
    const before = originalProductsHtml.substring(0, startIndex + startMarker.length);
    // Find the end of the previous pagination section (if we ran this script before, but I need to make sure I don't leave double pagination)
    const afterPagination = originalProductsHtml.indexOf('<div class="mt-24 text-center mb-12">');
    const after = originalProductsHtml.substring(afterPagination);
    
    // Page 1
    fs.writeFileSync('products.html', before + page1CardsHtml + '\n            </div>\n' + generatePagination(1) + '\n            ' + after);
    
    // Page 2
    let products2Html = before + page2CardsHtml + '\n            </div>\n' + generatePagination(2) + '\n            ' + after;
    fs.writeFileSync('products-2.html', products2Html);
    
    console.log("Updated products with images and styling.");
} else {
    console.log("Could not find markers.");
}
