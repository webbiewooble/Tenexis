import re

with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'<div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">\s*<div class="flex items-center space-x-2 text-slate-400 text-\[11px\] font-semibold uppercase tracking-wider">\s*<span class="w-1\.5 h-1\.5 rounded-full bg-accent-400"></span>\s*<span>High Precision</span>\s*</div>\s*</div>'

replacement = r'''<div class="mt-auto flex flex-col space-y-4 border-t border-slate-100 pt-6 group-hover:border-medical-100 transition-colors duration-300">
                            <div class="flex items-center space-x-2 text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                                <span>High Precision</span>
                            </div>
                            <a href="#" class="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-medical-50 hover:text-medical-700 transition-colors border border-slate-200 hover:border-medical-200">
                                Download Surgical Technique
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </a>
                        </div>'''

content = re.sub(pattern, replacement, content)

with open('products.html', 'w', encoding='utf-8') as f:
    f.write(content)
