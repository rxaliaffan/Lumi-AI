export default function MedicinesTable() {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="font-semibold mb-4">Your Medicines</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500">
            <th className="text-left">Medicine</th>
            <th>Purpose</th>
            <th>Safety</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Metformin 500mg</td>
            <td>Blood sugar</td>
            <td className="text-green-500">Safe</td>
          </tr>
          <tr>
            <td>Ibuprofen</td>
            <td>Pain relief</td>
            <td className="text-red-500">High Risk</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
