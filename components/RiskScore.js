export default function RiskScore({ data }) {
  const score = data?.riskScore || 0;
  const warnings = data?.warnings || [];

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 h-full">
      <h3 className="text-xl font-semibold mb-6">Prescription Safety Score</h3>

      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full border-[10px] border-warning flex items-center justify-center mb-4">
          <span className="text-3xl font-bold text-warning">{score}</span>
        </div>

        <p className="text-warning font-semibold">
          {score > 7 ? 'High Risk Detected' : score > 4 ? 'Moderate Risk' : 'Low Risk'}
        </p>

        <div className="mt-4 text-sm text-slate-500 text-center space-y-2">
          {warnings.length > 0 ? (
            warnings.map((warning, idx) => <p key={idx}>{warning}</p>)
          ) : (
            <p>No major safety concerns detected.</p>
          )}
        </div>
      </div>
    </div>
  );
}
