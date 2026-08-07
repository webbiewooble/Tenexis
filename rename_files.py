import os
import glob
import urllib.parse

html_files = glob.glob('*.html')
all_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'dist' in root:
        continue
    for f in files:
        if ' ' in f:
            all_files.append(os.path.join(root, f))

# Rename files and update HTML references
for old_path in all_files:
    dir_name = os.path.dirname(old_path)
    old_name = os.path.basename(old_path)
    new_name = old_name.replace(' ', '_')
    new_path = os.path.join(dir_name, new_name)
    
    # rename
    os.rename(old_path, new_path)
    
    # update HTML files
    old_name_encoded = urllib.parse.quote(old_name)
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace unencoded
        content = content.replace(old_name, new_name)
        # Replace encoded
        content = content.replace(old_name_encoded, new_name)
        
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)

