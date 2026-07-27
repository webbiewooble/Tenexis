const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const startTag = '<section id="products"';
const endTag = '<section class="py-24 bg-white reveal relative overflow-hidden">';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

const products = [
  {
    name: "Shoulder & Clavicle",
    items: [
      "Apex Clavicle Locking Plate",
      "Apex Distal Clavicle Hook Plate",
      "Apex Medial Clavicle Plate",
      "OrthoPro Proximal Humerus Plate",
      "OrthoPro Greater Tuberosity Plate",
      "Shoulder Osteotomy Plate"
    ]
  },
  {
    name: "Elbow",
    items: [
      "Distal Humerus Locking Plate",
      "Medial Distal Humerus Plate",
      "Lateral Distal Humerus Plate",
      "Olecranon Locking Plate",
      "Radial Head Plate",
      "Coronoid Process Plate"
    ]
  },
  {
    name: "Forearm",
    items: [
      "Radius Shaft Plate",
      "Ulna Shaft Plate",
      "Radius Osteotomy Plate",
      "Ulna Osteotomy Plate",
      "Forearm Compression Plate",
      "Forearm Locking Plate"
    ]
  },
  {
    name: "Wrist",
    items: [
      "Volar Distal Radius Plate",
      "Dorsal Distal Radius Plate",
      "Radial Styloid Plate",
      "Distal Radius Fragment Plate",
      "Wrist Bridge Plate",
      "Wrist Compression Plate"
    ]
  },
  {
    name: "Hand",
    items: [
      "Metacarpal Locking Plate",
      "Metacarpal Mini Plate",
      "Phalangeal Plate",
      "Finger Compression Plate",
      "Mini Fragment Plate",
      "Hand Screw Set"
    ]
  },
  {
    name: "Hip",
    items: [
      "Proximal Femur Locking Plate",
      "Greater Trochanter Plate",
      "Hip Osteotomy Plate",
      "Femoral Neck System",
      "Pelvic Reconstruction Plate",
      "Acetabular Plate"
    ]
  },
  {
    name: "Knee",
    items: [
      "Activmotion HTO Plates",
      "Activmotion DFO Plates",
      "Activmotion S & Derotation",
      "Distal Femur Osteotomy Plate",
      "High Tibial Osteotomy Plate",
      "Patient-Specific Instruments"
    ]
  },
  {
    name: "Ankle",
    items: [
      "Distal Tibia Locking Plate",
      "Distal Fibula Plate",
      "Pilon Fracture Plate",
      "Ankle Fusion Plate",
      "Medial Malleolus Plate",
      "Posterior Malleolus Plate"
    ]
  },
  {
    name: "Foot",
    items: [
      "Calcaneal Locking Plate",
      "Talus Plate",
      "Midfoot Fusion Plate",
      "Metatarsal Plate",
      "MTP Fusion Plate",
      "Tarsal Navicular Plate"
    ]
  }
];

let cardsHtml = products.map(p => `
                <div class="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-medical-200 transition-all duration-300 flex flex-col">
                    <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 text-center mb-6">${p.name}</h3>
                    <div class="w-10 h-1 bg-medical-500 rounded-full mb-6"></div>
                    <ul class="space-y-4">
                        ${p.items.map(item => `
                        <li class="flex items-start text-sm text-slate-600 font-medium">
                            <svg class="w-4 h-4 text-medical-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            ${item}
                        </li>
                        `).join('')}
                    </ul>
                </div>
`).join('');

const newSection = `    <section id="products" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Core Expertise</span>
                <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900">Osteotomy Portfolio</h2>
                <p class="text-slate-600 font-light mt-6 max-w-2xl mx-auto">Featuring comprehensive high-precision anatomical plates engineered for optimal bone realignment across various indications.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                ${cardsHtml}
            </div>

            <div class="mt-24 text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-display font-bold text-slate-900">Pipeline Innovations</h2>
                <p class="text-slate-600 font-light mt-4 max-w-2xl mx-auto">We are actively expanding our portfolio to cover advanced solutions in other core orthopedic disciplines.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Product 2: Arthroscopy (Coming Soon) -->
                <div class="group flex flex-col bg-slate-900 rounded-xl p-8 lg:p-10 shadow-2xl shadow-medical-900/20 text-left relative overflow-hidden border border-slate-800 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-br from-medical-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="w-16 h-16 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mb-8 relative z-10">
                        <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <div class="flex items-center justify-between mb-4 relative z-10">
                        <h3 class="text-2xl font-display font-bold text-white">Arthroscopy</h3>
                        <span class="px-3 py-1 bg-accent-500/10 text-accent-400 text-xs font-bold uppercase tracking-widest rounded-full border border-accent-500/20">Coming Soon</span>
                    </div>
                    <p class="text-slate-400 font-light leading-relaxed mb-8 relative z-10 text-base">Advanced visualization systems, sports medicine suturing implants, and tools optimized for minimally invasive procedures.</p>
                </div>

                <!-- Product 3: Trauma Care (Coming Soon) -->
                <div class="group flex flex-col bg-slate-900 rounded-xl p-8 lg:p-10 shadow-2xl shadow-medical-900/20 text-left relative overflow-hidden border border-slate-800 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-br from-medical-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="w-16 h-16 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mb-8 relative z-10">
                        <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div class="flex items-center justify-between mb-4 relative z-10">
                        <h3 class="text-2xl font-display font-bold text-white">Trauma Care</h3>
                        <span class="px-3 py-1 bg-accent-500/10 text-accent-400 text-xs font-bold uppercase tracking-widest rounded-full border border-accent-500/20">Coming Soon</span>
                    </div>
                    <p class="text-slate-400 font-light leading-relaxed mb-8 relative z-10 text-base">Comprehensive trauma solutions including plates, screws, and intramedullary nailing systems for fracture management.</p>
                </div>
            </div>

        </div>
    </section>
`;

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    fs.writeFileSync('index.html', before + newSection + after);
    console.log("Updated products grid.");
} else {
    console.log("Could not find bounds.");
}
