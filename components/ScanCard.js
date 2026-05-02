export default function ScanCard() {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Scan Prescription
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <button className="p-4 border rounded-xl">
          📷 Scan via Camera
        </button>
        <button className="p-4 border rounded-xl">
          ⬆ Upload Image
        </button>
        <button className="p-4 border rounded-xl">
          🎤 Voice Input
        </button>
      </div>
    </div>
  );
}
