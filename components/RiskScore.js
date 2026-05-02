export default function RiskScore({ data }) {
  const score = data?.riskScore || 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <h3 className="text-lg font-semibold mb-4">Prescription Risk Score</h3>

      <div className="flex items-center gap-6">

        {/* Donut */}
        <div className="relative w-32 h-32">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{score}</span>
              <span className="text-xs text-gray-500">/10</span>
            </div>
          </div>
        </div>

        {/* AI Summary */}
        <div>
          <h4 className="font-semibold mb-2">AI Summary</h4>
          <p className="text-sm text-gray-600">
            Your prescription has some important points to note.
            Some medicines may interact with each other.
          </p>

          <div className="flex gap-3 mt-4">

            <div className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-xs">
              Drug Interactions
            </div>

            <div className="bg-yellow-50 text-yellow-600 px-3 py-2 rounded-lg text-xs">
              Dose Adjustment
            </div>

            <div className="bg-orange-50 text-orange-600 px-3 py-2 rounded-lg text-xs">
              Warnings
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
