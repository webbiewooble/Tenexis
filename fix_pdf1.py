import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the product 1 section and replace href="#" with href="./Surgical%20Technique%20pdf.pdf"
# Find Product 1's Download Brochure link
# Let's split by '<!-- Product 2 -->'
parts = content.split('<!-- Product 2 -->')

if len(parts) == 2:
    # In parts[0], which contains Product 1, find the Download Brochure link
    pattern = r'(<!-- Product 1 -->.*?)href="#" download'
    parts[0] = re.sub(pattern, r'\1href="./Surgical%20Technique%20pdf.pdf" download', parts[0], flags=re.DOTALL)
    
    new_content = parts[0] + '<!-- Product 2 -->' + parts[1]
    
    with open('products-6.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("Could not find <!-- Product 2 -->")

