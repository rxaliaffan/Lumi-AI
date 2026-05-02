export default function AdherenceCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
      <h3 className="font-semibold text-gray-800 mb-4">
        Adherence Progress
      </h3>

      <div className="w-32 h-32 rounded-full border-[10px] border-green-500 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">85%</span>
      </div>

      <p className="text-sm text-gray-500 mt-3 text-center">
        Great job! Keep it up 🎉
      </p>
    </div>
  );
}
