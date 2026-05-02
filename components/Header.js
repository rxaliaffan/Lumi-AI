export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold">Good Evening, Affan 👋</h2>
        <p className="text-slate-500 mt-1">
          Your medication safety overview is ready.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-5 py-3 rounded-2xl bg-primary text-white font-medium shadow-soft">
          Upgrade to LumiX
        </button>
        <div className="w-12 h-12 rounded-full bg-slate-200" />
      </div>
    </header>
  );
}
