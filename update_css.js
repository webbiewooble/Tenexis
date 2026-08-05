const fs = require('fs');

let html = fs.readFileSync('products-4.html', 'utf8');

const cssStyles = `
    <style>
        /* Professional Aesthetic adjustments referencing Kit Layout */
        section#instruments:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > img:nth-of-type(1) {
            transform: scale(1.1) translateY(10px) rotate(-1deg);
            filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
            z-index: 20;
            position: relative;
        }
        section#instruments:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > img:nth-of-type(1) {
            transform: scale(1.05) translateY(0px) rotate(0deg);
            filter: drop-shadow(0 20px 20px rgb(0 0 0 / 0.1));
            z-index: 10;
            position: relative;
        }
        section#instruments:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > img:nth-of-type(1) {
            transform: scale(1.0) translateY(-10px) rotate(1deg);
            filter: drop-shadow(0 15px 15px rgb(0 0 0 / 0.05));
            z-index: 5;
            position: relative;
        }
    </style>
</head>
`;

html = html.replace('</head>', cssStyles);
fs.writeFileSync('products-4.html', html);
console.log('products-4.html updated');

