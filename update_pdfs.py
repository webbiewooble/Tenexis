import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the first 3 occurrences of href="#" download class="w-full inline-flex items-center justify-center
parts = content.split('Download Surgical Technique')

if len(parts) >= 4:
    # First product link
    parts[0] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./Surgical%20Technique%20pdf.pdf" download class="w-full inline-flex items-center justify-center', parts[0], count=1, flags=re.DOTALL)
    
    # Second product link
    parts[1] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./surgical%20technique%20Size%202.pdf" download class="w-full inline-flex items-center justify-center', parts[1], count=1, flags=re.DOTALL)
    
    # Third product link
    parts[2] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./HTO%20with%20ACL%20Reconstruction.pdf" download class="w-full inline-flex items-center justify-center', parts[2], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Updated 3 links")
else:
    print("Could not find 3 occurrences")
