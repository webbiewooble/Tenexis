const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const startTag = '<section id="products"';
const endTag = '<section class="py-24 bg-white reveal relative overflow-hidden">';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newProductsSection = `    <section id="products" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Core Expertise</span>
            <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-20">Our Portfolio</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                
                <!-- Active Product: Osteotomy -->
                <div class="group flex flex-col bg-white border border-slate-200 rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-medical-200 hover:-translate-y-1 transition-all duration-500 text-left relative overflow-hidden">
                    <div class="w-16 h-16 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-medical-50 group-hover:border-medical-100 group-hover:scale-110 transition-all duration-500">
                        <svg class="w-8 h-8 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold text-slate-900 mb-4">Osteotomy Solutions</h3>
                    <p class="text-slate-600 font-light leading-relaxed mb-8 text-base">Featuring the <strong class="text-medical-900 font-bold">Newclip Technics</strong> lower limb portfolio. High-precision anatomical plates engineered for optimal bone realignment.</p>
                    <ul class="space-y-4 mb-10 flex-grow relative z-10">
                        <li class="flex items-center text-sm text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3 shrink-0"></span> Activmotion HTO & DFO Plates
                        </li>
                        <li class="flex items-center text-sm text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-75">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3 shrink-0"></span> Activmotion S & Derotation
                        </li>
                        <li class="flex items-center text-sm text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-150">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3 shrink-0"></span> Patient-Specific Instruments
                        </li>
                    </ul>
                    <div class="mt-auto pt-6 border-t border-slate-100">
                        <a href="https://newcliptechnics.com/documentation-lower-limb/" target="_blank" class="inline-flex items-center text-sm font-bold text-accent-600 uppercase tracking-widest group-hover:text-medical-600 transition-colors w-full justify-between">
                            <span>View Documentation</span>
                            <svg class="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                </div>

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
                    <ul class="space-y-4 mb-10 flex-grow relative z-10 opacity-60">
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> Visualization Systems
                        </li>
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> Sports Medicine Suturing
                        </li>
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> Minimally Invasive Tools
                        </li>
                    </ul>
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
                    <ul class="space-y-4 mb-10 flex-grow relative z-10 opacity-60">
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> Locking & Non-Locking Plates
                        </li>
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> Intramedullary Nails
                        </li>
                        <li class="flex items-center text-sm text-slate-300 font-medium">
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 shrink-0"></span> External Fixation Systems
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
`;

    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    fs.writeFileSync('index.html', before + newProductsSection + after);
    console.log("Successfully replaced products section.");
} else {
    console.log("Could not find start or end index.");
    console.log("Start index:", startIndex);
    console.log("End index:", endIndex);
}
