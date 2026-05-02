import { extractPrescriptionText } from '@/lib/ocr';
import { parseMedicines } from '@/lib/parser';
import { calculateRiskScore } from '@/lib/riskEngine';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get('image');

    if (!image) {
      return Response.json(
        { error: 'Prescription image is required.' },
        { status: 400 }
      );
    }

    // OCR extraction
    const extractedText = await extractPrescriptionText(image);

    // Medicine parsing
    const medicines = parseMedicines(extractedText);

    // Risk engine
    const riskAnalysis = calculateRiskScore(medicines);

    return Response.json({
      success: true,
      extractedText,
      medicines,
      riskScore: riskAnalysis.score,
      warnings: riskAnalysis.warnings,
    });
  } catch (error) {
    console.error('Analyze API Error:', error);

    return Response.json(
      {
        success: false,
        error: 'Failed to analyze prescription.',
      },
      { status: 500 }
    );
  }
}
