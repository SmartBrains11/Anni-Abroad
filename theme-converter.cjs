const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');
const appFile = path.join(__dirname, 'src', 'App.tsx');
const indexCss = path.join(__dirname, 'src', 'index.css');
const tailwindConfig = path.join(__dirname, 'tailwind.config.js');

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx')).map(f => path.join(srcDir, f));
files.push(appFile);

const replacements = [
  // Backgrounds
  { regex: /bg-\[\#0f0f1a\]/g, replacement: 'bg-white' },
  { regex: /bg-charcoal-light/g, replacement: 'bg-gray-50' },
  { regex: /bg-charcoal-soft/g, replacement: 'bg-gray-100' },
  { regex: /bg-charcoal/g, replacement: 'bg-white' },
  { regex: /bg-white\/3/g, replacement: 'bg-gray-50' },
  { regex: /bg-white\/5/g, replacement: 'bg-gray-50' },
  { regex: /bg-white\/8/g, replacement: 'bg-gray-100' },
  { regex: /bg-white\/10/g, replacement: 'bg-gray-100' },
  { regex: /bg-white\/12/g, replacement: 'bg-gray-100' },
  { regex: /bg-white\/15/g, replacement: 'bg-gray-100' },
  { regex: /bg-white\/20/g, replacement: 'bg-gray-200' },
  
  // Hovers (Backgrounds)
  { regex: /hover:bg-white\/5/g, replacement: 'hover:bg-gray-100' },
  { regex: /hover:bg-white\/10/g, replacement: 'hover:bg-gray-200' },
  { regex: /hover:bg-white\/12/g, replacement: 'hover:bg-gray-200' },

  // Text
  // Careful with text-white replacement. Don't replace if it's already text-white/50
  // It's better to replace specific white text opacity first.
  { regex: /text-white\/[456]0/g, replacement: 'text-gray-600' },
  { regex: /text-white\/55/g, replacement: 'text-gray-600' },
  { regex: /text-white\/70/g, replacement: 'text-gray-700' },
  { regex: /text-white\/80/g, replacement: 'text-gray-700' },
  { regex: /text-white\/90/g, replacement: 'text-gray-800' },
  { regex: /text-white(?![\/\w\-])/g, replacement: 'text-gray-900' },

  // Borders
  { regex: /border-white\/[0-9]{1,2}/g, replacement: 'border-gray-200' },
  { regex: /hover:border-white\/[0-9]{1,2}/g, replacement: 'hover:border-gray-300' },
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  // Let's specifically handle buttons that had bg-white/8 text-white to text-gray-900 and such
  // The above replacements should have handled it mostly.
  fs.writeFileSync(file, content);
}

// Update index.css
let cssContent = fs.readFileSync(indexCss, 'utf8');
cssContent = cssContent.replace('background-color: #0f0f1a;', 'background-color: #ffffff;');
cssContent = cssContent.replace('color: #ffffff;', 'color: #1a1a2e;');
fs.writeFileSync(indexCss, cssContent);

// Update tailwind.config.js
let tailwindContent = fs.readFileSync(tailwindConfig, 'utf8');
tailwindContent = tailwindContent.replace("'linear-gradient(135deg, #1a0a0a 0%, #2d0d15 40%, #1a1a2e 100%)'", "'linear-gradient(135deg, #ffffff 0%, #fff5f5 40%, #fdfdfd 100%)'");
tailwindContent = tailwindContent.replace("'linear-gradient(135deg, rgba(192,24,42,0.12) 0%, rgba(26,26,46,0.08) 100%)'", "'linear-gradient(135deg, rgba(192,24,42,0.05) 0%, rgba(0,0,0,0.02) 100%)'");
fs.writeFileSync(tailwindConfig, tailwindContent);

console.log('Conversion complete');
