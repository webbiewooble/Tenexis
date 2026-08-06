import re

# We will start from a clean copy of products-5.html
# Then we will replace the catalog section with just that one product

import shutil
shutil.copy('products-5.html', 'products-6.html')

with open('products-6.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Make the pagination highlight 6 instead of 5
c = c.replace('<span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">5</span>',
              '<a href="products-5.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">5</a>')
              
c = c.replace('<a href="products-6.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">6</a>',
              '<span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">6</span>')
              
# Change the previous page link in products-6.html
# In products-5.html, prev page was products-4.html. In products-6.html it should be products-5.html
c = re.sub(r'<a href="products-4.html"([^>]*)aria-label="Previous Page">', r'<a href="products-5.html"\1aria-label="Previous Page">', c)

# Since products-5.html doesn't have a next page link, we don't have to remove it from products-6.html.

# Let's replace the whole grid of clinical cases in products-5.html with the product grid in products.html
# Specifically, we want it to look like a product card but with a download button.
new_grid = """
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-4">
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                Titanium Fixation
                            </span>
                        </div>
                        
                        <div class="h-48 mb-6 flex items-center justify-center relative">
                            <div class="absolute inset-0 bg-medical-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img src="./01_Opening_Wedge_High_Tibial_Osteotomy_Plates_Size_1_ATGP1D-ST_ATDP1D-ST.webp" alt="Activmotion S – Medial Opening Wedge HTO Plate (Size 1)" class="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500" loading="lazy">
                        </div>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">Activmotion S – Medial Opening Wedge HTO Plate (Size 1)</h3>
                        
                        <div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> For monoplanar osteotomies</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Correction:</span> Up to 12 mm</p>
                        </div>
                        
                        <div class="flex flex-col space-y-3 mb-6 relative z-10">
                            <div class="flex space-x-3">
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(ATGP1D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Left</button>
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(ATDP1D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Right</button>
                            </div>
                            <div class="text-sm font-bold text-medical-600 bg-medical-50 border border-medical-100 rounded-lg p-3 text-center transition-all" style="display: none;"></div>
                        </div>
                        
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <a href="#" download class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-medical-800 transition-colors shadow-lg">
                                Download Brochure
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
"""

# Replace the "clinical-cases" header/content
# Let's just find the section and replace it.
pattern_header = r'<div class="text-center mb-16">.*?</div>'
c = re.sub(pattern_header, '''<div class="text-center mb-16">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Catalog</span>
                <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900">Featured Products</h2>
                <p class="text-slate-600 font-light mt-6 max-w-3xl mx-auto">Discover our premium range of precision engineered orthopedic solutions.</p>
            </div>''', c, count=1, flags=re.DOTALL)

pattern_grid = r'<div class="space-y-16">.*?</div>\s*</div>\s*<!-- Pagination Controls -->'
c = re.sub(pattern_grid, new_grid + '\n            <!-- Pagination Controls -->', c, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(c)

