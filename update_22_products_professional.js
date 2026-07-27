const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const products = [
  { name: "Medial Opening HTO Plate – Left Size 1", desc: "Anatomically contoured left-sided plate for precise medial opening wedge high tibial osteotomy fixation." },
  { name: "Medial Opening HTO Plate – Right Size 1", desc: "Right-sided fixation plate providing stable support for medial opening wedge high tibial osteotomy procedures." },
  { name: "Medial Opening HTO Plate – Left Size 2", desc: "Larger left anatomical plate designed for secure fixation and optimal osteotomy stability." },
  { name: "Medial Opening HTO Plate – Right Size 2", desc: "Large right-sided HTO plate offering reliable fixation and accurate alignment correction." },
  { name: "HTO + Ligamentoplasty Plate – Left", desc: "Left-sided plate designed for combined high tibial osteotomy and ligament reconstruction procedures." },
  { name: "HTO + Ligamentoplasty Plate – Right", desc: "Right-sided osteotomy plate engineered to support simultaneous ligament reconstruction." },
  { name: "HTO + Ligamentoplasty & Button Plate – Left", desc: "Advanced left-sided plate compatible with ligamentoplasty and fixation button systems." },
  { name: "HTO + Ligamentoplasty & Button Plate – Right", desc: "Right-sided implant supporting combined osteotomy, ligament reconstruction, and button fixation." },
  { name: "Lateral Closing HTO Plate – Left Size 1", desc: "Left anatomical plate providing rigid fixation for lateral closing wedge high tibial osteotomy." },
  { name: "Lateral Closing HTO Plate – Right Size 1", desc: "Right-sided locking plate ensuring stable compression during lateral closing wedge osteotomy." },
  { name: "Lateral Closing HTO Plate – Left Size 2", desc: "Large left plate designed for enhanced fixation in complex closing wedge osteotomies." },
  { name: "Lateral Closing HTO Plate – Right Size 2", desc: "Large right-sided plate delivering dependable fixation and correction stability." },
  { name: "Medial Closing HTO Plate – Left Size 1", desc: "Left-sided implant designed for secure fixation in medial closing wedge osteotomy procedures." },
  { name: "Medial Closing HTO Plate – Right Size 1", desc: "Anatomically contoured right plate offering reliable stability for medial closing wedge osteotomy." },
  { name: "Medial Closing HTO Plate – Left Size 2", desc: "Larger left-sided plate engineered for precise correction and durable fixation." },
  { name: "Medial Closing HTO Plate – Right Size 2", desc: "Large right anatomical plate providing strong fixation and optimized load distribution." },
  { name: "Lateral Opening DFO Plate – Left", desc: "Left distal femoral osteotomy plate designed for stable lateral opening wedge correction." },
  { name: "Lateral Opening DFO Plate – Right", desc: "Right-sided distal femoral plate delivering accurate correction with secure locking fixation." },
  { name: "Medial Closing DFO Plate – Left", desc: "Left anatomical plate providing rigid fixation for medial closing distal femoral osteotomy." },
  { name: "Medial Closing DFO Plate – Right", desc: "Right-sided implant engineered for reliable compression and long-term osteotomy stability." },
  { name: "Medial Derotation & Closing DFO Plate", desc: "Specialized plate designed for medial femoral derotation and closing wedge osteotomy procedures." },
  { name: "Lateral Derotation & Closing DFO Plate", desc: "Anatomically designed plate for lateral femoral derotation with secure locking fixation." }
];

let cardsHtml = products.map(p => `
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <span class="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                            Osteotomy Fixation
                        </span>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-5 leading-snug group-hover:text-medical-700 transition-colors duration-300">${p.name}</h3>
                        
                        <p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">${p.desc}</p>
                        
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>Premium Grade</span>
                            </div>
                            <div class="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-all duration-500">
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>`).join('');

// the grid tag is <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
// let's change gap-8 to gap-8 lg:gap-10
const startMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">';
const newStartMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">';
const endMarker = '<div class="mt-24 text-center mb-12">';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    fs.writeFileSync('index.html', before + newStartMarker + cardsHtml + '\n            </div>\n\n            ' + after);
    console.log("Updated 22 products with professional UI.");
} else {
    console.log("Could not find markers.");
    // try to find the previous modified one just in case
    const fallbackStartMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">';
    if (content.indexOf(fallbackStartMarker) !== -1) {
         const fallbackStart = content.indexOf(fallbackStartMarker);
         const before = content.substring(0, fallbackStart);
         fs.writeFileSync('index.html', before + newStartMarker + cardsHtml + '\n            </div>\n\n            ' + after);
         console.log("Updated 22 products with professional UI (fallback).");
    }
}
