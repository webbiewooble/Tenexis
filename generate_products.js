const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const productsData = [
  { name: "Shoulder & Clavicle", items: ["Apex Clavicle Locking Plate", "Apex Distal Clavicle Hook Plate", "Apex Medial Clavicle Plate", "OrthoPro Proximal Humerus Plate", "OrthoPro Greater Tuberosity Plate", "GlenoFix Shoulder Instability System", "Shoulder Osteotomy Plate", "Universal Shoulder Screw Set"] },
  { name: "Elbow", items: ["Distal Humerus Locking Plate", "Medial Distal Humerus Plate", "Lateral Distal Humerus Plate", "Olecranon Locking Plate", "Radial Head Plate", "Coronoid Process Plate", "Elbow Reconstruction Plate", "Elbow Screw System"] },
  { name: "Forearm", items: ["Radius Shaft Plate", "Ulna Shaft Plate", "Radius Osteotomy Plate", "Ulna Osteotomy Plate", "Forearm Compression Plate", "Forearm Locking Plate", "Universal Forearm Screw Set"] },
  { name: "Wrist", items: ["Volar Distal Radius Plate", "Dorsal Distal Radius Plate", "Radial Styloid Plate", "Distal Radius Fragment Plate", "Wrist Bridge Plate", "Wrist Compression Plate", "Wrist Locking Screw System"] },
  { name: "Hand", items: ["Metacarpal Locking Plate", "Metacarpal Mini Plate", "Phalangeal Plate", "Finger Compression Plate", "Mini Fragment Plate", "Hand Screw Set", "K-Wire Instrument Set"] },
  { name: "Pelvis & Acetabulum", items: ["Pelvic Reconstruction Plate", "Acetabular Quadrilateral Plate", "Supra-Pectineal Plate", "Infra-Pectineal Plate", "Pubic Symphysis Plate", "Iliac Wing Plate", "Pelvic Screw System"] },
  { name: "Hip", items: ["Femoral Neck Plate", "Trochanteric Stabilization Plate", "Proximal Femur Locking Plate", "Greater Trochanter Plate", "Hip Compression Plate", "Hip Reconstruction Screw Set"] },
  { name: "Femur", items: ["Distal Femur Locking Plate", "Femoral Shaft Plate", "Periprosthetic Femur Plate", "Condylar Buttress Plate", "Femur Compression Plate", "Femur Locking Screw System"] },
  { name: "Knee", items: ["Tibial Plateau Plate (Lateral)", "Tibial Plateau Plate (Medial)", "Posterior Tibial Plateau Plate", "Patella Plate", "Knee Reconstruction Plate", "High Tibial Osteotomy Plate"] },
  { name: "Tibia", items: ["Proximal Tibia Locking Plate", "Tibial Shaft Plate", "Distal Tibia Plate", "Medial Distal Tibia Plate", "Anterolateral Tibia Plate", "Tibia Compression Plate", "Tibia Locking Screw Set"] },
  { name: "Ankle", items: ["Lateral Fibula Plate", "Distal Fibula Plate", "Medial Malleolus Plate", "Posterior Malleolus Plate", "Syndesmosis Fixation System", "Ankle Fusion Plate", "Ankle Locking Screw Set"] },
  { name: "Foot", items: ["Calcaneus Locking Plate", "Cuboid Plate", "Navicular Plate", "Talus Plate", "Lisfranc Plate", "Metatarsal Plate", "Hallux Fusion Plate", "Forefoot Reconstruction Plate", "Foot Compression Screw Set"] },
  { name: "Maxillofacial (CMF)", items: ["Mandible Reconstruction Plate", "Mandible Trauma Plate", "Orbital Floor Plate", "Midface Plate", "Zygomatic Plate", "Cranial Fixation Plate", "CMF Mini Screw System"] },
  { name: "Pediatric Trauma", items: ["Pediatric Distal Radius Plate", "Pediatric Femur Plate", "Pediatric Tibia Plate", "Pediatric Humerus Plate", "Pediatric Elastic Nail System"] },
  { name: "Osteotomy Solutions", items: ["High Tibial Osteotomy Plate", "Distal Femoral Osteotomy Plate", "Forearm Osteotomy Plate", "Foot Osteotomy Plate", "Patient-Specific Osteotomy Guide"] },
  { name: "Intramedullary Systems", items: ["Femoral Intramedullary Nail", "Tibial Intramedullary Nail", "Humeral Intramedullary Nail", "Elastic Intramedullary Nail", "Locking Bolt System"] },
  { name: "Trauma Screws", items: ["Cannulated Screw", "Cancellous Screw", "Cortical Screw", "Headless Compression Screw", "Locking Screw", "Variable Angle Locking Screw", "Bone Fixation Pin"] },
  { name: "External Fixation", items: ["Small Bone External Fixator", "Large Bone External Fixator", "Circular Ring Fixator", "Hybrid External Fixator", "Carbon Fiber Connecting Rod System"] },
  { name: "Surgical Instruments", items: ["Universal Locking Instrument Set", "Trauma Drill Guide Set", "Reduction Forceps Set", "Bone Holding Clamp Set", "Depth Gauge System", "Torque Limiting Screwdriver", "K-Wire Instrument Kit"] },
  { name: "Sterile Procedure Kits", items: ["Shoulder Sterile Kit", "Elbow Sterile Kit", "Wrist Sterile Kit", "Hand Sterile Kit", "Hip Sterile Kit", "Femur Sterile Kit", "Tibia Sterile Kit", "Ankle Sterile Kit", "Foot Sterile Kit"] },
  { name: "Patient-Specific Solutions", items: ["2D Surgical Planning", "3D Surgical Planning", "Patient-Specific Cutting Guides", "Personalized Implant Positioning", "Digital Surgical Planning", "Anatomical Reconstruction Service"] }
];

