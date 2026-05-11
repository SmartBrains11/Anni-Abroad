const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx')).map(f => path.join(srcDir, f));

const replacements = [
  // Hardcoded dark backgrounds
  { regex: /bg-\[\#13131f\]/g, replacement: 'bg-white' },
  { regex: /bg-\[\#0f0f1a\]/g, replacement: 'bg-gray-50' },
  { regex: /bg-\[\#1a1a2e\]/g, replacement: 'bg-white' },
  
  // Hero Floating Cards Gradients
  { regex: /from-blue-900\/80 to-blue-800\/60/g, replacement: 'from-blue-50 to-blue-100/80' },
  { regex: /from-red-900\/80 to-rose-800\/60/g, replacement: 'from-red-50 to-rose-100/80' },
  { regex: /from-red-800\/80 to-red-700\/60/g, replacement: 'from-red-50 to-red-100/80' },
  { regex: /from-amber-900\/80 to-yellow-800\/60/g, replacement: 'from-amber-50 to-yellow-100/80' },

  // Hero background elements
  { regex: /bg-brand-900\/20/g, replacement: 'bg-brand-100/40' },
  { regex: /bg-crimson-dark\/15/g, replacement: 'bg-brand-50/40' },
  { regex: /bg-brand-900\/30/g, replacement: 'bg-brand-100/50' },

  // Services gradients
  { regex: /from-brand-900\/40 to-brand-800\/20/g, replacement: 'from-brand-50 to-brand-100/50' },
  { regex: /from-sky-900\/30 to-sky-800\/10/g, replacement: 'from-sky-50 to-sky-100/50' },
  { regex: /from-emerald-900\/30 to-emerald-800\/10/g, replacement: 'from-emerald-50 to-emerald-100/50' },
  { regex: /from-amber-900\/30 to-amber-800\/10/g, replacement: 'from-amber-50 to-amber-100/50' },
  { regex: /from-violet-900\/30 to-violet-800\/10/g, replacement: 'from-violet-50 to-violet-100/50' },
  { regex: /from-rose-900\/30 to-rose-800\/10/g, replacement: 'from-rose-50 to-rose-100/50' },

  // Buttons with red-gradient should have text-white
  { regex: /bg-red-gradient\s+text-gray-900/g, replacement: 'bg-red-gradient text-white' },
  { regex: /text-gray-900\s+bg-red-gradient/g, replacement: 'text-white bg-red-gradient' },
  { regex: /bg-red-gradient\s+text-gray-700/g, replacement: 'bg-red-gradient text-white' },
  { regex: /text-gray-900\s+(.*?)bg-red-gradient/g, replacement: 'text-white $1bg-red-gradient' },
  { regex: /bg-red-gradient\s+(.*?)text-gray-900/g, replacement: 'bg-red-gradient $1text-white' },

  // Any remaining dark elements
  { regex: /bg-white\/5/g, replacement: 'bg-gray-50' },
  { regex: /border-white\/10/g, replacement: 'border-gray-200' },
  { regex: /border-white\/20/g, replacement: 'border-gray-200' },
  { regex: /text-white\/[0-9]+/g, replacement: 'text-gray-600' },
  { regex: /group-hover:text-brand-100/g, replacement: 'group-hover:text-brand-700' },
  
  // Specific tweaks for shadow-glow-red on light theme (make it less harsh maybe)
  // { regex: /shadow-glow-red/g, replacement: 'shadow-lg shadow-brand-500/30' },
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.basename(file)}`);
  }
}
console.log('Fixes applied.');
