export default function Header() {
  return (
    <header className="flex justify-between items-center">

      {/* LEFT */}
      <div>
        <h2 className="text-2xl font-semibold">
          Hello, Affan 👋
        </h2>
        <p className="text-sm text-gray-500">
          Your medication safety overview
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm border">
          <span className="text-sm">🌐 English</span>
        </div>

        <button className="flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl text-sm font-medium">
          🎤 Voice Input
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-200" />

      </div>
    </header>
  );
}
