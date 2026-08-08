import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')

if len(parts) >= 10:
    # 9th product link is parts[8]
    parts[8] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Lateral%20Opening%20DFO%20Plate.pdf" download class="w-full inline-flex items-center justify-center', parts[8], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 9th link")
else:
    print(f"Could not find enough occurrences. Found {len(parts)-1}")
