import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')

if len(parts) >= 7:
    # 5th product link is parts[4]
    parts[4] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Lateral%20closing%20wedge%20Size%201.pdf" download class="w-full inline-flex items-center justify-center', parts[4], count=1, flags=re.DOTALL)
    
    # 6th product link is parts[5]
    parts[5] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Lateral%20closing%20wedge%20HTO%20size%202.pdf" download class="w-full inline-flex items-center justify-center', parts[5], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 5th and 6th links")
else:
    print("Could not find enough occurrences")
