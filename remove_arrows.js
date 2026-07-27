const fs = require('fs');

function removeArrowFromHtml(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Pattern for the arrow button div
    const pattern = /<div class="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-all duration-500">\s*<svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"><\/path><\/svg>\s*<\/div>/g;

    content = content.replace(pattern, '');
    fs.writeFileSync(filePath, content);
    console.log(`Removed arrows from ${filePath}`);
}

removeArrowFromHtml('products.html');
removeArrowFromHtml('products-2.html');
