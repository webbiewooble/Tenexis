import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the title
content = content.replace('<title>Tenexis Medical - Precision Engineered Orthopedic Solutions</title>', '<title>Activmotion S Medial Opening Wedge HTO (Size 1) - Tenexis Medical</title>')

new_section = """
    <section id="product-detail" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 mb-16 flex flex-col md:flex-row gap-12 items-center">
                <div class="w-full md:w-1/2">
                    <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center">
                        <img src="./01_Opening_Wedge_High_Tibial_Osteotomy_Plates_Size_1_ATGP1D-ST_ATDP1D-ST.webp" alt="Activmotion S Medial Opening Wedge HTO Plate Size 1" class="max-w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-500">
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-medical-50 text-medical-700 text-xs font-bold uppercase tracking-widest border border-medical-100 mb-6">
                        Osteotomy Portfolio
                    </span>
                    <h1 class="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Activmotion S – Medial Opening Wedge HTO Plate (Size 1)</h1>
                    <p class="text-slate-600 font-light text-lg mb-8 leading-relaxed">
                        Precision-engineered titanium plate designed for medial opening wedge high tibial osteotomies. Size 1 provides optimal fit and structural support for specific patient anatomies.
                    </p>
                    
                    <div class="space-y-4 mb-10">
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-medical-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <div>
                                <h4 class="font-bold text-slate-800">Indication</h4>
                                <p class="text-slate-600 text-sm">For monoplanar osteotomies</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-medical-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <div>
                                <h4 class="font-bold text-slate-800">Correction</h4>
                                <p class="text-slate-600 text-sm">Up to 12 mm</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-medical-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <div>
                                <h4 class="font-bold text-slate-800">Available Options</h4>
                                <p class="text-slate-600 text-sm">Left (ATGP1D) &amp; Right (ATDP1D)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#" download class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-medical-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-medical-800 transition-colors shadow-lg shadow-medical-900/20">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Download Brochure
                        </a>
                        <a href="booking.html" class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-sm tracking-widest uppercase hover:bg-slate-50 hover:text-medical-700 hover:border-medical-300 transition-colors shadow-sm">
                            Request Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""

# replace everything from <section id="clinical-cases" ... to the footer
pattern = r'<section id=\"clinical-cases\".*?(?=<footer)'
new_content = re.sub(pattern, new_section, content, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
