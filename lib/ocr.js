import Tesseract from 'tesseract.js';

export async function extractPrescriptionText(imageFile) {
  const result = await Tesseract.recognize(imageFile, 'eng');
  return result.data.text;
}
