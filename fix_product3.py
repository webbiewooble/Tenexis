import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    c = f.read()

pattern = r'(<!-- Product 3 -->.*?<h3 class="[^"]+">)Lateral Closing Distal Femoral Osteotomy \(DFO\) Plate(</h3>\s*)<p class="[^"]+">Anatomically designed lateral closing wedge plate for the distal femur, providing superior stability and precision in correcting complex lower limb deformities and unicompartmental osteoarthritis\.</p>'

replacement = r'''\1Activmotion S – HTO Plate with ACL Reconstruction\2<div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> HTO with ACL Replacement</p>
                        </div>'''

c = re.sub(pattern, replacement, c, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(c)
