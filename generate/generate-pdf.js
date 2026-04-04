const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Paths
const testsFolder = path.join(__dirname, '..', 'tests');
const pagesFolder = path.join(__dirname, '..', 'pages');
const outputFile = path.join(__dirname, '..', 'PlaywrightTests.pdf');

// Fonts
const timesFontPath = 'C:/Windows/Fonts/times.ttf';
const timesBoldPath = 'C:/Windows/Fonts/timesbd.ttf';

// Create PDF
const doc = new PDFDocument({
  margin: 50,
  size: 'A4'
});

doc.pipe(fs.createWriteStream(outputFile));

doc.registerFont('Times', timesFontPath);
doc.registerFont('Times-Bold', timesBoldPath);

// ---------------- RECURSIVE FUNCTION ----------------

function getAllFiles(dir, extension, type, baseFolder) {
  let results = [];

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extension, type, baseFolder));
    } else if (file.endsWith(extension)) {
      results.push({
        name: path.relative(baseFolder, filePath), // shows folder structure
        path: filePath,
        type: type
      });
    }
  });

  return results;
}

// ---------------- GET FILES ----------------

// Pages
const pageFiles = getAllFiles(pagesFolder, '.ts', 'Page', pagesFolder);

// Tests (recursive → includes apitests)
const testFiles = getAllFiles(testsFolder, '.spec.ts', 'Test', testsFolder);

// Sort
pageFiles.sort((a, b) => a.name.localeCompare(b.name));
testFiles.sort((a, b) => a.name.localeCompare(b.name));

// Combine → Pages FIRST, then Tests
const files = [...pageFiles, ...testFiles];
const totalFiles = files.length;

// ---------------- TITLE PAGE ----------------

doc.font('Times-Bold')
   .fontSize(20)
   .text('Playwright Automation Test Scripts', { align: 'center' });

doc.moveDown(1);

doc.font('Times')
   .fontSize(14)
   .text(`Total Files: ${totalFiles}`, { align: 'center' });

doc.addPage();

// ---------------- INDEX PAGE ----------------

doc.font('Times-Bold')
   .fontSize(18)
   .text('Index', { underline: true });

doc.moveDown(1);

files.forEach((file, index) => {
  const destination = `file_${index}`;

  doc.font('Times')
     .fontSize(12)
     .fillColor('blue')
     .text(`${index + 1}. [${file.type}] ${file.name}`, {
        goTo: destination,
        underline: true
     });

  doc.moveDown(0.5);
});

doc.fillColor('black');

// ---------------- FILE CONTENT ----------------

files.forEach((file, index) => {

  const content = fs.readFileSync(file.path, 'utf8')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  doc.addPage();

  const destination = `file_${index}`;
  doc.addNamedDestination(destination);

  // Header
  doc.font('Times-Bold')
     .fontSize(14)
     .text(`${index + 1}. [${file.type}] File: ${file.name}`, { underline: true });

  doc.moveDown(1);

  doc.font('Times')
     .fontSize(11);

  const lines = content.split('\n');

  lines.forEach(line => {
    doc.text(line, { lineGap: 3 });
  });
});

// ---------------- FINISH ----------------

doc.end();

console.log('✅ PDF Generated successfully with nested test files!');

//to execute this script, 
//run: node generate/generate-pdf.js