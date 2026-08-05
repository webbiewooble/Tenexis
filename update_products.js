const fs = require('fs');

let html1 = fs.readFileSync('products.html', 'utf8');

// Size 1 ATGP1D
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Designed for precise medial opening wedge high tibial osteotomies, this Size 1 plate offers optimal stabilization for correcting early to moderate unicompartmental osteoarthritis and mild coronal deformities.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> For monoplanar osteotomies</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Correction:</span> Up to 12 mm</p>
                        </div>`
);

// Size 2 ATGP2D
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Engineered for larger anatomical profiles, the Size 2 medial opening wedge plate provides enhanced structural support for treating advanced unicompartmental osteoarthritis and significant sagittal or coronal misalignments.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-3"><span class="font-bold text-slate-800">Indication:</span> For biplanar / ascendant osteotomies</p>
                            <p class="font-bold text-slate-800 mb-1">Features:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>5 monoaxial locking holes — Oneclip®</li>
                                <li>1 polyaxial locking hole — DTS, allowing angulation before locking</li>
                                <li>Counterform dedicated to rectangular suture-buttons 3.8 × 9–12 mm</li>
                            </ul>
                        </div>`
);

// ACL
html1 = html1.replace(
  /<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">A specialized dual-purpose plate indicated for simultaneous uni-planar or bi-planar osteotomies and ligamentoplasty, streamlining high tibial realignment with ACL reconstruction procedures\.<\/p>/g,
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> HTO with ACL Replacement</p>
                        </div>`
);

// Lateral Closing Size 1
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Compact and anatomically contoured Size 1 plate designed specifically for lateral closing wedge osteotomies, enabling accurate correction of unicompartmental osteoarthritis while preserving soft tissue.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Valgisation</p>
                            <p class="mb-1"><span class="font-bold text-slate-800">Type:</span> Lateral plates</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 4 holes</p>
                        </div>`
);

// Lateral Closing Size 2
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Robust Size 2 lateral closing wedge plate tailored for greater load-bearing requirements, providing rigid fixation to address complex unicompartmental osteoarthritis and substantial knee deformities.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Valgisation</p>
                            <p class="mb-1"><span class="font-bold text-slate-800">Type:</span> Lateral plates</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 8 holes</p>
                        </div>`
);

// Medial Closing Size 1
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Optimized for medial closing procedures, this Size 1 plate delivers reliable stability and anatomical fit for the precise treatment of unicompartmental osteoarthritis and minor knee misalignments.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Varisation</p>
                            <p class="mb-1"><span class="font-bold text-slate-800">Type:</span> Medial plates</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 4 holes</p>
                        </div>`
);

// Medial Closing Size 2
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Designed for broader anatomical coverage, the Size 2 medial closing wedge plate ensures secure stabilization during the correction of severe knee coronal or sagittal deformities and osteoarthritis.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Varisation</p>
                            <p class="mb-1"><span class="font-bold text-slate-800">Type:</span> Medial plates</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 7 holes</p>
                        </div>`
);

// DFO Lateral Opening
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Engineered for lateral opening wedge distal femoral osteotomies, this plate facilitates precise correction of valgus deformities and unicompartmental osteoarthritis at the distal femur.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Plate Type:</span> Lateral opening</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 9 holes</p>
                        </div>`
);

// DFO Medial Closing
html1 = html1.replace(
  '<p class="text-base text-slate-600 font-light leading-relaxed mb-8 flex-grow">Anatomically pre-contoured for medial closing wedge distal femoral osteotomies, providing rigid internal fixation to address complex knee deformities and osteoarthritis.</p>',
  `<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Plate Type:</span> Medial closing</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Holes:</span> 9 holes</p>
                        </div>`
);

fs.writeFileSync('products.html', html1);
console.log('products.html updated');

