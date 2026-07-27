const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const regOfficeOld = "48, Shreenath Sarthak Industrial Park, Ring Road, Nikol, Ahmedabad, Gujarat, India.";
const regOfficeNew = "5393, Chandni Chowk, Kucha Rehman, New Delhi, North Delhi, Delhi 110006";

const corpOfficeOld = "Zion Z1, 709, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat, India.";
const corpOfficeNew = "Shop No.1&3 Nao Healthcare Ram Mandir Road Opp. Fortis Vasant Kunj Delhi-110070";

content = content.replace(regOfficeOld, regOfficeNew);
content = content.replace(corpOfficeOld, corpOfficeNew);

fs.writeFileSync('index.html', content);
console.log("Updated addresses");
