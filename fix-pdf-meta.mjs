import fs from "fs";
import { PDFDocument } from "pdf-lib";

async function fixPdfMetadata(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.setTitle("Amey Rasekar - Official Architectural Resume");
    pdfDoc.setAuthor("Amey Rasekar");
    pdfDoc.setSubject("Full-Stack & AI Systems Engineering Resume");
    pdfDoc.setCreator("Pune Engineering Bureau");
    pdfDoc.setProducer("The Programmer's Gazette (Est. 2005)");
    const savedBytes = await pdfDoc.save();
    fs.writeFileSync(filePath, savedBytes);
    printResult(filePath, true);
  } catch (err) {
    printResult(filePath, false, err.message);
  }
}

function printResult(filePath, success, err) {
  if (success) {
    console.log(`[SUCCESS] Updated internal PDF metadata for: ${filePath}`);
  } else {
    console.log(`[ERROR] Failed to update ${filePath}: ${err}`);
  }
}

async function run() {
  await fixPdfMetadata("resume/resume.pdf");
  await fixPdfMetadata("public/resume.pdf");
  await fixPdfMetadata("public/resume/resume.pdf");
}

run();
