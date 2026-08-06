import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the product 2 section and replace href="#" with href="./surgical technique Size 2.pdf"
# Find Product 2:
pattern = r'(<!-- Product 2 -->.*?)href="#" download'

new_content = re.sub(pattern, r'\1href="./surgical technique Size 2.pdf" download', content, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
