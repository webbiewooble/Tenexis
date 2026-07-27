const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const anchor = `                                    <p class="text-slate-600 text-sm font-light leading-relaxed pl-6">Practical product training, surgical technique education, and professional implant workshops.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

const anatomicalContent = `
            <!-- Comprehensive Anatomical Solutions -->
            <div class="mt-32 pt-24 border-t border-slate-200 relative z-10">
                <div class="max-w-3xl mx-auto text-center mb-16">
                    <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Full Portfolio</span>
                    <h2 class="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">Comprehensive Trauma Solutions</h2>
                    <p class="text-slate-600 font-light text-lg leading-relaxed">
                        Anatomically shaped implants and specialized fixation systems for complex fractures across the entire musculoskeletal system.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <!-- Elbow -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Elbow</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Fracture Management</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Designed to treat complex fractures involving the distal humerus, olecranon, radial head, and coronoid process.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Distal humerus & olecranon</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Radial head & coronoid</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Complex elbow trauma</li>
                        </ul>
                    </div>

                    <!-- Forearm -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Forearm</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Radius & Ulna Fixation</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Specialized implants ensuring precise adaptation to bone anatomy while maintaining mechanical stability.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Radius & Ulna fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Shaft fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Corrective osteotomies</li>
                        </ul>
                    </div>

                    <!-- Wrist -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Wrist</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Wrist Trauma Solutions</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Low-profile locking plates helping restore anatomical alignment while minimizing soft tissue irritation.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Distal radius fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Intra-articular fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Volar & Dorsal fixation</li>
                        </ul>
                    </div>

                    <!-- Hand -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Hand</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Hand & Metacarpal</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Compact implant designs supporting stable fixation while maintaining hand mobility and function.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Metacarpal & Phalangeal</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Finger reconstruction</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Hand trauma</li>
                        </ul>
                    </div>

                    <!-- Hip -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Hip</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Proximal Femur Solutions</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Precision-designed implants providing secure fixation while promoting stability during rehabilitation.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Femoral neck fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Intertrochanteric fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Greater trochanter fixation</li>
                        </ul>
                    </div>

                    <!-- Femur -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Femur</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Femoral Fixation</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Anatomical locking plates and advanced fixation technologies for complex trauma cases.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Distal & Shaft fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Periprosthetic fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Corrective osteotomies</li>
                        </ul>
                    </div>

                    <!-- Knee -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Knee</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Peri-Articular Fixation</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Anatomical implants assisting in restoring joint stability and alignment around the knee.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Patella fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Tibial plateau fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Knee reconstruction</li>
                        </ul>
                    </div>

                    <!-- Tibia -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Tibia</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Tibial Fracture Solutions</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Locking technology enhancing fixation stability while supporting minimally invasive surgical techniques.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Tibial shaft fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Distal tibia fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Osteotomies</li>
                        </ul>
                    </div>

                    <!-- Ankle -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Ankle</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Ankle Trauma Systems</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Providing stable fixation while preserving joint alignment and function for malleolar fractures.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Lateral & Medial malleolus</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Posterior malleolus</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Syndesmotic injuries</li>
                        </ul>
                    </div>

                    <!-- Foot -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Foot</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Reconstruction & Trauma</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Specialized implants for fractures, corrective osteotomies, and mid/fore/hindfoot procedures.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Calcaneus & Metatarsal</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Midfoot injuries</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Hallux procedures</li>
                        </ul>
                    </div>

                    <!-- Pelvis -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Pelvis & Acetabulum</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Complex Pelvic Trauma</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">Anatomically contoured implants facilitating accurate reduction and stable fixation for ring injuries.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Pelvic & Acetabular fractures</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Pelvic reconstruction</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Complex trauma</li>
                        </ul>
                    </div>

                    <!-- CMF -->
                    <div class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-medical-200 transition-all duration-300 group flex flex-col">
                        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Maxillofacial (CMF)</h4>
                        <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4 pb-4 border-b border-slate-100">Cranio-Maxillofacial Fixation</p>
                        <p class="text-sm text-slate-600 font-light mb-6 flex-grow">A comprehensive range of plates and screws designed for cranial, facial, and mandibular management.</p>
                        <ul class="space-y-2 mt-auto">
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Mandibular & Midface</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Orbital reconstruction</li>
                            <li class="flex items-start text-xs text-slate-600"><span class="text-medical-500 mr-2">✓</span> Craniofacial trauma</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Value Added Services (Kits, Patient-Specific, Instruments) -->
            <div class="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                
                <!-- Sterile Kits -->
                <div class="bg-slate-900 rounded-2xl p-8 lg:p-10 border border-slate-800 text-left relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-medical-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative z-10 h-full flex flex-col">
                        <div class="w-12 h-12 rounded-lg bg-medical-800 flex items-center justify-center mb-6">
                            <svg class="w-6 h-6 text-medical-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h4 class="text-2xl font-display font-bold text-white mb-2">Sterile Procedure Kits</h4>
                        <p class="text-[10px] text-accent-400 font-bold uppercase tracking-widest mb-4">Ready-to-Use Solutions</p>
                        <p class="text-slate-300 font-light text-sm leading-relaxed mb-6 flex-grow">Combine implants and instrumentation in a single sterile package, helping streamline OR workflow, reduce prep time, and enhance efficiency.</p>
                        <ul class="space-y-3 mt-auto border-t border-slate-700/50 pt-6">
                            <li class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 rounded-full bg-accent-400 mr-3"></span> Single-use instrumentation</li>
                            <li class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 rounded-full bg-accent-400 mr-3"></span> Faster OR preparation</li>
                            <li class="flex items-center text-sm text-slate-300"><span class="w-1.5 h-1.5 rounded-full bg-accent-400 mr-3"></span> Simplified logistics</li>
                        </ul>
                    </div>
                </div>

                <!-- Patient Specific -->
                <div class="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 text-left shadow-xl hover:border-medical-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div class="w-12 h-12 rounded-lg bg-medical-50 flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    </div>
                    <h4 class="text-2xl font-display font-bold text-slate-900 mb-2">Patient-Specific Solutions</h4>
                    <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4">Personalized Planning</p>
                    <p class="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-grow">Utilize advanced imaging and digital technologies to create customized surgical plans and cutting guides tailored to each patient's anatomy.</p>
                    <ul class="space-y-3 mt-auto border-t border-slate-100 pt-6">
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> 2D & 3D digital planning</li>
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> Personalized cutting guides</li>
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> Improved surgical accuracy</li>
                    </ul>
                </div>

                <!-- Instruments -->
                <div class="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 text-left shadow-xl hover:border-medical-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div class="w-12 h-12 rounded-lg bg-medical-50 flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h4 class="text-2xl font-display font-bold text-slate-900 mb-2">Surgical Instruments</h4>
                    <p class="text-[10px] text-accent-600 font-bold uppercase tracking-widest mb-4">Precision Engineered</p>
                    <p class="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-grow">Designed to complement each implant system, enabling accurate placement, efficient procedures, and consistent clinical performance.</p>
                    <ul class="space-y-3 mt-auto border-t border-slate-100 pt-6">
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> Ergonomic design</li>
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> Durable materials</li>
                        <li class="flex items-center text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-medical-500 mr-3"></span> Seamless integration</li>
                    </ul>
                </div>

            </div>

            <!-- Why Choose Our Solutions -->
            <div class="mt-24 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 text-left relative z-10 shadow-sm">
                <div class="text-center mb-12">
                    <h3 class="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-4">Why Choose Our Solutions?</h3>
                    <p class="text-slate-600 font-light">Engineered for precision, reliability, and optimal patient outcomes.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Anatomically contoured implants
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        High-strength biocompatible materials
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Locking & non-locking options
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Comprehensive instrumentation
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Precision engineering
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Wide range of trauma solutions
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Patient-specific surgical planning
                    </div>
                    <div class="flex items-center text-sm text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mr-3 flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                        Global quality standards
                    </div>
                </div>
            </div>`;

content = content.replace(anchor, anchor + '\n' + anatomicalContent);
fs.writeFileSync('index.html', content);
