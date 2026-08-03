const fs = require('fs');
const cheerio = require('cheerio');

const fallback = './IMG_0185.jpeg';

for (const file of ['products.html', 'products-2.html']) {
    const html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });

    $('img').each((i, el) => {
        let src = $(el).attr('src');
        if (src && src.startsWith('./') && src !== './assets/logo.svg') {
            const path = src.replace('./', '');
            if (!fs.existsSync(path)) {
                console.log('Fixing missing image:', src, 'in', file);
                $(el).attr('src', fallback);
            }
        }
    });

    fs.writeFileSync(file, $.html(), 'utf8');
}