const standardTrauma = productsData.slice(0, 18);
const specializedSolutions = productsData.slice(18);

let html = '                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">\n';

for (const cat of standardTrauma) {
    html += '                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col h-full">\n';
    html += '                        <h4 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">' + cat.name + '</h4>\n';
    html += '                        <div class="w-8 h-1 bg-medical-500 rounded-full mb-4"></div>\n';
    html += '                        <ul class="space-y-2 mt-auto flex-grow flex flex-col justify-start">\n';
    
    for (const item of cat.items) {
        html += '                            <li class="flex items-start text-xs text-slate-600 leading-snug"><span class="text-medical-500 mr-2 mt-0.5 shrink-0">✓</span> <span>' + item + '</span></li>\n';
    }
    html += '                        </ul>\n';
    html += '                    </div>\n';
}
html += '                </div>\n';
html += '            </div>\n\n';

html += '            <!-- Value Added Services (Kits, Patient-Specific, Instruments) -->\n';
html += '            <div class="mt-24 relative z-10">\n';
html += '                <div class="max-w-3xl mx-auto text-center mb-16">\n';
html += '                    <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Advanced Solutions</span>\n';
html += '                    <h2 class="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Services & Specialized Care</h2>\n';
html += '                    <p class="text-slate-600 font-light text-lg leading-relaxed">\n';
html += '                        Comprehensive ecosystems surrounding our implants, driving surgical efficiency and precision.\n';
html += '                    </p>\n';
html += '                </div>\n';
html += '                \n';
html += '                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">\n';

for (const cat of specializedSolutions) {
    html += '                    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-medical-800 hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden group">\n';
    html += '                        <div class="absolute inset-0 bg-gradient-to-br from-medical-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>\n';
    html += '                        <div class="relative z-10 h-full flex flex-col">\n';
    html += '                            <h4 class="text-2xl font-display font-bold text-white mb-2">' + cat.name + '</h4>\n';
    html += '                            <div class="w-12 h-1 bg-accent-500 rounded-full mb-6 mt-2"></div>\n';
    html += '                            <ul class="space-y-3 mt-auto flex-grow">\n';
    
    for (const item of cat.items) {
        html += '                                <li class="flex items-start text-sm text-slate-300"><span class="w-1.5 h-1.5 rounded-full bg-accent-400 mr-3 mt-1.5 shrink-0"></span> <span>' + item + '</span></li>\n';
    }
    html += '                            </ul>\n';
    html += '                        </div>\n';
    html += '                    </div>\n';
}

html += '                </div>\n';
html += '            </div>\n\n';

html += '            <!-- Why Choose Our Solutions -->\n';
html += '            <div class="mt-24 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 text-left relative z-10 shadow-sm">\n';
html += '                <div class="text-center mb-12">\n';
html += '                    <h3 class="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-4">Why Choose Our Solutions?</h3>\n';
html += '                    <p class="text-slate-600 font-light">Engineered for precision, reliability, and optimal patient outcomes.</p>\n';
html += '                </div>\n';
html += '                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Anatomically contoured implants\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        High-strength biocompatible materials\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Locking & non-locking options\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Comprehensive instrumentation\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Precision engineering\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Wide range of trauma solutions\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Patient-specific surgical planning\n';
html += '                    </div>\n';
html += '                    <div class="flex items-center text-sm text-slate-700 font-medium">\n';
html += '                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>\n';
html += '                        Global quality standards\n';
html += '                    </div>\n';
html += '                </div>\n';
html += '            </div>';

const startMarker = '                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">';
const startIndex = content.indexOf(startMarker);
const endIndexText = 'Global quality standards\n                    </div>\n                </div>\n            </div>';
const endIndex = content.indexOf(endIndexText);

if (startIndex !== -1 && endIndex !== -1) {
    const replaceEndIndex = endIndex + endIndexText.length;
    
    // We are replacing from startMarker to replaceEndIndex with our new html string.
    const newContent = content.substring(0, startIndex) + html + content.substring(replaceEndIndex);
    fs.writeFileSync('index.html', newContent);
    console.log("Successfully replaced content.");
} else {
    console.log("Could not find start or end index.");
    console.log("Start index:", startIndex);
    console.log("End index:", endIndex);
}
