const fs = require('fs');

let html = fs.readFileSync('products-3.html', 'utf8');

const newContent = `
    <section id="features" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Technical Features</span>
                <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900">Fixation &amp; Screws</h2>
                <p class="text-slate-600 font-light mt-6 max-w-3xl mx-auto">Engineered for optimized mechanical stability with reinforced core screws and patented locking systems.</p>
            </div>

            <!-- Fixation Features Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                
                <!-- Screw Technical Features -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col h-full relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-medical-50/50 rounded-bl-full -z-0"></div>
                    <div class="relative z-10">
                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 rounded-xl bg-medical-100 flex items-center justify-center text-medical-600">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-slate-900">Screw Features</h3>
                        </div>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">Ø4.5 mm reinforced core screws for optimized mechanical stability.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">Self-tapping systems to help for insertion.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">Hexalobular T20 head for secure driving.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Locking System Features -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col h-full relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-medical-50/50 rounded-bl-full -z-0"></div>
                    <div class="relative z-10">
                        <div class="flex items-center space-x-4 mb-8">
                            <div class="w-12 h-12 rounded-xl bg-medical-100 flex items-center justify-center text-medical-600">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-slate-900">Locking System</h3>
                        </div>
                        <h4 class="font-bold text-slate-800 mb-3 uppercase tracking-wider text-xs">Low Profile Construct</h4>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">The screw is stopped in the hole by its cap, insuring the locking.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">The screw head is buried in the plate to minimize the risk of soft tissue irritation.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-accent-500 mr-3 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                <span class="text-slate-600 leading-relaxed font-light text-sm">Coaptation of both profiles when locking. Plate and screws made from titanium alloy.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Advanced Fixation -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col h-full relative overflow-hidden lg:col-span-2">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-medical-50/50 rounded-bl-full -z-0"></div>
                    <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 class="font-bold text-slate-800 mb-3 uppercase tracking-wider text-xs">Monoaxial Locking</h4>
                            <p class="text-slate-600 leading-relaxed font-light text-sm">Oneclip®: Patented design for robust and straightforward monoaxial locking fixation.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800 mb-3 uppercase tracking-wider text-xs">Polyaxial Locking</h4>
                            <p class="text-slate-600 leading-relaxed font-light text-sm">The DTS® system (patented design) allows the screw to lock into the plate while permitting up to a 25° angulation of the screw before locking, avoiding the joint space.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800 mb-3 uppercase tracking-wider text-xs">Compressive Ramp Oblong</h4>
                            <p class="text-slate-600 leading-relaxed font-light text-sm">The ramp oblong hole allows a simple and controlled compression by the screw/plate interface.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Screw References -->
            <div class="text-center mb-12">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Implant Data</span>
                <h2 class="text-3xl font-display font-bold text-slate-900">Screw References</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- Reinforced Core -->
                <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100">
                    <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                        <span class="w-3 h-3 rounded-full bg-medical-500 mr-3"></span>
                        Ø4.5 mm Reinforced Core Locking Screws*
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Ref.</th>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Description</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm font-light text-slate-600">
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">ST4.5L15D-ST</td><td class="py-3 px-4 border-b border-slate-100">L15 mm - STERILE **</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">ST4.5L18D-ST</td><td class="py-3 px-4 border-b border-slate-100">L18 mm - STERILE **</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">ST4.5L21D-ST</td><td class="py-3 px-4 border-b border-slate-100">L21 mm - STERILE **</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">ST4.5L24D-ST to ST4.5L90D-ST</td><td class="py-3 px-4 border-b border-slate-100">L24 mm to L90 mm - STERILE</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-slate-400 mt-4">* Blue anodized &nbsp; ** Optional</p>
                </div>

                <!-- Non-Locking -->
                <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100">
                    <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                        <span class="w-3 h-3 rounded-full bg-slate-400 mr-3"></span>
                        Ø4.5 mm Non-Locking Screws*
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Ref.</th>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Description</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm font-light text-slate-600">
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">CT4.5L24D-ST</td><td class="py-3 px-4 border-b border-slate-100">L24 mm - STERILE</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">CT4.5L27D-ST</td><td class="py-3 px-4 border-b border-slate-100">L27 mm - STERILE</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">CT4.5L30D-ST</td><td class="py-3 px-4 border-b border-slate-100">L30 mm - STERILE</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-3 px-4 border-b border-slate-100 font-medium">CT4.5L35D-ST to CT4.5L90D-ST</td><td class="py-3 px-4 border-b border-slate-100">L35 mm to L90 mm - STERILE</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-slate-400 mt-4">* Not anodized</p>
                </div>
            </div>
            
            <div class="flex justify-center items-center mt-16 space-x-2 relative z-10">
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Previous Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </a>
                
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">1</a>
                
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">2</a>

                <span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">3</span>
            </div>
        </div>
    </section>
`;

const startIndex = html.indexOf('<section id="products"');
const endIndex = html.indexOf('</section>', startIndex) + 10;

html = html.substring(0, startIndex) + newContent + html.substring(endIndex);

fs.writeFileSync('products-3.html', html, 'utf8');

function updatePagination(file, activePage) {
    let content = fs.readFileSync(file, 'utf8');
    const pagRegex = /<div class="flex justify-center items-center mt-16 space-x-2 relative z-10">([\s\S]*?)<\/div>/;
    
    let links = '';
    if (activePage === 1) {
        links = `
                <span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">1</span>
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">2</a>
                <a href="products-3.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">3</a>
                <a href="products-2.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Next Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>`;
    } else if (activePage === 2) {
        links = `
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Previous Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </a>
                <a href="products.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">1</a>
                <span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">2</span>
                <a href="products-3.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">3</a>
                <a href="products-3.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Next Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>`;
    }
    
    if (pagRegex.test(content)) {
        content = content.replace(pagRegex, `<div class="flex justify-center items-center mt-16 space-x-2 relative z-10">${links}</div>`);
        fs.writeFileSync(file, content, 'utf8');
    }
}

updatePagination('products.html', 1);
updatePagination('products-2.html', 2);

