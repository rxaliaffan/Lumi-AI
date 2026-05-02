export async function POST(req) {
  try {
    const { message, medicines, riskScore = 0, warnings = [] } = await req.json();

    if (!message) {
      return Response.json(
        { error: 'Message is required.' },
        { status: 400 }
      );
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const medsContext =
      medicines && medicines.length > 0
        ? medicines.map((m) => `${m.name} ${m.dosage}`).join(', ')
        : 'No medicines provided';

    const warningsContext =
      warnings && warnings.length > 0
        ? warnings.join(', ')
        : 'No major warnings detected';

    const fullPrompt = `
You are Lumi, a professional AI pharmacist focused on patient safety.

Rules:
- Use simple, clear language
- Highlight risks clearly
- Mention side effects when relevant
- Never give dangerous advice
- If unsure → say "Please consult your doctor"
- Do NOT hallucinate

Patient medicines:
${medsContext}

Risk score: ${riskScore}/10

Warnings:
${warningsContext}

User question:
${message}
`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await geminiResponse.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not process that safely.';

    return Response.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error('Chat API Error:', error);

    return Response.json(
      {
        success: false,
        error: 'Failed to process AI request.',
      },
      { status: 500 }
    );
  }
}
