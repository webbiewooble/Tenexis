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
                <div class="bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-medical-200 transition-all duration-300 flex flex-col">
                    <h3 class="text-lg lg:text-xl font-display font-bold text-slate-900 mb-4 leading-tight">${p.name}</h3>
                    <div class="w-10 h-1 bg-medical-500 rounded-full mb-4"></div>
                    <p class="text-sm text-slate-600 font-light leading-relaxed flex-grow">${p.desc}</p>
                </div>`).join('');

const startMarker = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">';
const endMarker = '<div class="mt-24 text-center mb-12">';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex + startMarker.length);
    const after = content.substring(endIndex);
    fs.writeFileSync('index.html', before + cardsHtml + '\n            </div>\n\n            ' + after);
    console.log("Updated 22 products.");
} else {
    console.log("Could not find markers.");
}
