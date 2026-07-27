const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');

// The products section starts with: <section id="products"
// and ends before: <section class="py-24 bg-white reveal relative overflow-hidden">
const productsStart = indexHtml.indexOf('<section id="products"');
const localReachStart = indexHtml.indexOf('<section class="py-24 bg-white reveal relative overflow-hidden">');

if (productsStart === -1 || localReachStart === -1) {
    console.error("Could not find section boundaries");
    process.exit(1);
}

const productsSectionHtml = indexHtml.substring(productsStart, localReachStart);

// Now to create products.html, we'll take index.html, remove all other main sections.
// Sections in index.html:
// <section class="relative min-h-screen ... id="home"> -> we can remove or keep a small hero
// <section id="about"
// <section id="governance"
// <section id="products"
// <section class="py-24 bg-white reveal relative overflow-hidden"> (Local Reach)
// <section id="blogs"
// <section id="quality" (Wait, quality is before about? Let's check order: quality(227), about(259), governance(284), products(496), local reach(1049), blogs(1101), contact(1206))

// Actually, an easier way to make products.html is to replace the whole <main> or all sections between header and footer with just the products section.
// Let's find </nav> or the end of header.
const navEnd = indexHtml.indexOf('</nav>') + 6;
// There is a <div class="fixed inset-0... " id="mobile-menu"> after nav.
const mobileMenuEnd = indexHtml.indexOf('</div>', indexHtml.indexOf('id="mobile-menu"')) + 6;
// Actually, let's just find the first <section
const firstSectionStart = indexHtml.indexOf('<section');
const footerStart = indexHtml.indexOf('<footer');

if (firstSectionStart === -1 || footerStart === -1) {
    console.error("Could not find first section or footer");
    process.exit(1);
}

// Update links in nav for products.html
let productsPageHtml = indexHtml.substring(0, firstSectionStart) + productsSectionHtml + indexHtml.substring(footerStart);

// Update links in productsPageHtml
productsPageHtml = productsPageHtml.replace(/href="#about"/g, 'href="index.html#about"');
productsPageHtml = productsPageHtml.replace(/href="#governance"/g, 'href="index.html#governance"');
productsPageHtml = productsPageHtml.replace(/href="#products"/g, 'href="#"');
productsPageHtml = productsPageHtml.replace(/href="#quality"/g, 'href="index.html#quality"');
productsPageHtml = productsPageHtml.replace(/href="#facilities"/g, 'href="index.html#facilities"');
productsPageHtml = productsPageHtml.replace(/href="#blogs"/g, 'href="index.html#blogs"');
productsPageHtml = productsPageHtml.replace(/href="#contact"/g, 'href="index.html#contact"');
// The home link is href="#"
productsPageHtml = productsPageHtml.replace(/href="#" class="text-slate-900 font-bold/g, 'href="index.html" class="text-slate-500 font-bold');
// And make Products active
productsPageHtml = productsPageHtml.replace(/href="#" class="text-slate-500 hover:text-medical-600 font-semibold text-xs tracking-widest uppercase transition-colors">Products/g, 'href="#" class="text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors">Products');

// Update indexHtml to remove products section and change link
indexHtml = indexHtml.substring(0, productsStart) + indexHtml.substring(localReachStart);
indexHtml = indexHtml.replace(/href="#products"/g, 'href="products.html"');

fs.writeFileSync('products.html', productsPageHtml);
fs.writeFileSync('index.html', indexHtml);

console.log("Pages split successfully.");
