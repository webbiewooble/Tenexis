const fs = require('fs');

let html2 = fs.readFileSync('products-2.html', 'utf8');

// Deflexion Size 1
html2 = html2.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">A versatile Size 1 deflexion plate indicated for standard osteotomies, featuring an optimized low-profile design to manage unicompartmental osteoarthritis and general knee deformities.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Supra-tubercule and trans-tubercule osteotomy</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> Includes 1 central polyaxial screw</p>
                        </div>`
);

// Deflexion Size 2
html2 = html2.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Extended Size 2 deflexion osteotomy plate offering increased mechanical strength and stability, specifically indicated for the treatment of pronounced knee deformities and unicompartmental osteoarthritis.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Infra-tubercule osteotomy</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> Includes 1 central polyaxial screw</p>
                        </div>`
);

// Derotation Medial
html2 = html2.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Specialized medial derotation plate for the distal femur, designed to accurately correct torsional deformities and unicompartmental osteoarthritis while ensuring rotational stability.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Managing tortional deformities</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Type:</span> Medial Distal Femoral Derotation Plate</p>
                        </div>`
);

// Derotation Lateral
html2 = html2.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Advanced lateral derotation plate providing exceptional torsional control and fixation for distal femoral osteotomies, indicated for complex rotational and coronal deformities.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Managing tortional deformities</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Type:</span> Lateral Distal Femoral Derotation Plate</p>
                        </div>`
);

fs.writeFileSync('products-2.html', html2);
console.log('products-2.html updated');

