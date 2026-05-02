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
      safetyColor: "text-green-600",
    },
    {
      name: "Amoxicillin 500mg",
      purpose: "Fights bacterial infection",
      when: "After food, 3 times a day",
      safety: "Caution",
      safetyColor: "text-yellow-600",
    },
    {
      name: "Ibuprofen 400mg",
      purpose: "Relieves pain and fever",
      when: "After food if needed",
      safety: "High Risk",
      safetyColor: "text-red-600",
    },
    {
      name: "Aspirin 75mg",
      purpose: "Helps prevent blood clots",
      when: "After dinner",
      safety: "Caution",
      safetyColor: "text-yellow-600",
    },
  ];

  const schedule = [
    { time: "8:00 AM", medicine: "Metformin 500mg", status: "Taken", statusColor: "text-green-600" },
    { time: "1:00 PM", medicine: "Amoxicillin 500mg", status: "Due", statusColor: "text-orange-500" },
    { time: "8:00 PM", medicine: "Aspirin 75mg", status: "Due", statusColor: "text-orange-500" },
  ];

  const pharmacies = [
    { name: "HealthPlus Pharmacy", distance: "0.5 km away", hours: "Open 24 hours" },
    { name: "LifeCare Pharmacy", distance: "0.8 km away", hours: "Closes at 10 PM" },
    { name: "CarePoint Pharmacy", distance: "1.2 km away", hours: "Open 24 hours" },
  ];

  const quickActions = [
    { icon: "📦", label: "Order Medicine", sub: "Get medicines delivered" },
    { icon: "🩺", label: "Consult Doctor", sub: "Talk to a doctor online" },
    { icon: "⏰", label: "Set Reminder", sub: "Never miss your medication" },
    { icon: "📤", label: "Share Report", sub: "Share analysis with family or doctor" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-72 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 pb-4 border-b border-indigo-100">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
            ✨
          </div>
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Lumi
            </div>
            <div className="text-xs text-gray-500">AI Digital Pharmacist</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            "Home",
            "Scan Prescription",
            "My Medicines",
            "Drug Interactions",
            "Reminders",
            "Patient Profile",
            "AI Chat Assistant",
            "Settings",
          ].map((item) => {
            const icons = {
              Home: "🏠",
              "Scan Prescription": "📷",
              "My Medicines": "💊",
              "Drug Interactions": "⚠️",
              Reminders: "🔔",
              "Patient Profile": "👤",
              "AI Chat Assistant": "🤖",
              Settings: "⚙️",
            };
            return (
              <div
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  activeMenu === item
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl">{icons[item]}</span>
                <span className="text-sm">{item}</span>
              </div>
            );
          })}
        </nav>

        {/* Bot Card */}
        <div className="m-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-center">
          <div className="font-bold text-sm">Hi! I'm Lumi ✨</div>
          <div className="text-xs text-gray-500 mt-1">Your AI Pharmacist</div>
          <button
            onClick={() => alert("✨ Lumi: How can I help you today?")}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-semibold transition"
          >
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 ml-72 p-8">
        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Hello, Ali 🎉</h1>
            <p className="text-gray-500 mt-1">We're here to help you stay healthy.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white">
              <span className="px-4 py-2 text-sm border-r border-gray-200 cursor-pointer hover:bg-gray-50">
                🌐 English ▼
              </span>
              <span className="px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-gray-50">
                اردو
              </span>
            </div>
            <button
              onClick={() => alert("🎤 Voice input activated. Speak your prescription.")}
              className="bg-indigo-50 hover:bg-indigo-100 px-5 py-2 rounded-xl text-indigo-600 text-sm font-semibold flex items-center gap-2 transition"
            >
              🎤 Voice Input
            </button>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* ========== LEFT COLUMN ========== */}
          <div className="space-y-6">
            {/* Scan Prescription Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-2">Scan Prescription</h2>
              <p className="text-gray-500 text-sm mb-6">
                Upload or capture your prescription and get AI-powered analysis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => alert("Open camera")}
                  className="bg-gray-50 hover:bg-indigo-50 p-5 rounded-xl text-center transition border border-gray-100 hover:border-indigo-200"
                >
                  <div className="text-4xl mb-2">📷</div>
                  <div className="font-semibold text-sm">Scan via Camera</div>
                  <div className="text-xs text-gray-500 mt-1">Use camera to scan</div>
                </button>
                <button
                  onClick={() => alert("Upload image")}
                  className="bg-gray-50 hover:bg-indigo-50 p-5 rounded-xl text-center transition border border-gray-100 hover:border-indigo-200"
                >
                  <div className="text-4xl mb-2">📁</div>
                  <div className="font-semibold text-sm">Upload Image</div>
                  <div className="text-xs text-gray-500 mt-1">Upload prescription image</div>
                </button>
                <button
                  onClick={() => alert("Voice input")}
                  className="bg-gray-50 hover:bg-indigo-50 p-5 rounded-xl text-center transition border border-gray-100 hover:border-indigo-200"
                >
                  <div className="text-4xl mb-2">🎤</div>
                  <div className="font-semibold text-sm">Voice Input</div>
                  <div className="text-xs text-gray-500 mt-1">Speak prescription details</div>
                </button>
              </div>
            </div>

            {/* Risk Score + AI Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
              {/* Risk Score Card */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                  Your Prescription Risk Score
                </div>
                <div className="text-6xl font-black text-orange-500">7.5</div>
                <div className="text-sm text-orange-500 font-semibold mt-2">Moderate Risk</div>
              </div>

              {/* AI Summary Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-base mb-3">AI Summary (In Simple Words)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Your prescription has some important points to note. Some medicines may interact with each other.
                  Please follow the instructions carefully and consult your doctor if you feel unwell.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {/* Drug Interactions */}
                  <button
                    onClick={() => alert("2 interactions found")}
                    className="p-3 rounded-xl bg-red-50 border-l-4 border-red-500 text-left hover:bg-red-100 transition"
                  >
                    <div className="font-semibold text-sm text-red-700">Drug Interactions</div>
                    <div className="text-xs text-gray-600 mt-1">2 interactions found</div>
                    <div className="text-xs text-indigo-600 font-semibold mt-2">View details →</div>
                  </button>
                  {/* Dose Adjustment */}
                  <button
                    onClick={() => alert("1 medicine needs adjustment")}
                    className="p-3 rounded-xl bg-orange-50 border-l-4 border-orange-500 text-left hover:bg-orange-100 transition"
                  >
                    <div className="font-semibold text-sm text-orange-700">Dose Adjustment</div>
                    <div className="text-xs text-gray-600 mt-1">1 medicine may need adjustment</div>
                    <div className="text-xs text-indigo-600 font-semibold mt-2">View details →</div>
                  </button>
                  {/* Warnings */}
                  <button
                    onClick={() => alert("1 important warning")}
                    className="p-3 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-left hover:bg-yellow-100 transition"
                  >
                    <div className="font-semibold text-sm text-yellow-700">Warnings</div>
                    <div className="text-xs text-gray-600 mt-1">1 important warning</div>
                    <div className="text-xs text-indigo-600 font-semibold mt-2">View details →</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Your Medicines Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 pt-5 pb-2">
                <h3 className="font-bold text-lg">Your Medicines</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Medicine</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Purpose (In Simple Words)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        When to Take
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Safety</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicines.map((med, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-3 font-medium text-gray-800">{med.name}</td>
                        <td className="px-6 py-3 text-sm text-gray-600">{med.purpose}</td>
                        <td className="px-6 py-3 text-sm text-gray-600">{med.when}</td>
                        <td className={`px-6 py-3 font-semibold ${med.safetyColor}`}>{med.safety}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Today's Schedule</h3>
                <button onClick={() => alert("Full schedule")} className="text-indigo-600 text-sm font-semibold">
                  View all
                </button>
              </div>
              <div className="space-y-4">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-gray-800">{item.time}</div>
                      <div className="text-sm text-gray-500">{item.medicine}</div>
                    </div>
                    <span className={`font-semibold ${item.statusColor}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adherence Progress */}
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold mb-3">Adherence Progress</h3>
              <div className="text-6xl font-black text-green-500">85%</div>
              <p className="text-sm text-gray-500 mt-3">Great job! Keep it up 👏</p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => alert(action.label)}
                  className="bg-white border border-gray-200 rounded-xl p-3 text-left hover:border-indigo-300 hover:shadow-md transition flex items-center gap-3"
                >
                  <span className="text-3xl">{action.icon}</span>
                  <div>
                    <div className="font-semibold text-sm">{action.label}</div>
                    <div className="text-xs text-gray-500">{action.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Nearby Pharmacies */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Nearby Pharmacies</h3>
                <button onClick={() => alert("All pharmacies")} className="text-indigo-600 text-sm font-semibold">
                  View all
                </button>
              </div>
              <div className="space-y-4">
                {pharmacies.map((pharmacy, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-gray-800">{pharmacy.name}</div>
                      <div className="text-xs text-gray-500">
                        {pharmacy.distance} • {pharmacy.hours}
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Calling ${pharmacy.name}`)}
                      className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full transition"
                    >
                      📞
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Card (extra, from sidebar but can also appear here) */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 text-center">
              <div className="text-4xl mb-2">🤖</div>
              <div className="font-bold">Your AI Pharmacist</div>
              <div className="text-xs text-gray-500 mt-1">How can I help you today?</div>
              <button
                onClick={() => alert("✨ Lumi: How can I help?")}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-semibold"
              >
                Talk to Lumi
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
