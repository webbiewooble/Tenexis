import re
with open('products-5.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Add Next Page arrow to products-5.html
next_arrow = '''<span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">5</span>
                <a href="products-6.html" class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-white text-slate-600 border border-slate-300 hover:border-medical-500 hover:text-medical-600 transition-colors">6</a>
                <a href="products-6.html" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-medical-500 hover:text-medical-600 transition-colors" aria-label="Next Page">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>'''
                
c = c.replace('<span class="w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm bg-medical-600 text-white shadow-md">5</span>', next_arrow)

with open('products-5.html', 'w', encoding='utf-8') as f:
    f.write(c)

