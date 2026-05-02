import { extractPrescriptionText } from '@/lib/ocr';
import { parseMedicines } from '@/lib/parser';
import { calculateRiskScore } from '@/lib/riskEngine';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get('image');
    const user_id = formData.get('user_id');

    if (!image) {
      return Response.json(
        { error: 'Prescription image is required.' },
        { status: 400 }
      );
    }

    // OCR extraction
    const extractedText = await extractPrescriptionText(image);

    // Parse medicines
    const medicines = parseMedicines(extractedText);

    // Safety engine
    const riskAnalysis = calculateRiskScore(medicines);

    // Save prescription
    const { data: prescriptionData, error: prescriptionError } = await supabase
      .from('prescriptions')
      .insert([
        {
          user_id,
          extracted_text: extractedText,
          risk_score: riskAnalysis.score,
        },
      ])
      .select()
      .single();

    if (prescriptionError) throw prescriptionError;

    // Save medicines
    const medicineRows = medicines.map((med) => ({
      prescription_id: prescriptionData.id,
      name: med.name,
      dosage: med.dosage,
      purpose: 'Pending AI enrichment',
      schedule: 'Pending', safety: riskAnalysis.warnings.join(', ') || 'Safe',
    }));

    const { error: medicineError } = await supabase
      .from('medicines')
      .insert(medicineRows);

    if (medicineError) throw medicineError;

    return Response.json({
      success: true,
      prescriptionId: prescriptionData.id,
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
        error: 'Failed to analyze and save prescription.',
      },
      { status: 500 }
    );
  }
}
