import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')

if len(parts) >= 12:
    # 11th product link is parts[10]
    parts[10] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Derotation%20Lateral%20closing%20DFO%20plate.pdf" download class="w-full inline-flex items-center justify-center', parts[10], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 11th link")
else:
    print(f"Could not find enough occurrences. Found {len(parts)-1}")
