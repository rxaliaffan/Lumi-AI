export default function RiskScore() {
  return (
    <div className="card h-full">
      <h3 className="text-xl font-semibold mb-6">
        Prescription Safety Score
      </h3>

      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full border-[10px] border-warning flex items-center justify-center mb-4">
          <span className="text-3xl font-bold text-warning">7.5</span>
        </div>

        <p className="text-warning font-semibold">
          Moderate Risk Detected
        </p>

        <p className="text-sm text-slate-500 mt-2 text-center">
          Possible interaction between Metformin and Ciprofloxacin.
        </p>
      </div>
    </div>
  );
}
