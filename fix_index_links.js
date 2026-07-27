const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');

// desktop menu
indexHtml = indexHtml.replace(
    '<a href="#products" class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors">Products</a>',
    '<a href="products.html" class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors">Products</a>'
);
indexHtml = indexHtml.replace(
    '<a href="#products" class="text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors">Products</a>',
    '<a href="products.html" class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors">Products</a>'
);

// mobile menu
indexHtml = indexHtml.replace(
    '<a href="#products" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Products</a>',
    '<a href="products.html" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Products</a>'
);

fs.writeFileSync('index.html', indexHtml);
console.log("Fixed index links.");
