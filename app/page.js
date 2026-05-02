"use client";

import { useState } from "react";

export default function Page() {
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    "Home",
    "Scan Prescription",
    "My Medicines",
    "Drug Interactions",
    "Reminders",
    "Patient Profile",
    "AI Chat Assistant",
    "Settings",
  ];

  return (
    <main className="flex min-h-screen">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[270px] border-r border-[#e9eaf3] bg-white p-5 flex flex-col">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg shadow-md">
            ✨
          </div>
          <div>
            <div className="text-[22px] font-semibold tracking-tight">Lumi</div>
            <div className="text-[13px] text-gray-500">AI Digital Pharmacist</div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => setActiveNav(item)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] cursor-pointer transition-all duration-200 ${
                activeNav === item
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <NavIcon name={item} />
              <span className={activeNav === item ? "font-medium" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* BOT CARD */}
        <div className="mt-auto bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-2xl shadow-sm">
          <div className="text-[15px] font-semibold">Hi! I'm Lumi ✨</div>
          <p className="text-[13px] text-gray-600 mt-1">Your AI Pharmacist</p>
          <button
            onClick={() => alert("✨ Hello! I'm Lumi, your AI Digital Pharmacist. How can I help you today?")}
            className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl text-[14px] font-medium transition-all duration-200 active:scale-95"
          >
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 p-6 overflow-auto">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-[32px] font-bold tracking-tight">Hello, Ali 🎉</h1>
            <p className="text-[15px] text-gray-500 mt-1">
              We're here to help you stay healthy.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* LANGUAGE SWITCHER */}
            <div className="flex border border-[#e9eaf3] rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="flex items-center gap-2 px-4 py-2 text-[14px] border-r border-[#e9eaf3] cursor-pointer hover:bg-gray-50 transition">
                <GlobeIcon />
                <span>English</span>
                <ChevronIcon />
              </div>
              <div className="px-4 py-2 text-[14px] font-medium cursor-pointer hover:bg-gray-50 transition">
                اردو
              </div>
            </div>

            {/* VOICE BUTTON */}
            <button
              onClick={() => alert("🎤 Voice input activated. Please speak your prescription details.")}
              className="bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl text-indigo-600 text-[14px] font-medium transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <MicIcon />
              <span>Voice Input</span>
            </button>

            {/* AVATAR */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-semibold shadow-md">
              A
            </div>
          </div>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* SCAN PRESCRIPTION CARD */}
            <div className="lumi-card p-6">
              <h2 className="text-[22px] font-bold mb-1">Scan Prescription</h2>
              <p className="text-[14px] text-gray-500">
                Upload or capture your prescription and get AI-powered analysis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <button
                  onClick={() => alert("📸 Camera scanner would open here")}
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl text-center transition-all duration-200 active:scale-95"
                >
                  <CameraIcon />
                  <div className="text-[13px] font-medium mt-2">Scan via Camera</div>
                </button>
                <button
                  onClick={() => alert("📁 Upload image dialog would open")}
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl text-center transition-all duration-200 active:scale-95"
                >
                  <UploadIcon />
                  <div className="text-[13px] font-medium mt-2">Upload Image</div>
                </button>
                <button
                  onClick={() => alert("🎤 Voice input activated")}
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl text-center transition-all duration-200 active:scale-95"
                >
                  <MicIcon />
                  <div className="text-[13px] font-medium mt-2">Voice Input</div>
                </button>
              </div>
            </div>

            {/* RISK + SUMMARY ROW */}
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
              {/* RISK SCORE */}
              <div className="lumi-card p-6 text-center hover:shadow-lg transition-all">
                <div className="text-[14px] uppercase tracking-wide text-gray-500 mb-3">
                  Prescription Risk Score
                </div>
                <div className="text-[48px] font-black text-orange-500">7.5</div>
                <div className="text-[14px] text-orange-500 font-medium">Moderate Risk</div>
              </div>

              {/* AI SUMMARY */}
              <div className="lumi-card p-6">
                <h3 className="text-[16px] font-bold mb-2">
                  AI Summary (In Simple Words)
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Your prescription has some important points to note. Some medicines may interact with each
                  other. Please follow the instructions carefully and consult your doctor if you feel unwell.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <button
                    onClick={() => alert("2 drug interactions found")}
                    className="p-3 rounded-xl border-l-4 border-red-500 bg-red-50 cursor-pointer hover:bg-red-100 transition text-left"
                  >
                    <div className="text-sm font-semibold text-red-700">Drug Interactions</div>
                    <div className="text-xs text-red-600 mt-1">2 found</div>
                  </button>
                  <button
                    onClick={() => alert("1 medicine may need dose adjustment")}
                    className="p-3 rounded-xl border-l-4 border-orange-500 bg-orange-50 cursor-pointer hover:bg-orange-100 transition text-left"
                  >
                    <div className="text-sm font-semibold text-orange-700">Dose Adjustment</div>
                    <div className="text-xs text-orange-600 mt-1">1 medicine</div>
                  </button>
                  <button
                    onClick={() => alert("1 important warning to review")}
                    className="p-3 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 cursor-pointer hover:bg-yellow-100 transition text-left"
                  >
                    <div className="text-sm font-semibold text-yellow-700">Warnings</div>
                    <div className="text-xs text-yellow-600 mt-1">1 important</div>
                  </button>
                </div>
              </div>
            </div>

            {/* YOUR MEDICINES TABLE */}
            <div className="lumi-card overflow-hidden">
              <div className="p-5 pb-0">
                <h3 className="font-bold text-[18px]">Your Medicines</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-[#e9eaf3]">
                    <tr>
                      <th className="p-5 text-left font-semibold text-gray-500 text-xs uppercase">
                        Medicine
                      </th>
                      <th className="p-5 text-left font-semibold text-gray-500 text-xs uppercase">
                        Purpose
                      </th>
                      <th className="p-5 text-left font-semibold text-gray-500 text-xs uppercase">When</th>
                      <th className="p-5 text-left font-semibold text-gray-500 text-xs uppercase">Safety</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e9eaf3] hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Metformin 500mg</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-green-600 font-medium">Safe</td>
                    </tr>
                    <tr className="border-b border-[#e9eaf3] hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Amoxicillin 500mg</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-green-600 font-medium">Safe</td>
                    </tr>
                    <tr className="border-b border-[#e9eaf3] hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Aspirin 75mg</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-green-600 font-medium">Safe</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Ibuprofen 400mg</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-gray-500">—</td>
                      <td className="p-5 text-yellow-600 font-medium">Caution</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom action links */}
              <div className="p-4 border-t border-[#e9eaf3] flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <AlertIcon />
                  <span>
                    <strong>2 interactions</strong> found
                  </span>
                  <button
                    onClick={() => alert("Details of drug interactions")}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View details →
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <ActivityIcon />
                  <span>
                    <strong>1 medicine</strong> may need adjustment
                  </span>
                  <button
                    onClick={() => alert("Dose adjustment details")}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View details →
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <AlertCircleIcon />
                  <span>
                    <strong>1 important</strong> warning
                  </span>
                  <button
                    onClick={() => alert("Warning details")}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* TODAY'S SCHEDULE */}
            <div className="lumi-card p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[16px]">Today's Schedule</h3>
                <button
                  onClick={() => alert("View full schedule")}
                  className="text-indigo-600 text-sm font-medium hover:text-indigo-700"
                >
                  View all
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2 text-sm">
                    <SunIcon />
                    <span className="text-gray-700">8:00 AM</span>
                  </div>
                  <span className="font-medium text-gray-800">Metformin</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#e9eaf3]">
                  <div className="flex items-center gap-2 text-sm">
                    <SunIcon />
                    <span className="text-gray-700">1:00 PM</span>
                  </div>
                  <span className="font-medium text-gray-800">Amoxicillin</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#e9eaf3]">
                  <div className="flex items-center gap-2 text-sm">
                    <MoonIcon />
                    <span className="text-gray-700">8:00 PM</span>
                  </div>
                  <span className="font-medium text-gray-800">Aspirin</span>
                </div>
              </div>
            </div>

            {/* ADHERENCE PROGRESS */}
            <div className="lumi-card p-5 text-center">
              <h3 className="font-bold text-[16px] mb-3">Adherence Progress</h3>
              <div className="text-[48px] font-black text-green-500">85%</div>
              <p className="text-sm text-gray-600 mt-2">Great job! Keep it up 🎉</p>
            </div>

            {/* NEARBY PHARMACIES */}
            <div className="lumi-card p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[16px]">Nearby Pharmacies</h3>
                <button
                  onClick={() => alert("View all pharmacies")}
                  className="text-indigo-600 text-sm font-medium hover:text-indigo-700"
                >
                  View all
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <div>
                    <div className="font-medium text-gray-800">HealthPlus Pharmacy</div>
                    <div className="text-xs text-gray-500 mt-0.5">0.5 km away • Open 24 hours</div>
                  </div>
                  <PhoneIcon />
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#e9eaf3]">
                  <div>
                    <div className="font-medium text-gray-800">LifeCare Pharmacy</div>
                    <div className="text-xs text-gray-500 mt-0.5">0.8 km away • Closes at 10 PM</div>
                  </div>
                  <PhoneIcon />
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#e9eaf3]">
                  <div>
                    <div className="font-medium text-gray-800">CarePoint Pharmacy</div>
                    <div className="text-xs text-gray-500 mt-0.5">1.2 km away • Open 24 hours</div>
                  </div>
                  <PhoneIcon />
                </div>
              </div>
            </div>

            {/* QUICK ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => alert("Order medicine delivery")}
                className="bg-white border border-[#e9eaf3] rounded-xl p-3 text-center hover:shadow-md hover:border-indigo-200 transition-all active:scale-95"
              >
                <PackageIcon />
                <div className="text-xs font-medium mt-1">Order Medicine</div>
                <div className="text-xs text-gray-500 mt-0.5">Get delivered</div>
              </button>
              <button
                onClick={() => alert("Consult doctor online")}
                className="bg-white border border-[#e9eaf3] rounded-xl p-3 text-center hover:shadow-md hover:border-indigo-200 transition-all active:scale-95"
              >
                <StethoscopeIcon />
                <div className="text-xs font-medium mt-1">Consult Doctor</div>
                <div className="text-xs text-gray-500 mt-0.5">Talk online</div>
              </button>
              <button
                onClick={() => alert("Set medication reminder")}
                className="bg-white border border-[#e9eaf3] rounded-xl p-3 text-center hover:shadow-md hover:border-indigo-200 transition-all active:scale-95"
              >
                <BellRingIcon />
                <div className="text-xs font-medium mt-1">Set Reminder</div>
                <div className="text-xs text-gray-500 mt-0.5">Never miss</div>
              </button>
              <button
                onClick={() => alert("Share report with family/doctor")}
                className="bg-white border border-[#e9eaf3] rounded-xl p-3 text-center hover:shadow-md hover:border-indigo-200 transition-all active:scale-95"
              >
                <ShareIcon />
                <div className="text-xs font-medium mt-1">Share Report</div>
                <div className="text-xs text-gray-500 mt-0.5">With family/doctor</div>
              </button>
            </div>

            {/* AI ASSISTANT MINI CARD */}
            <div className="lumi-card p-5 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 mb-3">
                <BotIcon />
                <div>
                  <div className="font-bold text-[15px]">Your AI Pharmacist</div>
                  <div className="text-xs text-gray-600">How can I help you today?</div>
                </div>
              </div>
              <button
                onClick={() => alert("✨ Hello! I'm Lumi, your AI Digital Pharmacist. How can I help you today?")}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl text-[14px] font-medium transition-all duration-200 active:scale-95"
              >
                Talk to Lumi
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ================= ICON COMPONENTS =================
function NavIcon({ name }) {
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
  return <span className="text-[18px]">{icons[name] || "•"}</span>;
}

function CameraIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function AlertCircleIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SunIcon() {
  return <span className="text-yellow-500 text-sm">☀️</span>;
}

function MoonIcon() {
  return <span className="text-indigo-400 text-sm">🌙</span>;
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400 cursor-pointer hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-2.586a2 2 0 01-1.414-.586l-1.414-1.414a2 2 0 00-1.414-.586H9.414a2 2 0 00-1.414.586l-1.414 1.414A2 2 0 005.586 17H3a2 2 0 01-2-2v-2a2 2 0 012-2h16z" />
    </svg>
  );
}

function BellRingIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="w-5 h-5 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}
