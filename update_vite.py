import re

with open('vite.config.js', 'r') as f:
    content = f.read()

content = content.replace("products5: resolve(__dirname, 'products-5.html'),", "products5: resolve(__dirname, 'products-5.html'),\n        products6: resolve(__dirname, 'products-6.html'),")

with open('vite.config.js', 'w') as f:
    f.write(content)
