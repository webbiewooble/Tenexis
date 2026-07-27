const fs = require('fs');

let productsHtml = fs.readFileSync('products.html', 'utf-8');
productsHtml = productsHtml.replace(
    '<a href="#" class="text-sm font-bold text-slate-900 uppercase tracking-widest">Home</a>',
    '<a href="index.html" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Home</a>'
);
productsHtml = productsHtml.replace(
    '<a href="#" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Products</a>',
    '<a href="#" class="text-sm font-bold text-slate-900 uppercase tracking-widest">Products</a>'
);
productsHtml = productsHtml.replace(
    '<a href="#" class="flex items-center group w-48 hover:opacity-90 transition-opacity">',
    '<a href="index.html" class="flex items-center group w-48 hover:opacity-90 transition-opacity">'
);

fs.writeFileSync('products.html', productsHtml);

let indexHtml = fs.readFileSync('index.html', 'utf-8');
indexHtml = indexHtml.replace(
    '<a href="products.html" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Products</a>',
    '<a href="products.html" class="text-sm font-semibold text-slate-600 uppercase tracking-widest">Products</a>' // already correct maybe? Let's check
);
// Make logo point to index.html in index.html too? or "#"? Just "#" is fine for index.html.

fs.writeFileSync('index.html', indexHtml);
console.log("Fixed mobile links.");
