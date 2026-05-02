export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-5">
      <h1 className="text-xl font-bold text-purple-600 mb-6">
        Lumi
      </h1>

      <div className="space-y-3">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
          Home
        </div>
        <div className="text-gray-600 p-3">Scan Prescription</div>
        <div className="text-gray-600 p-3">My Medicines</div>
        <div className="text-gray-600 p-3">Drug Interactions</div>
        <div className="text-gray-600 p-3">Reminders</div>
      </div>

      <div className="mt-10 bg-purple-50 p-4 rounded-xl text-center">
        <p className="text-sm">Hi! I'm Lumi 🤖</p>
        <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-xl">
          Talk to Lumi
        </button>
      </div>
    </div>
  );
}
