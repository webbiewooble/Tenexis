import sys

with open('products.html', 'r', encoding='utf-8') as f:
    products_content = f.read()

# get the footer and closing tags from products.html
# Find the start of the footer section
footer_start_idx = products_content.find('<footer')
if footer_start_idx == -1:
    print("Could not find footer in products.html")
    sys.exit(1)

footer_part = products_content[footer_start_idx:]
# Also we need to close the grid and section
grid_close = """
            </div>
        </div>
    </section>
"""

# The missing part of the 3rd product:
mt_auto_block = """
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                        </div>
                    </div>
                </div>
"""

# The 4th product:
product_4 = """
                <!-- Product 4: Distal Femoral Derotation Plate - Lateral -->
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-4">
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                Titanium Fixation
                            </span>
                        </div>
                        
                        <div class="w-full h-56 bg-slate-50/80 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-slate-100 group-hover:border-medical-200/60 group-hover:bg-medical-50/20 transition-all duration-500">
                            <img src="./medical_plate_clean_website.webp" alt="Distal Femoral Derotation Plate – Lateral" class="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500" loading="lazy">
                        </div>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">Distal Femoral Derotation Plate – Lateral</h3>
                        
                        <div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> Managing tortional deformities</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Type:</span> Lateral Distal Femoral Derotation Plate</p>
                        </div>

                        <div class="flex flex-col space-y-3 mb-6 relative z-10">
                            <div class="flex space-x-3">
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(JCTGL1D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Left</button>
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(JCTDL1D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Right</button>
                            </div>
                            <div class="text-sm font-bold text-medical-600 bg-medical-50 border border-medical-100 rounded-lg p-3 text-center transition-all" style="display: none;"></div>
                        </div>
                        
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                        </div>
                    </div>
                </div>
"""

with open('products-2.html', 'r', encoding='utf-8') as f:
    content2 = f.read()

# Remove anything after the last </div> of product 3 if it was partially cut off.
# Actually, the file ends cleanly at `<div ... style="display: none;"></div></div>`
# Just append the missing stuff!
content2 = content2.strip()
if content2.endswith('</div>\n                        </div>'):
    pass

new_content = content2 + "\n" + mt_auto_block + product_4 + grid_close + footer_part

with open('products-2.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed products-2.html")
