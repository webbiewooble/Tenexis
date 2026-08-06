import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    c = f.read()

new_grid = """
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
                <!-- Product 1 -->
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-6">
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                Titanium Fixation
                            </span>
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
                        
                        <div class="mt-auto flex flex-col space-y-4 border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                            <a href="#" download class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-medical-800 transition-colors shadow-lg">
                                Download Brochure
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </a>
                            <a href="products-6.html" class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-50 text-medical-700 font-bold text-xs uppercase tracking-widest hover:bg-medical-100 transition-colors">
                                Explore Details
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>
                    
                    <div class="relative z-10 flex flex-col h-full">
                        <div class="flex justify-between items-start mb-6">
                            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:bg-medical-50 group-hover:text-medical-700 group-hover:border-medical-100 transition-colors duration-500">
                                Titanium Fixation
                            </span>
                        </div>
                        
                        <h3 class="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-4 leading-snug group-hover:text-medical-700 transition-colors duration-300">Activmotion S – Medial Opening Wedge HTO Plate (Size 2)</h3>
                        
                        <div class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                            <p class="mb-1"><span class="font-bold text-slate-800">Indication:</span> For monoplanar osteotomies</p>
                            <p class="mb-3"><span class="font-bold text-slate-800">Correction:</span> Up to 12 mm</p>
                        </div>
                        
                        <div class="flex flex-col space-y-3 mb-6 relative z-10">
                            <div class="flex space-x-3">
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(ATGP2D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Left</button>
                                <button type="button" onclick="this.parentElement.nextElementSibling.innerText = '(ATDP2D)'; this.parentElement.nextElementSibling.style.display = 'block';" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-medical-300 hover:text-medical-700 transition-all font-semibold py-2 px-4 rounded-lg shadow-sm text-sm">Right</button>
                            </div>
                            <div class="text-sm font-bold text-medical-600 bg-medical-50 border border-medical-100 rounded-lg p-3 text-center transition-all" style="display: none;"></div>
                        </div>
                        
                        <div class="mt-auto flex flex-col space-y-4 border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                            <a href="#" download class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-medical-800 transition-colors shadow-lg">
                                Download Brochure
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </a>
                            <a href="products-6.html" class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-50 text-medical-700 font-bold text-xs uppercase tracking-widest hover:bg-medical-100 transition-colors">
                                Explore Details
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
"""

# Replace the grid in products-6.html
pattern = r'<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">.*?</div>\s*</div>\s*</div>'
c = re.sub(pattern, new_grid, c, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(c)

