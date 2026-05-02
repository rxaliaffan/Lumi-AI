export async function POST(req) {
  try {
    const { message, medicines, riskScore = 0, warnings = [] } = await req.json();

    if (!message) {
      return Response.json({ error: 'Message is required.' }, { status: 400 });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const medsContext = medicines?.length
      ? medicines.map((m) => `${m.name} ${m.dosage}`).join(', ')
      : 'No medicines provided';

    const warningsContext = warnings?.length
      ? warnings.join(', ')
      : 'No major warnings detected';

    const prompt = `
You are Lumi, an AI pharmacist.

Be precise, safe, and clinically cautious.

Medicines:
${medsContext}

Risk Score:
${riskScore}/10

Warnings:
${warningsContext}

User Question:
${message}
`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Unable to generate response safely.';

    return Response.json({ success: true, reply });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: 'Server error.' },
      { status: 500 }
    );
  }
}
