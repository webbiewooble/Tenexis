const fs = require('fs');
let config = fs.readFileSync('vite.config.js', 'utf-8');

if (!config.includes('products2: resolve(__dirname, \'products-2.html\')')) {
  config = config.replace(
    'products: resolve(__dirname, \'products.html\'),',
    'products: resolve(__dirname, \'products.html\'),\n        products2: resolve(__dirname, \'products-2.html\'),'
  );
  fs.writeFileSync('vite.config.js', config);
  console.log('Updated vite.config.js');
}
