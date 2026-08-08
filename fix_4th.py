import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('Download Surgical Technique')
# The 4th product link is in parts[3] because parts[0] is before the first link, parts[1] is before the 2nd, parts[2] is before the 3rd, parts[3] is before the 4th.
if len(parts) > 4:
    parts[3] = re.sub(r'href="#" download class="w-full inline-flex items-center justify-center(?!.*href="#" download class="w-full inline-flex items-center justify-center)', r'href="./HTO%20with%20ACL%20Reconstruction.pdf" download class="w-full inline-flex items-center justify-center', parts[3], count=1, flags=re.DOTALL)
    
    new_content = 'Download Surgical Technique'.join(parts)
    
    with open('products.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated 4th link")
else:
    print("Could not find enough occurrences")
