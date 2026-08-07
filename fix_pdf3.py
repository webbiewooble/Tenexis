import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('<!-- Product 3 -->')
if len(parts) == 2:
    pattern = r'(href="#".*?download.*?>\s*Download Brochure)'
    parts[1] = re.sub(pattern, r'href="./HTO%20with%20ACL%20Reconstruction.pdf" download class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-medical-800 transition-colors shadow-lg">\n                                Download Brochure', parts[1], count=1, flags=re.DOTALL)
    
    new_content = parts[0] + '<!-- Product 3 -->' + parts[1]
    
    with open('products-6.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("Could not find <!-- Product 3 -->")

