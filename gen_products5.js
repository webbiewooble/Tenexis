const fs = require('fs');

let html = fs.readFileSync('products-4.html', 'utf8');

const newContent = `
    <section id="clinical-cases" class="py-24 bg-slate-50 reveal border-b border-slate-200 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Proven Outcomes</span>
                <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900">Clinical Cases</h2>
                <p class="text-slate-600 font-light mt-6 max-w-3xl mx-auto">Real-world results demonstrating precise correction and optimal bone healing with ACTIVMOTION S.</p>
            </div>

            <div class="space-y-16">
                <!-- Case 1 -->
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100">
                    <div class="mb-8 border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 class="text-2xl font-display font-bold text-medical-700 mb-2">CASE 1: MEDIAL TIBIAL OPENING WEDGE SIZE 1</h3>
                            <p class="text-slate-500 font-medium">Patient: 60 year old man</p>
                        </div>
                        <span class="px-4 py-1.5 bg-medical-50 text-medical-600 rounded-full text-sm font-bold border border-medical-100 self-start">High Tibial Osteotomy</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                                    <svg class="w-12 h-12 text-slate-600 mb-3 opacity-50 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <span class="text-xs font-medium tracking-wider uppercase opacity-50">X-Ray Viewer</span>
                                </div>
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Preoperative planning</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                                    <svg class="w-12 h-12 text-slate-600 mb-3 opacity-50 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <span class="text-xs font-medium tracking-wider uppercase opacity-50">X-Ray Viewer</span>
                                </div>
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Post op imaging: day 1</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                                    <svg class="w-12 h-12 text-slate-600 mb-3 opacity-50 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <span class="text-xs font-medium tracking-wider uppercase opacity-50">X-Ray Viewer</span>
                                </div>
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Postoperative : 3 months</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <!-- Case 2 -->
                    <div class="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col">
                        <div class="mb-6 border-b border-slate-100 pb-4">
                            <h3 class="text-xl font-display font-bold text-medical-700">CASE 2: MEDIAL TIBIAL OPENING WEDGE SIZE 2</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4 flex-grow">
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <svg class="w-10 h-10 text-slate-600 opacity-30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative xray</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <svg class="w-10 h-10 text-slate-600 opacity-30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative xray</span>
                            </div>
                        </div>
                    </div>

                    <!-- Case 3 -->
                    <div class="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col">
                        <div class="mb-6 border-b border-slate-100 pb-4">
                            <h3 class="text-xl font-display font-bold text-medical-700">CASE 3: HTO &amp; ACL</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4 flex-grow">
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <svg class="w-10 h-10 text-slate-600 opacity-30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative xray</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <svg class="w-10 h-10 text-slate-600 opacity-30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    </div>
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative xray</span>
                            </div>
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

const startIndex = html.indexOf('<section id="instruments"');
const endIndex = html.indexOf('</section>', startIndex) + 10;

html = html.substring(0, startIndex) + newContent + html.substring(endIndex);

fs.writeFileSync('products-5.html', html, 'utf8');

function updatePaginationAll(pages, activePage) {
    let links = '';
    
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
        content = content.replace(pagRegex, updatePaginationAll(5, activePage));
        fs.writeFileSync(file, content, 'utf8');
    }
}

replacePagination('products.html', 1);
replacePagination('products-2.html', 2);
replacePagination('products-3.html', 3);
replacePagination('products-4.html', 4);
replacePagination('products-5.html', 5);

