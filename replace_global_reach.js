const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const startTag = '<section class="py-24 bg-white reveal relative overflow-hidden">';
const endTag = '<section id="blogs" class="py-24 bg-white reveal">';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newSection = `    <section class="py-24 bg-white reveal relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block">Local Reach</span>
            <h2 class="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-16">Our Presence</h2>
            
            <div class="relative w-full max-w-5xl mx-auto rounded-xl bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 min-h-[400px] md:min-h-[500px] flex items-center justify-center p-12 text-center">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-medical-900/20 via-transparent to-transparent"></div>
                
                <div class="relative z-10 max-w-2xl">
                    <svg class="w-16 h-16 text-accent-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <h3 class="text-3xl font-display font-bold text-white mb-6">Exclusively serving Delhi and the NCR region</h3>
                    <p class="text-slate-300 font-light leading-relaxed text-lg mb-8">We are deeply committed to elevating surgical care within our local community. Our focused operations in Delhi ensure rapid response times, personalized clinical support, and seamless delivery for healthcare providers across the region.</p>
                    
                    <div class="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <span class="px-4 py-2 bg-slate-800/80 text-white rounded-full border border-slate-700 backdrop-blur-sm">New Delhi</span>
                        <span class="px-4 py-2 bg-slate-800/80 text-white rounded-full border border-slate-700 backdrop-blur-sm">North Delhi</span>
                        <span class="px-4 py-2 bg-slate-800/80 text-white rounded-full border border-slate-700 backdrop-blur-sm">Vasant Kunj</span>
                        <span class="px-4 py-2 bg-slate-800/80 text-white rounded-full border border-slate-700 backdrop-blur-sm">NCR Region</span>
                    </div>
                </div>
            </div>
            
            <!-- Roadmap -->
            <div class="mt-24 text-left max-w-5xl mx-auto">
                <span class="text-accent-600 font-bold tracking-widest uppercase text-xs mb-4 block text-center">Future</span>
                <h3 class="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-12 text-center">Roadmap to Expansion</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 relative overflow-hidden">
                        <div class="text-medical-600 font-black text-4xl opacity-20 absolute -right-4 -top-4 font-display">Q3'26</div>
                        <h4 class="font-bold text-slate-900 mb-2 relative z-10">Q3 2026</h4>
                        <p class="text-sm text-slate-600 relative z-10">Establish core operations and register Tenexis Medical in Delhi.</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 relative overflow-hidden">
                        <div class="text-medical-600 font-black text-4xl opacity-20 absolute -right-4 -top-4 font-display">Q1'27</div>
                        <h4 class="font-bold text-slate-900 mb-2 relative z-10">Q1 2027</h4>
                        <p class="text-sm text-slate-600 relative z-10">Acquire top clinical talent to scale high-performing operational support teams.</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 relative overflow-hidden">
                        <div class="text-medical-600 font-black text-4xl opacity-20 absolute -right-4 -top-4 font-display">Q3'27</div>
                        <h4 class="font-bold text-slate-900 mb-2 relative z-10">Q3 2027</h4>
                        <p class="text-sm text-slate-600 relative z-10">Expand network within the NCR, establishing key local distribution warehouses.</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 relative overflow-hidden">
                        <div class="text-medical-600 font-black text-4xl opacity-20 absolute -right-4 -top-4 font-display">Q1'28</div>
                        <h4 class="font-bold text-slate-900 mb-2 relative z-10">Q1 2028</h4>
                        <p class="text-sm text-slate-600 relative z-10">Integrate specialized, hands-on recovery clinics to deliver true post-op patient care.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    fs.writeFileSync('index.html', before + newSection + after);
    console.log("Replaced global reach section.");
} else {
    console.log("Could not find start or end tags.");
}
