const fs = require('fs');

function processFile(file) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Remove mix-blend-multiply and drop-shadow-sm
    content = content.replace(/mix-blend-multiply drop-shadow-sm/g, '');
    
    // Remove inline style with filter
    content = content.replace(/style="filter: [^"]*"/g, '');
    
    // Replace ./assets/ with /assets/ just in case
    content = content.replace(/src="\.\/assets\//g, 'src="/assets/');
    
    fs.writeFileSync(file, content);
}

processFile('products.html');
processFile('products-2.html');
console.log('Fixed images visibility.');
