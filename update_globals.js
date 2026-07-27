const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

content = content.replace(
    '<title>Tenexis Medical - Precision Engineered for Global Health</title>',
    '<title>Tenexis Medical - Precision Engineered Orthopedic Solutions</title>'
);

content = content.replace(
    'The orthopedic sector is experiencing robust global demand,',
    'The orthopedic sector is experiencing robust demand,'
);

content = content.replace(
    'manufacturer seeking global expansion,',
    'manufacturer seeking regional expansion,'
);

fs.writeFileSync('index.html', content);
console.log("Updated globals.");
