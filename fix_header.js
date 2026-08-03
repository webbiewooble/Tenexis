const fs = require('fs');

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Add whitespace-nowrap to nav links
    content = content.replace(/class="text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors"/g, 'class="text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors whitespace-nowrap"');
    content = content.replace(/class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors"/g, 'class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors whitespace-nowrap"');
    
    // Add whitespace-nowrap to the button
    content = content.replace(/class="px-6 py-2.5 rounded-full bg-medical-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-medical-800 transition-colors shadow-sm"/g, 'class="px-6 py-2.5 rounded-full bg-medical-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-medical-800 transition-colors shadow-sm whitespace-nowrap text-center flex-shrink-0"');
    
    fs.writeFileSync(filename, content);
    console.log(`${filename}: updated.`);
}

processFile('index.html');
processFile('products.html');
processFile('products-2.html');
