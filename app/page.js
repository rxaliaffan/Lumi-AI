import { PieChart, Pie, Cell } from "recharts";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f6f7fb] font-sans">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-purple-600 mb-8">Lumi</h1>

          <div className="space-y-3 text-sm">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">Home</div>
            <div className="p-3 text-gray-500">Scan Prescription</div>
            <div className="p-3 text-gray-500">My Medicines</div>
            <div className="p-3 text-gray-500">Interactions</div>
            <div className="p-3 text-gray-500">Reminders</div>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl text-center">
          <p className="text-sm mb-2">Hi! I'm Lumi 🤖</p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl text-sm">
            Talk to Lumi
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6 space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Hello, Ali 👋</h1>
            <p className="text-gray-500 text-sm">Stay on top of your medications</p>
          </div>

          <div className="flex gap-2">
            <button className="border px-4 py-2 rounded-xl text-sm">EN</button>
            <button className="bg-purple-100 px-4 py-2 rounded-xl text-sm">اردو</button>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl text-sm">
              Voice
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-8 space-y-6">

            {/* SCAN CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="font-semibold mb-4">Scan Prescription</h2>

              <div className="grid grid-cols-3 gap-4">
                <button className="border p-4 rounded-xl">📷 Camera</button>
                <button className="border p-4 rounded-xl">⬆ Upload</button>
                <button className="border p-4 rounded-xl">🎤 Voice</button>
              </div>
            </div>

            {/* RISK SCORE */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="font-semibold mb-4">Prescription Risk</h2>

              <div className="flex items-center justify-between">

                <PieChart width={140} height={140}>
                  <Pie
                    data={[{ value: 75 }]}
                    innerRadius={45}
                    outerRadius={65}
                    dataKey="value"
                  >
                    <Cell fill="#f97316" />
                  </Pie>
                </PieChart>

                <div>
                  <div className="text-4xl font-bold text-orange-500">7.5</div>
                  <p className="text-gray-500 text-sm">Moderate Risk</p>
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="font-semibold mb-4">Medicines</h2>

              <table className="w-full text-sm">
                <thead className="text-gray-400">
                  <tr>
                    <th className="text-left">Medicine</th>
                    <th>Use</th>
                    <th>Safety</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr>
                    <td>Metformin</td>
                    <td>Diabetes</td>
                    <td className="text-green-500">Safe</td>
                  </tr>
                  <tr>
                    <td>Ibuprofen</td>
                    <td>Pain</td>
                    <td className="text-red-500">Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">

            <div className="bg-white rounded-2xl p-5 shadow-sm border">
              <h3 className="font-semibold mb-3">Schedule</h3>
              <p className="text-sm">Metformin - 8AM</p>
              <p className="text-sm">Aspirin - 8PM</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border text-center">
              <h3 className="font-semibold mb-2">Adherence</h3>
              <div className="text-3xl font-bold text-green-500">85%</div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border">
              <h3 className="font-semibold mb-3">Nearby Pharmacy</h3>
              <p className="text-sm">HealthPlus</p>
              <p className="text-sm">CarePoint</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
