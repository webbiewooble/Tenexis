import re

with open('products-6.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Remove pagination
c = re.sub(r'<!-- Pagination Controls -->.*?</div>\s*</div>\s*</section>', '</div>\n    </section>', c, flags=re.DOTALL)

with open('products-6.html', 'w', encoding='utf-8') as f:
    f.write(c)
