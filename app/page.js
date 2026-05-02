"use client";

import { useState } from "react";

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const navItems = [
    { name: "Home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" },
    { name: "Scan Prescription", icon: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { name: "My Medicines", icon: "M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z M8.5 8.5l7 7" },
    { name: "Drug Interactions", icon: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z M12 9v4 M12 17h.01" },
    { name: "Reminders", icon: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0" },
    { name: "Patient Profile", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { name: "AI Chat Assistant", icon: "M3 11h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z M12 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M12 9v4 M8 16h.01 M16 16h.01" },
    { name: "Settings", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" },
  ];

  const medicines = [
    { name: "Metformin 500mg", purpose: "Helps control blood sugar", when: "After breakfast", safety: "Safe", pillColor: "#3b82f6", badgeBg: "bg-green-50", badgeText: "text-green-700", badgeBorder: "border-green-200" },
    { name: "Amoxicillin 500mg", purpose: "Fights bacterial infection", when: "After food, 3 times a day", safety: "Caution", pillColor: "#ef4444", badgeBg: "bg-orange-50", badgeText: "text-orange-700", badgeBorder: "border-orange-200" },
    { name: "Ibuprofen 400mg", purpose: "Relieves pain and fever", when: "After food if needed", safety: "High Risk", pillColor: "#3b82f6", badgeBg: "bg-red-50", badgeText: "text-red-700", badgeBorder: "border-red-200" },
    { name: "Aspirin 75mg", purpose: "Helps prevent blood clots", when: "After dinner", safety: "Caution", pillColor: "#8b5cf6", badgeBg: "bg-orange-50", badgeText: "text-orange-700", badgeBorder: "border-orange-200" },
  ];

  const schedule = [
    { time: "8:00 AM", medicine: "Metformin 500mg", status: "Taken", isTaken: true, iconColor: "#f59e0b" },
    { time: "1:00 PM", medicine: "Amoxicillin 500mg", status: "Due", isTaken: false, iconColor: "#f59e0b" },
    { time: "8:00 PM", medicine: "Aspirin 75mg", status: "Due", isTaken: false, iconColor: "#6366f1" },
  ];

  const pharmacies = [
    { name: "HealthPlus Pharmacy", distance: "0.5 km away", hours: "Open 24 hours", isOpen: true, iconColor: "#22c55e", bgColor: "bg-green-50" },
    { name: "LifeCare Pharmacy", distance: "0.8 km away", hours: "Closes at 10 PM", isOpen: false, iconColor: "#3b82f6", bgColor: "bg-blue-50" },
    { name: "CarePoint Pharmacy", distance: "1.2 km away", hours: "Open 24 hours", isOpen: true, iconColor: "#a855f7", bgColor: "bg-purple-50" },
  ];

  const NavIcon = ({ d, active }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#4f46e5" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {d.split(" M").map((path, i) => i === 0 ? <path key={i} d={path} /> : <path key={i} d={"M" + path} />)}
    </svg>
  );

  const RiskCircle = () => {
    const size = 140, stroke = 10, radius = (size - stroke) / 2, circ = 2 * Math.PI * radius, offset = circ - (7.5 / 10) * circ;
    return (
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle cx={size/2} cy={size/2} r={radius} stroke="#f3f4f6" strokeWidth={stroke} fill="none"/>
          <circle cx={size/2} cy={size/2} r={radius} stroke="#f97316" strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-gray-900 tracking-tighter">7.5<span className="text-lg text-gray-400 font-medium ml-0.5">/10</span></span>
        </div>
      </div>
    );
  };

  const AdherenceCircle = () => {
    const size = 140, stroke = 10, radius = (size - stroke) / 2, circ = 2 * Math.PI * radius, offset = circ - (85 / 100) * circ;
    return (
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle cx={size/2} cy={size/2} r={radius} stroke="#f3f4f6" strokeWidth={stroke} fill="none"/>
          <circle cx={size/2} cy={size/2} r={radius} stroke="#22c55e" strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-black text-gray-900">85%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r border-gray-200 fixed h-screen overflow-y-auto flex flex-col z-20">
        <div className="flex items-center gap-3 px-6 pt-6 pb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
              <path d="M5 20l1-3 3-1-3-1-1-3-1 3-3 1 3 1z"/>
            </svg>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 tracking-tight">Lumi</div>
            <div className="text-[11px] text-gray-500">AI Digital Pharmacist</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-0.5">
          {navItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <div key={item.name} onClick={() => setActiveMenu(item.name)} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all ${isActive ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
                <span className="flex items-center justify-center w-5"><NavIcon d={item.icon} active={isActive} /></span>
                <span className="text-sm">{item.name}</span>
              </div>
            );
          })}
        </nav>

        <div className="mx-4 mb-4 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-center border border-indigo-100">
          <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-indigo-100 overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="55" r="30" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2"/>
              <circle cx="50" cy="45" r="22" fill="#4f46e5"/>
              <circle cx="42" cy="42" r="5" fill="white"/><circle cx="42" cy="42" r="2" fill="#1e1b4b"/>
              <circle cx="58" cy="42" r="5" fill="white"/><circle cx="58" cy="42" r="2" fill="#1e1b4b"/>
              <path d="M45 52 Q50 57 55 52" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <rect x="35" y="20" width="8" height="15" rx="4" fill="#4f46e5"/>
              <rect x="57" y="20" width="8" height="15" rx="4" fill="#4f46e5"/>
              <circle cx="39" cy="18" r="6" fill="#a5b4fc"/>
              <circle cx="61" cy="18" r="6" fill="#a5b4fc"/>
              <rect x="30" y="75" width="40" height="12" rx="6" fill="#c7d2fe"/>
              <circle cx="50" cy="68" r="4" fill="#fbbf24"/>
            </svg>
          </div>
          <div className="font-bold text-sm text-gray-900">Hi! I'm Lumi ✨</div>
          <div className="text-xs text-gray-500 mt-0.5">Your AI Pharmacist</div>
          <div className="text-[11px] text-gray-400 mt-0.5">How can I help you today?</div>
          <button onClick={() => alert("Lumi")} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 ml-[280px] p-8 min-w-0">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[28px] font-bold text-gray-900 flex items-center gap-2">Hello, Ali <span>👋</span></h1>
            <p className="text-gray-500 mt-1 text-sm">We're here to help you stay healthy.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <span className="px-3 py-2 text-sm border-r border-gray-200 cursor-pointer hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                English <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              <span className="px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-gray-50 text-gray-700">اردو</span>
            </div>
            <button onClick={() => alert("Voice")} className="bg-white border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 px-4 py-2 rounded-xl text-gray-700 text-sm font-medium flex items-center gap-2 transition shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              Voice Input
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Ali" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'}/>
              <span className="absolute text-sm">A</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Scan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-stretch gap-6">
              <div className="hidden sm:flex items-center justify-center w-52 bg-indigo-50/60 rounded-2xl relative flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-32 bg-white rounded-xl shadow-lg border-2 border-indigo-200 flex flex-col items-center pt-5 relative">
                    <div className="absolute -top-3 w-16 h-4 bg-indigo-300 rounded-full"></div>
                    <div className="text-indigo-600 font-black text-3xl mt-1">Rx</div>
                    <div className="mt-3 space-y-1.5 w-16">
                      <div className="h-1 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-1 bg-gray-200 rounded-full w-5/6"></div>
                      <div className="h-1 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-1 bg-gray-200 rounded-full w-4/6"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </div>
                  <div className="absolute -bottom-2 -left-6 w-10 h-10">
                    <svg viewBox="0 0 40 40" fill="none"><path d="M20 35C20 35 5 25 5 15C5 8 12 5 20 5C28 5 35 8 35 15C35 25 20 35 20 35Z" fill="#86efac" opacity="0.6"/><path d="M20 35V5" stroke="#22c55e" strokeWidth="1.5"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Scan Prescription</h2>
                <p className="text-gray-500 text-sm mb-5">Upload or capture your prescription and get AI-powered analysis.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Scan via Camera", sub: "Use camera to scan", iconBg: "bg-indigo-100", iconColor: "#4f46e5", hoverBg: "group-hover:bg-indigo-200", path: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                    { label: "Upload Image", sub: "Upload prescription image", iconBg: "bg-green-100", iconColor: "#16a34a", hoverBg: "group-hover:bg-green-200", path: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12" },
                    { label: "Voice Input", sub: "Speak prescription details", iconBg: "bg-blue-100", iconColor: "#2563eb", hoverBg: "group-hover:bg-blue-200", path: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8" }
                  ].map((btn) => (
                    <button key={btn.label} onClick={() => alert(btn.label)} className="bg-gray-50 hover:bg-indigo-50 p-4 rounded-xl text-center transition border border-gray-100 hover:border-indigo-200 group">
                      <div className={`w-10 h-10 mx-auto ${btn.iconBg} rounded-full flex items-center justify-center mb-2 ${btn.hoverBg} transition`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={btn.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {btn.path.split(" M").map((p, i) => i === 0 ? <path key={i} d={p} /> : <path key={i} d={"M"+p} />)}
                        </svg>
                      </div>
                      <div className="font-semibold text-sm text-gray-800">{btn.label}</div>
                      <div className="text-[11px] text-gray-500 mt-1">{btn.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk + Summary */}
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-4 font-bold">Prescription Risk Score</div>
                <RiskCircle />
                <div className="text-sm text-orange-500 font-bold mt-3">Moderate Risk</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2 text-gray-900"><span className="text-indigo-500 text-lg">✨</span> AI Summary (In Simple Words)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">Your prescription has some important points to note. Some medicines may interact with each other. Please follow the instructions carefully and consult your doctor if you feel unwell.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Drug Interactions", sub: "2 interactions found", color: "red", bg: "bg-red-50", border: "border-red-100", text: "text-red-700", iconBg: "bg-red-100", iconColor: "#dc2626" },
                    { title: "Dose Adjustment", sub: "1 medicine may need adjustment", color: "orange", bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", iconBg: "bg-orange-100", iconColor: "#ea580c" },
                    { title: "Warnings", sub: "1 important warning", color: "yellow", bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-700", iconBg: "bg-yellow-100", iconColor: "#ca8a04" }
                  ].map((card) => (
                    <button key={card.title} onClick={() => alert(card.title)} className={`p-4 rounded-xl ${card.bg} border ${card.border} text-left hover:brightness-95 transition group`}>
                      <div className={`w-8 h-8 ${card.iconBg} rounded-lg flex items-center justify-center mb-2`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={card.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      </div>
                      <div className={`font-bold text-sm ${card.text}`}>{card.title}</div>
                      <div className="text-xs text-gray-600 mt-1 leading-snug">{card.sub}</div>
                      <div className="text-xs text-indigo-600 font-bold mt-2 group-hover:underline">View details →</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Medicines Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 pt-5 pb-3"><h3 className="font-bold text-lg text-gray-900">Your Medicines</h3></div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead><tr className="border-t border-b border-gray-100">
                    <th className="px-6 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Medicine</th>
                    <th className="px-6 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Purpose (In Simple Words)</th>
                    <th className="px-6 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">When to Take</th>
                    <th className="px-6 py-3 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">Safety</th>
                  </tr></thead>
                  <tbody className="divide-y divide-gray-50">
                    {medicines.map((med, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition">
                        <td className="px-6 py-4"><div className="flex items-center gap-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={med.pillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg>
                          <span className="font-semibold text-gray-900 text-sm">{med.name}</span>
                        </div></td>
                        <td className="px-6 py-4 text-sm text-gray-600">{med.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{med.when}</td>
                        <td className="px-6 py-4"><span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${med.badgeBg} ${med.badgeText} ${med.badgeBorder}`}>
                          {med.safety === "Safe" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                          {(med.safety === "Caution" || med.safety === "High Risk") && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={med.safety === "High Risk" ? "#b91c1c" : "#c2410c"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                          {med.safety}
                        </span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>Take medicines exactly as prescribed. Do not stop or change the dose without doctor advice.</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Order Medicine", sub: "Get medicines delivered", bg: "bg-indigo-500", hover: "hover:bg-indigo-600", icon: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6 M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" },
                { label: "Consult Doctor", sub: "Talk to a doctor online", bg: "bg-blue-500", hover: "hover:bg-blue-600", icon: "M4.8 2.3A.31.31 0 0 0 4 2.53v9.24a4 4 0 0 0 4 4h.4a4 4 0 0 0 4-4V2.53a.31.31 0 0 0-.8-.23 6 6 0 0 1-2.8.7 6 6 0 0 1-2.8-.7z M8 15.8V17a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1.2 M16 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" },
                { label: "Set Reminder", sub: "Never miss your medication", bg: "bg-green-500", hover: "hover:bg-green-600", icon: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0" },
                { label: "Share Report", sub: "Share analysis with family or doctor", bg: "bg-rose-500", hover: "hover:bg-rose-600", icon: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v15" }
              ].map((action) => (
                <button key={action.label} onClick={() => alert(action.label)} className={`${action.bg} ${action.hover} text-white p-4 rounded-xl text-left transition flex items-center gap-3 shadow-sm`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {action.icon.split(" M").map((p, i) => i === 0 ? <path key={i} d={p} /> : <path key={i} d={"M"+p} />)}
                  </svg>
                  <div>
                    <div className="font-bold text-sm">{action.label}</div>
                    <div className="text-xs text-white/80 mt-0.5 leading-tight">{action.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-[15px]">Today's Schedule</h3>
                <button onClick={() => alert("Schedule")} className="text-indigo-600 text-sm font-bold hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {item.iconColor === "#f59e0b" ? <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></> : <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>}
                        </svg>
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{item.time}</div>
                        <div className="text-sm text-gray-500">{item.medicine}</div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${item.isTaken ? "bg-green-50 text-green-700" : "bg-indigo-50 text-indigo-700"}`}>
                      {item.isTaken ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adherence */}
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-[15px] mb-4">Adherence Progress</h3>
              <div className="flex justify-center"><AdherenceCircle /></div>
              <p className="text-sm text-gray-500 mt-3 font-medium">Great job! Keep it up 🎉</p>
            </div>

            {/* Pharmacies */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-[15px]">Nearby Pharmacies</h3>
                <button onClick={() => alert("Pharmacies")} className="text-indigo-600 text-sm font-bold hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {pharmacies.map((pharmacy, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${pharmacy.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={pharmacy.iconColor} strokeWidth="2.5" strokeLinecap="round"><path d="M12 2v20M2 12h20"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{pharmacy.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{pharmacy.distance} • <span className={pharmacy.isOpen ? "text-green-600 font-bold" : "text-orange-500 font-bold"}>{pharmacy.hours}</span></div>
                      </div>
                    </div>
                    <button onClick={() => alert(pharmacy.name)} className="w-9 h-9 bg-gray-100 hover:bg-indigo-100 text-gray-500 hover:text-indigo-600 rounded-full flex items-center justify-center transition flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Card */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 text-center border border-indigo-100">
              <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-indigo-100 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="55" r="30" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2"/>
                  <circle cx="50" cy="45" r="22" fill="#4f46e5"/>
                  <circle cx="42" cy="42" r="5" fill="white"/><circle cx="42" cy="42" r="2" fill="#1e1b4b"/>
                  <circle cx="58" cy="42" r="5" fill="white"/><circle cx="58" cy="42" r="2" fill="#1e1b4b"/>
                  <path d="M45 52 Q50 57 55 52" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <rect x="35" y="20" width="8" height="15" rx="4" fill="#4f46e5"/>
                  <rect x="57" y="20" width="8" height="15" rx="4" fill="#4f46e5"/>
                  <circle cx="39" cy="18" r="6" fill="#a5b4fc"/>
                  <circle cx="61" cy="18" r="6" fill="#a5b4fc"/>
                  <rect x="30" y="75" width="40" height="12" rx="6" fill="#c7d2fe"/>
                  <circle cx="50" cy="68" r="4" fill="#fbbf24"/>
                </svg>
              </div>
              <div className="font-bold text-gray-900">Your AI Pharmacist</div>
              <div className="text-xs text-gray-500 mt-1">How can I help you today?</div>
              <button onClick={() => alert("Lumi")} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-bold transition shadow-sm">Talk to Lumi</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
