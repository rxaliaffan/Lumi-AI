export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json(
        { error: 'Prompt is required.' },
        { status: 400 }
      );
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

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
                  text: `You are Lumi, an AI digital pharmacist focused on medication safety. Provide safe, accurate, patient-friendly explanations. User question: ${prompt}`,
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
      'Sorry, I could not process that medication query right now.';

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
      { status: 500 } );
  }
}
