const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Elizabeth\\OneDrive\\Desktop\\Caio\\Galaxia\\Site-Galaxia';
const partialsDir = path.join(dir, 'partials');

// Create partials directory if it doesn't exist
if (!fs.existsSync(partialsDir)) {
  fs.mkdirSync(partialsDir);
}

// Read index.html to extract the header
const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const headerMatch = indexHtml.match(/<header class="header" id="header">[\s\S]*?<\/header>/);

if (!headerMatch) {
  console.log("Header not found in index.html");
  process.exit(1);
}

const headerHTML = headerMatch[0];

// Create partials/load-header.js
const loadHeaderJs = `const headerHTML = \`${headerHTML}\`;

const headerPlaceholder = document.getElementById("header-placeholder");
if (headerPlaceholder) {
  headerPlaceholder.innerHTML = headerHTML;
}
`;
fs.writeFileSync(path.join(partialsDir, 'load-header.js'), loadHeaderJs, 'utf8');
console.log('Created partials/load-header.js');

// Move load-footer.js to partials folder
const oldFooterPath = path.join(dir, 'load-footer.js');
const newFooterPath = path.join(partialsDir, 'load-footer.js');
if (fs.existsSync(oldFooterPath)) {
  fs.renameSync(oldFooterPath, newFooterPath);
  console.log('Moved load-footer.js to partials/load-footer.js');
}

// Replace in all HTML files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headerReplacement = `<div id="header-placeholder"></div>\n  <script src="partials/load-header.js"></script>`;

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace header if it exists
  if (content.includes('<header class="header" id="header">')) {
    content = content.replace(/<header class="header" id="header">[\s\S]*?<\/header>/, headerReplacement);
  }
  
  // Replace footer script path
  content = content.replace(/src="load-footer\.js"/g, 'src="partials/load-footer.js"');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${f}`);
});

console.log('All files updated successfully.');
