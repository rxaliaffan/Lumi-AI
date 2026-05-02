export default function Header() {
  return (
    <header className="flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-semibold">Hello, Ali 👋</h2>
        <p className="text-sm text-gray-500">
          We’re here to help you stay healthy.
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="px-4 py-2 bg-gray-100 rounded-xl text-sm">
          🌐 English
        </button>

        <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-xl text-sm">
          🎤 Voice Input
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-200" />

      </div>
    </header>
  );
}
