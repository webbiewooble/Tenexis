const fs = require('fs');

function processFile(filename) {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');
    
    // Add whitespace-nowrap to nav links
    content = content.replace(/class="text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-medical-600 transition-colors"/g, 'class="text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-medical-600 transition-colors whitespace-nowrap"');
    content = content.replace(/class="px-6 py-2.5 rounded-full bg-medical-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-medical-800 transition-colors shadow-sm"/g, 'class="px-6 py-2.5 rounded-full bg-medical-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-medical-800 transition-colors shadow-sm whitespace-nowrap flex-shrink-0"');
    content = content.replace(/space-x-8/g, 'space-x-4 md:space-x-8');
    
    fs.writeFileSync(filename, content);
    console.log(`${filename}: updated.`);
}

processFile('booking.html');
