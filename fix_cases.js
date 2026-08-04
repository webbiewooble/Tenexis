const fs = require('fs');
let html = fs.readFileSync('products-5.html', 'utf8');

const replacements = [
  './assets/Case 1 - Preoperative planning.webp',
  './assets/Case 1 - Post op imaging - day 1 - 01.webp',
  './assets/Case 1 - Postoperative - 3 months.webp',
  './assets/Case 2 - Preoperative xray - 01.webp',
  './assets/Case 2 - Postoperative xray - 01.webp',
  './assets/Case 3 - Preoperative xray - 01.webp',
  './assets/Case 3 - Postoperative xray - 01.webp',
];

let i = 0;
// Case 1 has 3
// Case 2 has 2
// Case 3 has 2
// Total 7 placeholders in products-5.html?
html = html.replace(/<div class="absolute inset-0 flex[a-z0-9\s-]*items-center justify-center[^>]*>.*?<\/div>/gs, (match) => {
  if (i < replacements.length) {
    let img = `<img src="${replacements[i]}" alt="Clinical Case" class="w-full h-full object-cover">`;
    i++;
    return `<div class="absolute inset-0 overflow-hidden rounded-2xl group">${img}</div>`;
  }
  return match;
});

fs.writeFileSync('products-5.html', html);
console.log('Replaced ' + i + ' images.');
