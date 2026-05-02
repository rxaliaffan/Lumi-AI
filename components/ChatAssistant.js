export default function ChatAssistant() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col items-center text-center space-y-3">
      <div className="text-4xl">🤖</div>

      <h3 className="font-semibold text-gray-800">Hi! I'm Lumi</h3>

      <p className="text-sm text-gray-500">
        Your AI Pharmacist. How can I help you today?
      </p>

      <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm">
        Talk to Lumi
      </button>
    </div>
  );
}
