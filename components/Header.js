export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold">
          Hello, Ali 👋
        </h1>
        <p className="text-gray-500">
          We're here to help you stay healthy.
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <button className="border px-4 py-2 rounded-xl">
          English
        </button>
        <button className="bg-purple-100 px-4 py-2 rounded-xl">
          اردو
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-xl">
          Voice Input
        </button>
      </div>
    </div>
  );
}
