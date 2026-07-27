const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const oldBlock = `                <div class="group flex flex-col bg-white border border-slate-200 rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-medical-200 hover:-translate-y-1 transition-all duration-500 text-left relative overflow-hidden">
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
                </div>`;

const newBlock = `                <div class="group flex flex-col bg-white border border-slate-200 rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-medical-200 hover:-translate-y-1 transition-all duration-500 text-left relative overflow-hidden">
                    <div class="w-16 h-16 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-medical-50 group-hover:border-medical-100 group-hover:scale-110 transition-all duration-500">
                        <svg class="w-8 h-8 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold text-slate-900 mb-4">Osteotomy Solutions</h3>
                    <p class="text-slate-600 font-light leading-relaxed mb-6 text-sm">Featuring comprehensive high-precision anatomical plates engineered for optimal bone realignment across various indications.</p>
                    <div class="grid grid-cols-2 gap-y-3 gap-x-2 mb-10 flex-grow relative z-10">
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Shoulder & Clavicle
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-[50ms]">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Elbow
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-75">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Forearm
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-100">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Wrist
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-[125ms]">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Hand
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-[150ms]">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Hip
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-[175ms]">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Knee
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-200">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Ankle
                        </div>
                        <div class="flex items-center text-xs text-slate-700 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-[225ms]">
                            <span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 shrink-0"></span> Foot
                        </div>
                    </div>
                    <div class="mt-auto pt-6 border-t border-slate-100">
                        <a href="https://newcliptechnics.com/" target="_blank" class="inline-flex items-center text-sm font-bold text-accent-600 uppercase tracking-widest group-hover:text-medical-600 transition-colors w-full justify-between">
                            <span>Explore Portfolio</span>
                            <svg class="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                </div>`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('index.html', content);
