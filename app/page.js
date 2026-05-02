"use client";

import {
  Home as HomeIcon,
  ScanSearch,
  Pill,
  TriangleAlert,
  Bell,
  UserRound,
  Bot,
  Settings,
  Camera,
  Upload,
  Mic,
  Globe,
  ChevronDown,
  Phone,
  SunMedium,
  MoonStar,
} from "lucide-react";

/* =========================
   NAVIGATION
========================= */

const navItems = [
  { label: "Home", icon: HomeIcon, active: true },
  { label: "Scan Prescription", icon: ScanSearch },
  { label: "My Medicines", icon: Pill },
  { label: "Drug Interactions", icon: TriangleAlert },
  { label: "Reminders", icon: Bell },
  { label: "Patient Profile", icon: UserRound },
  { label: "AI Chat Assistant", icon: Bot },
  { label: "Settings", icon: Settings },
];

/* =========================
   PAGE
========================= */

export default function Page() {
  return (
    <main className="flex min-h-screen bg-[var(--bg)]">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-[270px] border-r bg-white p-5 flex flex-col">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg">
            ✨
          </div>
          <div>
            <div className="text-[22px] font-semibold">Lumi</div>
            <div className="text-[13px] text-gray-500">
              AI Digital Pharmacist
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] cursor-pointer ${
                item.active
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </div>
          ))}
        </div>

        {/* BOT CARD */}
        <div className="mt-auto bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-2xl">
          <div className="text-[15px] font-semibold">
            Hi! I’m Lumi ✨
          </div>
          <p className="text-[13px] text-gray-600 mt-1">
            Your AI Pharmacist
          </p>
          <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-xl text-[14px]">
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-[32px] font-semibold tracking-tight">
              Hello, Ali 👋
            </h1>
            <p className="text-[15px] text-gray-500 mt-1">
              We're here to help you stay healthy.
            </p>
          </div>

          <div className="flex items-center gap-4">

            {/* LANGUAGE */}
            <div className="flex border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 text-[14px]">
                <Globe size={16} />
                English
                <ChevronDown size={14} />
              </div>
              <div className="px-4 text-[14px] font-medium">اردو</div>
            </div>

            {/* VOICE */}
            <button className="bg-indigo-50 px-4 py-2 rounded-xl text-indigo-600 text-[14px]">
              🎤 Voice Input
            </button>

            {/* AVATAR */}
            <div className="w-12 h-12 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_330px] gap-6">

          {/* ================= LEFT ================= */}
          <div className="space-y-6">

            {/* SCAN */}
            <div className="lumi-card p-6">
              <h2 className="text-[22px] font-semibold">
                Scan Prescription
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Upload or capture your prescription and get AI-powered analysis.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <Btn icon={Camera} label="Scan via Camera" />
                <Btn icon={Upload} label="Upload Image" />
                <Btn icon={Mic} label="Voice Input" />
              </div>
            </div>

            {/* RISK + SUMMARY */}
            <div className="grid grid-cols-[320px_1fr] gap-6">

              {/* RISK */}
              <div className="lumi-card p-6 text-center">
                <div className="text-[14px] mb-3">
                  Prescription Risk Score
                </div>
                <div className="text-[48px] font-bold text-orange-500">
                  7.5
                </div>
                <div className="text-[14px] text-orange-500">
                  Moderate Risk
                </div>
              </div>

              {/* SUMMARY */}
              <div className="lumi-card p-6">
                <h3 className="text-[16px] font-semibold mb-2">
                  AI Summary (In Simple Words)
                </h3>
                <p className="text-[14px] text-gray-500">
                  Your prescription has some important points to note.
                  Some medicines may interact with each other.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <Warn title="Drug Interactions" color="red" />
                  <Warn title="Dose Adjustment" color="orange" />
                  <Warn title="Warnings" color="yellow" />
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="lumi-card overflow-hidden">
              <div className="p-5 font-semibold text-[16px]">
                Your Medicines
              </div>

              <table className="w-full lumi-table">
                <thead>
                  <tr>
                    <th className="p-4 text-left">Medicine</th>
                    <th>Purpose</th>
                    <th>When</th>
                    <th>Safety</th>
                  </tr>
                </thead>
                <tbody>
                  <Row name="Metformin 500mg" />
                  <Row name="Amoxicillin 500mg" />
                  <Row name="Ibuprofen 400mg" />
                  <Row name="Aspirin 75mg" />
                </tbody>
              </table>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6">

            {/* SCHEDULE */}
            <Card title="Today's Schedule">
              <Schedule time="8:00 AM" name="Metformin" icon={SunMedium} />
              <Schedule time="1:00 PM" name="Amoxicillin" icon={SunMedium} />
              <Schedule time="8:00 PM" name="Aspirin" icon={MoonStar} />
            </Card>

            {/* ADHERENCE */}
            <div className="lumi-card p-5 text-center">
              <div className="font-semibold mb-2">
                Adherence Progress
              </div>
              <div className="text-[42px] text-green-500 font-bold">
                85%
              </div>
              <div className="text-sm text-gray-500">
                Great job! Keep it up 🎉
              </div>
            </div>

            {/* PHARMACIES */}
            <Card title="Nearby Pharmacies">
              <Pharmacy name="HealthPlus Pharmacy" />
              <Pharmacy name="LifeCare Pharmacy" />
              <Pharmacy name="CarePoint Pharmacy" />
            </Card>

          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */

function Btn({ icon: Icon, label }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100">
      <Icon className="mx-auto mb-2" size={20} />
      <div className="text-[13px]">{label}</div>
    </div>
  );
}

function Row({ name }) {
  return (
    <tr className="border-t">
      <td className="p-4">{name}</td>
      <td>—</td>
      <td>—</td>
      <td className="text-green-600">Safe</td>
    </tr>
  );
}

function Schedule({ time, name, icon: Icon }) {
  return (
    <div className="flex items-center justify-between py-2 text-[14px]">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-gray-400" />
        {time}
      </div>
      <span>{name}</span>
    </div>
  );
}

function Pharmacy({ name }) {
  return (
    <div className="flex justify-between py-2 text-[14px]">
      <span>{name}</span>
      <Phone size={16} />
    </div>
  );
}

function Warn({ title, color }) {
  const map = {
    red: "border-red-200 bg-red-50 text-red-600",
    orange: "border-orange-200 bg-orange-50 text-orange-600",
    yellow: "border-yellow-200 bg-yellow-50 text-yellow-600",
  };

  return (
    <div className={`p-3 rounded-xl border ${map[color]}`}>
      <div className="text-sm font-semibold">{title}</div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="lumi-card p-5">
      <div className="flex justify-between mb-4">
        <span className="font-semibold">{title}</span>
        <span className="text-indigo-500 text-sm">View all</span>
      </div>
      {children}
    </div>
  );
}
