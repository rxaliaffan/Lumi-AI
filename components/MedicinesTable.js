export default function MedicinesTable({ medicines }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-8">
      <h3 className="text-2xl font-semibold mb-6">Detected Medicines</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-slate-500">
              <th className="pb-3">Medicine</th>
              <th className="pb-3">Dosage</th>
              <th className="pb-3">Purpose</th>
              <th className="pb-3">Safety</th>
            </tr>
          </thead>
          <tbody>
            {medicines.length > 0 ? (
              medicines.map((med, idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="py-4 font-medium">{med.name}</td>
                  <td>{med.dosage}</td>
                  <td>{med.purpose || 'Pending AI analysis'}</td>
                  <td>
                    <span className="text-sm px-3 py-1 rounded-full bg-slate-100">
                      {med.safety || 'Analyzing'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-8 text-center text-slate-400">
                  No medicines analyzed yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
