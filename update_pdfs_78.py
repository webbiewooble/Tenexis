import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')

if len(parts) >= 9:
    # 7th product link is parts[6]
    parts[6] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Medial%20clsong%20HTO%20Size%201%20&%202.pdf" download class="w-full inline-flex items-center justify-center', parts[6], count=1, flags=re.DOTALL)
    
    # 8th product link is parts[7]
    parts[7] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Medial%20clsong%20HTO%20Size%201%20&%202.pdf" download class="w-full inline-flex items-center justify-center', parts[7], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 7th and 8th links")
else:
    print(f"Could not find enough occurrences. Found {len(parts)-1}")
