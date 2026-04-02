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

// ---------------- GET FILES ----------------

// Page files (.ts)
const pageFiles = fs.readdirSync(pagesFolder)
  .filter(file => file.endsWith('.ts'))
  .map(file => ({
    name: file,
    path: path.join(pagesFolder, file),
    type: 'Page'
  }));

// Test files (.spec.ts)
const testFiles = fs.readdirSync(testsFolder)
  .filter(file => file.endsWith('.spec.ts'))
  .map(file => ({
    name: file,
    path: path.join(testsFolder, file),
    type: 'Test'
  }));

// Sort individually
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

doc.end();

console.log('✅ PDF Generated: Pages first, then Tests with Index Links');


//to execute this script, 
//run: node generate/generate-pdf.js