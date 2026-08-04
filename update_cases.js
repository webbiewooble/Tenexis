const fs = require('fs');
let html = fs.readFileSync('products-5.html', 'utf8');

const case1Html = `
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100">
                    <div class="mb-8 border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 class="text-2xl font-display font-bold text-medical-700 mb-2">CASE 1: MEDIAL TIBIAL OPENING WEDGE SIZE 1</h3>
                            <p class="text-slate-500 font-medium">Patient: 60 year old man</p>
                        </div>
                        <span class="px-4 py-1.5 bg-medical-50 text-medical-600 rounded-full text-sm font-bold border border-medical-100 self-start">High Tibial Osteotomy</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <img src="./assets/Case 1 - Preoperative planning.webp" alt="Clinical Case" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Preoperative planning</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <img src="./assets/Case 1 - Post op imaging - day 1 - 01.webp" alt="Clinical Case" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Post op imaging: day 1 - 01</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <img src="./assets/Case 1 - Post op imaging - day 1 - 02.webp" alt="Clinical Case" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Post op imaging: day 1 - 02</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative shadow-inner group">
                                <img src="./assets/Case 1 - Postoperative - 3 months.webp" alt="Clinical Case" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-bold text-slate-800 text-center uppercase tracking-wide">Postoperative : 3 months</span>
                        </div>
                    </div>
                </div>
`;

const case2Html = `
                    <!-- Case 2 -->
                    <div class="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col">
                        <div class="mb-6 border-b border-slate-100 pb-4">
                            <h3 class="text-xl font-display font-bold text-medical-700">CASE 2: MEDIAL TIBIAL OPENING WEDGE SIZE 2</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4 flex-grow">
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 2 - Preoperative xray - 01.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative 01</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 2 - Preoperative xray - 02.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative 02</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 2 - Postoperative xray - 01.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative 01</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 2 - Postoperative xray - 02.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative 02</span>
                            </div>
                        </div>
                    </div>
`;

const case3Html = `
                    <!-- Case 3 -->
                    <div class="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col">
                        <div class="mb-6 border-b border-slate-100 pb-4">
                            <h3 class="text-xl font-display font-bold text-medical-700">CASE 3: HTO &amp; ACL</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4 flex-grow">
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 3 - Preoperative xray - 01.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative 01</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 3 - Preoperative xray - 02.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Preoperative 02</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 3 - Postoperative xray - 01.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative 01</span>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full aspect-[4/5] bg-slate-800 rounded-2xl mb-3 overflow-hidden relative shadow-inner group">
                                    <img src="./assets/Case 3 - Postoperative xray - 02.webp" alt="Clinical Case" class="w-full h-full object-cover">
                                </div>
                                <span class="text-xs font-bold text-slate-700 text-center uppercase tracking-wide">Postoperative 02</span>
                            </div>
                        </div>
                    </div>
`;

// we will replace the block from the start of Case 1 to the end of Case 3.
const startIndex = html.indexOf('<div class="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100">');
// Find the end of Case 3.
const case3Index = html.indexOf('CASE 3: HTO');
const case3End = html.indexOf('</div>\n                        </div>\n                    </div>', case3Index) + 70; // rough end

// actually it is safer to use regex or split on specific markers
const beforeCase1 = html.substring(0, startIndex);

const markerAfterCase3 = `
                </div>
            </div>
        </div>
        
        <!-- Bottom bar -->`;
const afterCase3Index = html.indexOf(markerAfterCase3);

const afterCase3 = html.substring(afterCase3Index);

const finalHtml = beforeCase1 + case1Html + '\n                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">\n' + case2Html + case3Html + '\n                </div>\n            </div>\n        </div>\n        \n        <!-- Bottom bar -->' + html.substring(afterCase3Index + markerAfterCase3.length);

fs.writeFileSync('products-5.html', finalHtml);
console.log("Updated products-5.html");
