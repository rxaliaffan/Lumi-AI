export default function RiskScore({ data }) {
  const score = data?.riskScore || 0;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

      <h3 className="text-lg font-semibold mb-6">
        Prescription Risk Score
      </h3>

      <div className="flex items-center gap-6">

        {/* DONUT */}
        <div className="relative w-32 h-32 flex items-center justify-center">

          <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
            
            <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{score}</span>
              <span className="text-xs text-gray-500">/10</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">

          <h4 className="font-semibold mb-2">AI Summary</h4>

          <p className="text-sm text-gray-600 leading-relaxed">
            Your prescription shows moderate risk. Some medications may interact
            or require adjustments.
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-4 flex-wrap">

            <span className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-lg">
              Interactions
            </span>

            <span className="bg-yellow-50 text-yellow-600 text-xs px-3 py-1 rounded-lg">
              Dosage
            </span>

            <span className="bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-lg">
              Warnings
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}
