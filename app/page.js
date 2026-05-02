"use client";

import { useState } from "react";

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const medicines = [
    {
      name: "Metformin 500mg",
      purpose: "Helps control blood sugar",
      when: "After breakfast",
      safety: "Safe",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Amoxicillin 500mg",
      purpose: "Fights bacterial infection",
      when: "After food, 3 times a day",
      safety: "Caution",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Ibuprofen 400mg",
      purpose: "Relieves pain and fever",
      when: "After food if needed",
      safety: "High Risk",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Aspirin 75mg",
      purpose: "Helps prevent blood clots",
      when: "After dinner",
      safety: "Caution",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl">✨</div>
            <div>
              <h1 className="text-xl font-bold">Lumi</h1>
              <p className="text-xs text-gray-500">AI Digital Pharmacist</p>
            </div>
          </div>

          <nav className="space-y-2">
            {["Home","Scan Prescription","My Medicines","Drug Interactions","Reminders","Patient Profile","AI Chat Assistant","Settings"].map(item => (
              <div
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`px-4 py-3 rounded-xl cursor-pointer text-sm ${
                  activeMenu === item
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>

        {/* BOT CARD */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-2xl text-center">
          <p className="font-semibold text-sm">Hi! I'm Lumi ✨</p>
          <p className="text-xs text-gray-500">Your AI Pharmacist</p>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl text-sm">
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Hello, Ali 👋</h2>
            <p className="text-gray-500">We're here to help you stay healthy.</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-gray-100 rounded-xl text-sm">English</button>
            <button className="px-4 py-2 bg-gray-100 rounded-xl text-sm">اردو</button>
            <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl text-sm">🎤 Voice Input</button>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">

          {/* LEFT */}
          <div className="space-y-6">

            {/* SCAN CARD */}
            <div className="bg-white rounded-2xl p-6 border shadow-sm">
              <div className="flex items-center gap-6">

                {/* LEFT ICON */}
                <div className="w-40 h-40 bg-indigo-50 rounded-2xl flex items-center justify-center text-5xl">
                  📄
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Scan Prescription</h3>
                  <p className="text-gray-500 mb-6 text-sm">
                    Upload or capture your prescription and get AI-powered analysis.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {["📷 Scan","📤 Upload","🎤 Voice"].map((item,i)=>(
                      <button key={i} className="bg-gray-50 p-4 rounded-xl text-center border hover:bg-indigo-50">
                        <div className="text-2xl">{item.split(" ")[0]}</div>
                        <div className="text-sm mt-2 font-medium">{item.split(" ")[1]}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* RISK + SUMMARY */}
            <div className="grid grid-cols-[260px_1fr] gap-6">

              {/* RISK */}
              <div className="bg-white rounded-2xl p-6 text-center border">
                <p className="text-xs text-gray-500 mb-3">Prescription Risk Score</p>
                <div className="text-5xl font-bold text-orange-500">7.5</div>
                <p className="text-orange-500 mt-2 text-sm font-semibold">Moderate Risk</p>
              </div>

              {/* SUMMARY */}
              <div className="bg-white rounded-2xl p-6 border">
                <h4 className="font-semibold mb-3">AI Summary</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Some medicines may interact. Follow instructions carefully.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <p className="text-red-600 text-sm font-semibold">Drug Interactions</p>
                    <p className="text-xs">2 found</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-xl">
                    <p className="text-orange-600 text-sm font-semibold">Dose Adjustment</p>
                    <p className="text-xs">1 needed</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-xl">
                    <p className="text-yellow-600 text-sm font-semibold">Warnings</p>
                    <p className="text-xs">1 important</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl border overflow-hidden">
              <div className="p-5">
                <h3 className="font-semibold text-lg">Your Medicines</h3>
              </div>

              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="p-4 text-left">Medicine</th>
                    <th className="p-4 text-left">Purpose</th>
                    <th className="p-4 text-left">When</th>
                    <th className="p-4 text-left">Safety</th>
                  </tr>
                </thead>

                <tbody>
                  {medicines.map((m,i)=>(
                    <tr key={i} className="border-t">
                      <td className="p-4">{m.name}</td>
                      <td>{m.purpose}</td>
                      <td>{m.when}</td>
                      <td>
                        <span className={`px-3 py-1 rounded-full text-xs ${m.color}`}>
                          {m.safety}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-4 gap-4">
              {["Order Medicine","Consult Doctor","Set Reminder","Share Report"].map((t,i)=>(
                <button key={i} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl text-sm">
                  {t}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* SCHEDULE */}
            <div className="bg-white rounded-2xl p-5 border">
              <h3 className="font-semibold mb-4">Today's Schedule</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>8:00 AM</span>
                  <span className="text-green-600">Taken</span>
                </div>
                <div className="flex justify-between">
                  <span>1:00 PM</span>
                  <span className="text-orange-500">Due</span>
                </div>
              </div>
            </div>

            {/* ADHERENCE */}
            <div className="bg-white rounded-2xl p-5 text-center border">
              <h3 className="font-semibold mb-3">Adherence Progress</h3>
              <div className="text-5xl font-bold text-green-500">85%</div>
              <p className="text-sm text-gray-500 mt-2">Great job!</p>
            </div>

            {/* PHARMACY */}
            <div className="bg-white rounded-2xl p-5 border">
              <h3 className="font-semibold mb-4">Nearby Pharmacies</h3>
              <div className="space-y-3 text-sm">
                <div>HealthPlus Pharmacy</div>
                <div>LifeCare Pharmacy</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
