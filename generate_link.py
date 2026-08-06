import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the div wrapping the image with an anchor tag wrapping the whole card, or just add a button
# Let's add a button "Explore Details" inside the card, or make the card a link.

# Here is the card start:
# <div class="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/40 border border-slate-100 hover:border-medical-200 hover:shadow-2xl hover:shadow-medical-900/10 transition-all duration-500 relative flex flex-col overflow-hidden text-left">
#                    <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-medical-50 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110 -z-0"></div>

# Wait, let's just add an Explore button at the bottom of the card.
# Search for:
"""
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                        </div>
"""
# Replace the first occurrence (which is Size 1).

new_bottom = """
                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                            <a href="products-6.html" class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-medical-50 text-medical-700 font-bold text-xs uppercase tracking-widest hover:bg-medical-100 transition-colors">
                                Explore Details
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
"""

# Let's replace only the first occurrence
content = content.replace("""                        <div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                        </div>""", new_bottom, 1)

with open('products.html', 'w', encoding='utf-8') as f:
    f.write(content)
