const fs = require('fs');

let html = fs.readFileSync('products-4.html', 'utf8');

const newContent = `
    <section id="instruments" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Instrumentation &amp; Kits</span>
                <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900">Instrument References</h2>
                <p class="text-slate-600 font-light mt-6 max-w-3xl mx-auto">Comprehensive set of dedicated instruments, optional instruments, and bone substitutes for precise surgical execution.</p>
            </div>

            <!-- Instrument Tables -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                <!-- Main Instruments -->
                <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col">
                    <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                        <span class="w-3 h-3 rounded-full bg-medical-500 mr-3"></span>
                        Instruments
                    </h3>
                    <div class="overflow-x-auto flex-grow">
                        <table class="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Ref.</th>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Description</th>
                                    <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-right">Qty</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm font-light text-slate-600 divide-y divide-slate-100">
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC014-1</td><td class="py-2 px-4">NCT Cutting guide – piece 1</td><td class="py-2 px-4 text-right">1</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC014-2</td><td class="py-2 px-4">NCT Cutting guide – piece 2</td><td class="py-2 px-4 text-right">1</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC019 - ANC025</td><td class="py-2 px-4">Metallic wedges for knee osteotomy (6mm - 16mm)</td><td class="py-2 px-4 text-right">1</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC024</td><td class="py-2 px-4">Handle for metallic wedge and cutting guide</td><td class="py-2 px-4 text-right">2</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC120-US</td><td class="py-2 px-4">Ø4.2 mm countersink with US quick coupling system</td><td class="py-2 px-4 text-right">1</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC211</td><td class="py-2 px-4">Ø4.0 mm quick coupling drill bit</td><td class="py-2 px-4 text-right">3</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC352</td><td class="py-2 px-4">Ø6 mm US quick coupling handle</td><td class="py-2 px-4 text-right">2</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC975</td><td class="py-2 px-4">T20 screwdriver with US quick coupling system</td><td class="py-2 px-4 text-right">2</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC998</td><td class="py-2 px-4">Ø4.0 mm threaded guide gauge</td><td class="py-2 px-4 text-right">3</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">33.0222.200</td><td class="py-2 px-4">Pin Ø2.2 L200 mm</td><td class="py-2 px-4 text-right">6</td></tr>
                            </tbody>
                        </table>
                        <p class="text-xs text-slate-400 mt-4 italic">* Showing selected core instruments. See full catalog for all references.</p>
                    </div>
                </div>

                <!-- Optional Instruments & Substitutes -->
                <div class="flex flex-col gap-10">
                    <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex-grow">
                        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <span class="w-3 h-3 rounded-full bg-slate-400 mr-3"></span>
                            Optional Instruments
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse min-w-[400px]">
                                <thead>
                                    <tr>
                                        <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Ref.</th>
                                        <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Description</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm font-light text-slate-600 divide-y divide-slate-100">
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC652 / ANC653</td><td class="py-2 px-4">HTO Alignment rod / Support</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC1063</td><td class="py-2 px-4">Ø4 mm mini invasive threaded guide</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">ANC1088 - 1120</td><td class="py-2 px-4">Metallic wedges for osteotomy - Narrow</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex-grow">
                        <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <span class="w-3 h-3 rounded-full bg-accent-400 mr-3"></span>
                            Optional Bone Substitutes
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse min-w-[400px]">
                                <thead>
                                    <tr>
                                        <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Ref.</th>
                                        <th class="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">Description</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm font-light text-slate-600 divide-y divide-slate-100">
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">0106C01</td><td class="py-2 px-4">Rounded wedge 06 mm</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">0108C01</td><td class="py-2 px-4">Rounded wedge 08 mm</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">0110C01</td><td class="py-2 px-4">Rounded wedge 10 mm</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">0112C01</td><td class="py-2 px-4">Rounded wedge 12 mm</td></tr>
                                    <tr class="hover:bg-slate-50 transition-colors"><td class="py-2 px-4 font-medium text-slate-800">1414C01</td><td class="py-2 px-4">Rounded wedge 14 mm</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kit Description -->
            <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden mb-12">
                <div class="absolute top-0 right-0 w-64 h-64 bg-medical-50/50 rounded-bl-[100px] -z-0"></div>
                <div class="relative z-10">
                    <h3 class="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-8">Kit Description &amp; Removal</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 class="font-bold text-slate-800 mb-4 flex items-center"><svg class="w-5 h-5 text-medical-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> Complete System</h4>
                            <p class="text-slate-600 text-sm leading-relaxed mb-4">The ACTIVMOTION S surgical kit includes meticulously arranged instruments covering all surgical steps from osteotomy opening to final fixation.</p>
                            <ul class="text-sm text-slate-600 space-y-2">
                                <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span> Contains dedicated drill guides, pins, and length gauges</li>
                                <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span> Soft tissue protectors and retractors</li>
                                <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span> Quick coupling handles and screwdrivers</li>
                            </ul>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 class="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Removal Kit</h4>
                            <p class="text-slate-600 text-sm leading-relaxed mb-4">If you have to remove ACTIVMOTION S implants, make sure to order the Newclip Technics removal set which includes the following instruments:</p>
                            <ul class="text-sm text-slate-700 font-medium space-y-3">
                                <li class="flex items-start">
                                    <svg class="w-5 h-5 text-accent-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    ANC975: T20 screwdriver with US quick coupling system
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-5 h-5 text-accent-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    ANC352: Ø6 mm US quick coupling handle
                                </li>
                            </ul>
                            <p class="text-xs text-slate-500 mt-4 italic">An extraction set can also be ordered separately.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center mt-16 space-x-2 relative z-10">
                <!-- PAGINATION PLACEHOLDER -->
            </div>
        </div>
    </section>
`;

const startIndex = html.indexOf('<section id="features"');
const endIndex = html.indexOf('</section>', startIndex) + 10;

html = html.substring(0, startIndex) + newContent + html.substring(endIndex);

fs.writeFileSync('products-4.html', html, 'utf8');

function updatePaginationAll(pages, activePage) {
    let links = '';
    
    // previous link
    if (activePage > 1) {
        let prevPage = activePage === 2 ? 'products.html' : 'products-' + (activePage - 1) + '.html';
        links += '                <a href="' + prevPage + '" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Previous Page">\n                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>\n                </a>\n';
    }

    for (let i = 1; i <= pages; i++) {
        let pageName = i === 1 ? 'products.html' : 'products-' + i + '.html';
        if (i === activePage) {
            links += '                <span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">' + i + '</span>\n';
        } else {
            links += '                <a href="' + pageName + '" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">' + i + '</a>\n';
        }
    }

    // next link
    if (activePage < pages) {
        let nextPage = 'products-' + (activePage + 1) + '.html';
        links += '                <a href="' + nextPage + '" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Next Page">\n                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\n                </a>\n';
    }

    return '<div class="flex justify-center items-center mt-16 space-x-2 relative z-10">\n' + links + '            </div>';
}

function replacePagination(file, activePage) {
    let content = fs.readFileSync(file, 'utf8');
    const pagRegex = /<div class="flex justify-center items-center mt-16 space-x-2 relative z-10">([\s\S]*?)<\/div>/;
    
    if (pagRegex.test(content)) {
        content = content.replace(pagRegex, updatePaginationAll(4, activePage));
        fs.writeFileSync(file, content, 'utf8');
    }
}

replacePagination('products.html', 1);
replacePagination('products-2.html', 2);
replacePagination('products-3.html', 3);
replacePagination('products-4.html', 4);

