export default function ActionButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <button className="bg-purple-500 text-white rounded-xl p-4 text-sm font-medium">
        Order Medicine
      </button>

      <button className="bg-blue-500 text-white rounded-xl p-4 text-sm font-medium">
        Consult Doctor
      </button>

      <button className="bg-green-500 text-white rounded-xl p-4 text-sm font-medium">
        Set Reminder
      </button>

      <button className="bg-indigo-500 text-white rounded-xl p-4 text-sm font-medium">
        Share Report
      </button>
    </div>
  );
}
