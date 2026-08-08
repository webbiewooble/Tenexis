import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')

if len(parts) >= 11:
    # 10th product link is parts[9]
    parts[9] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Medial%20Closing%20DFO.pdf" download class="w-full inline-flex items-center justify-center', parts[9], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 10th link")
else:
    print(f"Could not find enough occurrences. Found {len(parts)-1}")
