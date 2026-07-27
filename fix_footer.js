const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf-8');
indexHtml = indexHtml.replace(
    '<li><a href="#" class="text-slate-400 hover:text-white transition-colors">Product</a></li>',
    '<li><a href="products.html" class="text-slate-400 hover:text-white transition-colors">Product</a></li>'
);
fs.writeFileSync('index.html', indexHtml);

let productsHtml = fs.readFileSync('products.html', 'utf-8');
productsHtml = productsHtml.replace(
    '<li><a href="#" class="text-slate-400 hover:text-white transition-colors">Product</a></li>',
    '<li><a href="products.html" class="text-slate-400 hover:text-white transition-colors">Product</a></li>'
);
fs.writeFileSync('products.html', productsHtml);
console.log("Fixed footer.");
