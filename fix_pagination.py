import re
import glob

files = glob.glob('products*.html')

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove the pagination link for page 6
    # It looks like: <a href="products-6.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">6</a>
    # Or: <a href="products-6.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Next Page">...</a>
    
    # regex for removing whole <a> tags pointing to products-6.html (if they contain 6 or svg for next page)
    # Be careful not to remove the "Explore Details" one, we'll replace that one first.
    
    content = content.replace('href="products-6.html"', 'href="#"')
    
    # Now they have href="#". Let's just remove the pagination buttons for 6 and Next Page
    # <a href="#" class="... w-10 h-10 ...">6</a>
    content = re.sub(r'<a href="#" class="w-10 h-10[^>]*>6</a>\s*', '', content)
    
    # Remove the next page arrow entirely
    content = re.sub(r'<a href="#" class="w-10 h-10[^>]*aria-label="Next Page"[^>]*>\s*<svg[^>]*>.*?</svg>\s*</a>\s*', '', content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done")
