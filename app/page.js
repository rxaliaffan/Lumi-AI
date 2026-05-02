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
  ShoppingCart,
  Stethoscope,
  BellRing,
  Share2,
  CheckCircle2,
  Clock3,
  Sparkles,
  AlertTriangle,
  CircleAlert,
  ShieldAlert,
  Plus,
} from "lucide-react";

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

const warnings = [
  {
    title: "Drug Interactions",
    note: "2 interactions found",
    icon: TriangleAlert,
    tone: "red",
    accent: "red-500",
    ring: "red-100",
    bg: "red-50",
  },
  {
    title: "Dose Adjustment",
    note: "1 medicine may need adjustment",
    icon: CircleAlert,
    tone: "orange",
    accent: "orange-500",
    ring: "orange-100",
    bg: "orange-50",
  },
  {
    title: "Warnings",
    note: "1 important warning",
    icon: ShieldAlert,
    tone: "yellow",
    accent: "yellow-500",
    ring: "yellow-100",
    bg: "yellow-50",
  },
];

const medicines = [
  {
    name: "Metformin 500mg",
    purpose: "Helps control blood sugar",
    when: "After breakfast",
    safety: "Safe",
    safetyClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dot: "bg-blue-500",
  },
  {
    name: "Amoxicillin 500mg",
    purpose: "Fights bacterial infection",
    when: "After food, 3 times a day",
    safety: "Caution",
    safetyClass: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-red-400",
  },
  {
    name: "Ibuprofen 400mg",
    purpose: "Relieves pain and fever",
    when: "After food if needed",
    safety: "High Risk",
    safetyClass: "bg-red-50 text-red-500 border-red-100",
    dot: "bg-blue-500",
  },
  {
    name: "Aspirin 75mg",
    purpose: "Helps prevent blood clots",
    when: "After dinner",
    safety: "Caution",
    safetyClass: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-violet-500",
  },
];

const schedule = [
  {
    time: "8:00 AM",
    name: "Metformin 500mg",
    status: "Taken",
    icon: SunMedium,
  },
  {
    time: "1:00 PM",
    name: "Amoxicillin 500mg",
    status: "Due",
    icon: SunMedium,
  },
  {
    time: "8:00 PM",
    name: "Aspirin 75mg",
    status: "Due",
    icon: MoonStar,
  },
];

const pharmacies = [
  {
    name: "HealthPlus Pharmacy",
    distance: "0.5 km away",
    status: "Open 24 hours",
    statusClass: "text-emerald-600",
    iconClass: "text-emerald-500",
  },
  {
    name: "LifeCare Pharmacy",
    distance: "0.8 km away",
    status: "Closes at 10 PM",
    statusClass: "text-orange-500",
    iconClass: "text-sky-500",
  },
  {
    name: "CarePoint Pharmacy",
    distance: "1.2 km away",
    status: "Open 24 hours",
    statusClass: "text-emerald-600",
    iconClass: "text-violet-500",
  },
];

export default function Page() {
  return (
    <main
      className="min-h-screen bg-[#f6f7fb] text-slate-800"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1700px]">
        {/* SIDEBAR */}
        <aside className="flex w-[270px] shrink-0 flex-col border-r border-[#e8eaf4] bg-white px-5 py-5">
          <div className="flex items-center gap-3 pb-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-[0_10px_24px_rgba(111,99,255,0.28)]">
              <Sparkles className="h-6 w-6 text-white" strokeWidth={2.1} />
            </div>
            <div>
              <div className="text-[25px] font-semibold leading-none tracking-[-0.04em] text-slate-900">
                Lumi
              </div>
              <div className="mt-1 text-[13px] font-medium text-slate-500">
                AI Digital Pharmacist
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={[
                  "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition",
                  active
                    ? "bg-gradient-to-r from-violet-50 to-indigo-50 text-indigo-600 shadow-[0_8px_20px_rgba(111,99,255,0.08)]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon
                  className={active ? "text-indigo-600" : "text-slate-500"}
                  size={20}
                  strokeWidth={2.2}
                />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-[28px] border border-violet-100 bg-gradient-to-b from-violet-50 to-white p-4 shadow-[0_12px_30px_rgba(111,99,255,0.08)]">
            <div className="flex items-center gap-3">
              <div className="relative h-[118px] w-[116px] shrink-0">
                <BotMascot />
              </div>
              <div className="min-w-0">
                <div className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                  Hi! I'm Lumi ✨
                </div>
                <div className="mt-2 text-[13px] leading-5 text-slate-500">
                  Your AI Pharmacist
                  <br />
                  How can I help you today?
                </div>
              </div>
            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-[14px] font-medium text-white shadow-[0_14px_28px_rgba(111,99,255,0.24)] transition hover:brightness-105">
              <Mic className="h-[18px] w-[18px]" strokeWidth={2.3} />
              Talk to Lumi
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <section className="flex-1 px-6 py-6">
          {/* HEADER */}
          <header className="mb-6 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-slate-900">
                Hello, Ali 👋
              </h1>
              <p className="mt-3 text-[15px] font-medium text-slate-500">
                We're here to help you stay healthy.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 overflow-hidden rounded-[18px] border border-[#e5e8f1] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
                <button className="flex items-center gap-2 px-4 text-[14px] font-medium text-slate-700">
                  <Globe className="text-slate-500" size={16} />
                  English
                  <ChevronDown className="text-slate-400" size={14} />
                </button>
                <div className="flex items-center border-l border-[#e5e8f1] px-4 text-[14px] font-semibold text-slate-700">
                  اردو
                </div>
              </div>

              <button className="flex h-12 items-center gap-2 rounded-[18px] border border-violet-100 bg-gradient-to-b from-violet-50 to-white px-5 text-[14px] font-semibold text-indigo-600 shadow-[0_8px_22px_rgba(111,99,255,0.10)]">
                <Mic className="h-[18px] w-[18px] text-violet-600" strokeWidth={2.2} />
                Voice Input
              </button>

              <div className="flex items-center gap-2 pl-1">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-white bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                  <img
                    src="https://i.pravatar.cc/120?u=lumi-ali"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <ChevronDown className="text-slate-500" size={16} strokeWidth={2.3} />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-[minmax(0,1fr)_330px] gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* SCAN CARD */}
              <div className="overflow-hidden rounded-[26px] border border-[#e9eaf3] bg-gradient-to-br from-violet-50 via-white to-indigo-50/50 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="grid gap-5 lg:grid-cols-[1.02fr_1fr] lg:items-center">
                  <div className="relative h-[210px] rounded-[28px] bg-gradient-to-br from-[#f3efff] via-[#faf7ff] to-[#eef3ff]">
                    <div className="absolute left-3 top-5 h-[165px] w-[165px] rounded-full bg-violet-200/35 blur-[0px]" />
                    <div className="absolute left-9 top-[76px] h-20 w-10 rounded-full bg-emerald-400/80 rotate-[-25deg] shadow-[0_10px_20px_rgba(34,197,94,0.12)]" />
                    <div className="absolute left-[58px] top-[90px] h-[76px] w-9 rounded-full bg-emerald-500/85 rotate-[12deg]" />

                    <div className="absolute left-[72px] top-[18px] h-[170px] w-[135px] rounded-[24px] border-[3px] border-violet-300 bg-white/70 shadow-[0_16px_34px_rgba(111,99,255,0.18)]">
                      <div className="absolute left-1/2 top-[-10px] h-8 w-16 -translate-x-1/2 rounded-[12px] border-[3px] border-violet-300 bg-white/80" />
                      <div className="absolute left-1/2 top-[20px] h-[126px] w-[2px] -translate-x-1/2 bg-violet-100/80" />
                      <div className="absolute left-5 top-6 text-[28px] font-semibold tracking-[-0.06em] text-violet-500">
                        Rx
                      </div>
                      <div className="absolute left-10 top-[26px] h-2 w-20 rounded-full bg-slate-200/85" />
                      <div className="absolute left-10 top-[40px] h-2 w-16 rounded-full bg-slate-200/85" />
                      <div className="absolute left-10 top-[54px] h-2 w-24 rounded-full bg-slate-200/85" />
                      <div className="absolute left-10 top-[68px] h-2 w-19 rounded-full bg-slate-200/85" />
                      <div className="absolute left-10 top-[82px] h-2 w-14 rounded-full bg-slate-200/85" />
                    </div>

                    <div className="absolute right-[92px] top-[66px] rounded-[24px] bg-white p-3 shadow-[0_18px_30px_rgba(111,99,255,0.16)]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-violet-600 to-indigo-500">
                        <Camera className="h-8 w-8 text-white" strokeWidth={2.1} />
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-slate-900">
                      Scan Prescription
                    </h2>
                    <p className="mx-auto mt-2 max-w-[430px] text-[15px] leading-6 text-slate-500 lg:mx-0">
                      Upload or capture your prescription and get AI-powered analysis.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <ActionTile
                        title="Scan via Camera"
                        subtitle="Use camera to scan prescription"
                        icon={Camera}
                        circleClass="bg-violet-100 text-violet-600"
                      />
                      <ActionTile
                        title="Upload Image"
                        subtitle="Upload prescription image"
                        icon={Upload}
                        circleClass="bg-emerald-100 text-emerald-600"
                      />
                      <ActionTile
                        title="Voice Input"
                        subtitle="Speak prescription details"
                        icon={Mic}
                        circleClass="bg-sky-100 text-sky-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* RISK + SUMMARY */}
              <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
                <div className="rounded-[26px] border border-[#e9eaf3] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 text-[14px] font-semibold text-slate-800">
                    Prescription Risk Score
                  </div>
                  <div className="flex justify-center">
                    <MetricRing
                      id="risk-ring"
                      percentage={75}
                      startColor="#f6d6a8"
                      endColor="#f59e0b"
                      size={170}
                      stroke={10}
                    >
                      <div className="flex items-end gap-[1px]">
                        <span className="text-[54px] font-semibold leading-none tracking-[-0.05em] text-slate-700">
                          7.5
                        </span>
                        <span className="mb-4 text-[18px] font-medium text-slate-500">
                          /10
                        </span>
                      </div>
                    </MetricRing>
                  </div>
                  <div className="mt-2 text-center text-[14px] font-medium text-orange-500">
                    Moderate Risk
                  </div>
                </div>

                <div className="rounded-[26px] border border-[#e9eaf3] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                      <Sparkles className="h-4 w-4" strokeWidth={2.4} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                        AI Summary (In Simple Words)
                      </h3>
                      <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-slate-600">
                        Your prescription has some important points to note. Some medicines may
                        interact with each other. Please follow the instructions carefully and
                        consult your doctor if you feel unwell.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {warnings.map((w) => {
                      const Icon = w.icon;
                      return (
                        <div
                          key={w.title}
                          className={`rounded-[18px] border border-${w.ring} bg-${w.bg} p-4 shadow-[0_8px_18px_rgba(15,23,42,0.03)]`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-${w.accent}`}>
                              <Icon className="h-4 w-4" strokeWidth={2.4} />
                            </div>
                            <div className="min-w-0">
                              <div className={`text-[14px] font-semibold text-${w.accent}`}>
                                {w.title}
                              </div>
                              <div className="mt-1 text-[13px] leading-5 text-slate-600">
                                {w.note}
                              </div>
                              <button className="mt-2 text-[13px] font-medium text-indigo-500">
                                View details
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* MEDICINES TABLE */}
              <div className="overflow-hidden rounded-[26px] border border-[#e9eaf3] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="border-b border-[#eef1f8] px-6 py-5">
                  <div className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                    Your Medicines
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-[#eef1f8] text-left text-[12px] font-medium uppercase tracking-[0.06em] text-slate-400">
                        <th className="px-6 py-4">Medicine</th>
                        <th className="px-6 py-4">Purpose (In Simple Words)</th>
                        <th className="px-6 py-4">When to Take</th>
                        <th className="px-6 py-4">Safety</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.map((medicine) => (
                        <tr key={medicine.name} className="border-b border-[#eef1f8] last:border-b-0">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`h-3.5 w-3.5 rounded-full ${medicine.dot} ring-4 ring-white`} />
                              <div className="text-[14px] font-medium text-slate-700">
                                {medicine.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[14px] text-slate-600">
                            {medicine.purpose}
                          </td>
                          <td className="px-6 py-4 text-[14px] text-slate-600">
                            {medicine.when}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium ${medicine.safetyClass}`}
                            >
                              {medicine.safety}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-start gap-2 border-t border-[#eef1f8] px-6 py-4 text-[13px] text-slate-500">
                  <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <span className="text-[11px] font-bold">i</span>
                  </div>
                  <p>
                    Take medicines exactly as prescribed. Do not stop or change the dose without doctor advice.
                  </p>
                </div>
              </div>

              {/* BOTTOM ACTIONS */}
              <div className="grid gap-4 xl:grid-cols-4">
                <BottomAction
                  title="Order Medicine"
                  subtitle="Get medicines delivered"
                  icon={ShoppingCart}
                  className="bg-gradient-to-br from-violet-500 to-indigo-500"
                />
                <BottomAction
                  title="Consult Doctor"
                  subtitle="Talk to a doctor online"
                  icon={Stethoscope}
                  className="bg-gradient-to-br from-blue-400 to-indigo-400"
                />
                <BottomAction
                  title="Set Reminder"
                  subtitle="Never miss your medication"
                  icon={BellRing}
                  className="bg-gradient-to-br from-emerald-500 to-teal-500"
                />
                <BottomAction
                  title="Share Report"
                  subtitle="Share analysis with family or doctor"
                  icon={Share2}
                  className="bg-gradient-to-br from-violet-400 to-purple-400"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[26px] border border-[#e9eaf3] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                    Today's Schedule
                  </div>
                  <button className="text-[13px] font-medium text-indigo-500">
                    View all
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {schedule.map((item) => {
                    const Icon = item.icon;
                    const isTaken = item.status === "Taken";
                    return (
                      <div
                        key={`${item.time}-${item.name}`}
                        className="flex items-center justify-between rounded-[18px] border border-[#eef1f8] bg-white px-4 py-3 shadow-[0_6px_14px_rgba(15,23,42,0.02)]"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={item.icon === MoonStar ? "text-slate-500" : "text-amber-500"}
                            size={19}
                            strokeWidth={2.3}
                          />
                          <div>
                            <div className="text-[14px] font-semibold text-indigo-600">
                              {item.time}
                            </div>
                            <div className="mt-1 text-[14px] text-slate-700">
                              {item.name}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-medium ${
                            isTaken
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-violet-50 text-violet-600"
                          }`}
                        >
                          {isTaken ? (
                            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                          ) : (
                            <Clock3 className="h-3.5 w-3.5" strokeWidth={2.4} />
                          )}
                          {item.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-[#e9eaf3] bg-white p-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="text-left text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                  Adherence Progress
                </div>
                <div className="mt-4 flex justify-center">
                  <MetricRing
                    id="adherence-ring"
                    percentage={85}
                    startColor="#9ee8c2"
                    endColor="#22c55e"
                    size={168}
                    stroke={10}
                  >
                    <span className="text-[26px] font-semibold tracking-[-0.04em] text-slate-800">
                      85%
                    </span>
                  </MetricRing>
                </div>
                <div className="mt-3 text-[14px] font-medium text-slate-700">
                  Great job!
                </div>
                <div className="text-[14px] text-slate-500">
                  Keep it up 🎉
                </div>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-[#e9eaf3] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                    Nearby Pharmacies
                  </div>
                  <button className="text-[13px] font-medium text-indigo-500">
                    View all
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {pharmacies.map((pharmacy) => (
                    <div key={pharmacy.name} className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]`}
                        >
                          <Plus className={pharmacy.iconClass} size={21} strokeWidth={2.3} />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-slate-700">
                            {pharmacy.name}
                          </div>
                          <div className="mt-1 text-[13px] text-slate-500">
                            {pharmacy.distance}
                          </div>
                          <div className={`mt-1 text-[13px] font-medium ${pharmacy.statusClass}`}>
                            {pharmacy.status}
                          </div>
                        </div>
                      </div>

                      <button className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-500">
                        <Phone className="h-4.5 w-4.5" strokeWidth={2.3} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricRing({
  id,
  percentage,
  startColor,
  endColor,
  stroke = 10,
  size = 160,
  children,
}) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#eef1f8"
          strokeWidth={stroke}
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

function ActionTile({ title, subtitle, icon: Icon, circleClass }) {
  return (
    <div className="rounded-[22px] border border-[#e9eaf3] bg-white px-4 py-5 text-center shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(111,99,255,0.10)]">
      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${circleClass} shadow-[0_10px_18px_rgba(15,23,42,0.04)]`}>
        <Icon className="h-8 w-8" strokeWidth={2.3} />
      </div>
      <div className="mt-4 text-[14px] font-semibold text-slate-800">
        {title}
      </div>
      <div className="mt-2 text-[13px] leading-5 text-slate-500">
        {subtitle}
      </div>
    </div>
  );
}

function BottomAction({ title, subtitle, icon: Icon, className }) {
  return (
    <button
      className={`flex min-h-[92px] items-center gap-4 rounded-[24px] px-5 py-4 text-left text-white shadow-[0_14px_30px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/20 ring-1 ring-white/20">
        <Icon className="h-6 w-6" strokeWidth={2.3} />
      </div>
      <div className="min-w-0">
        <div className="text-[16px] font-semibold tracking-[-0.02em]">
          {title}
        </div>
        <div className="mt-1 text-[13px] leading-5 opacity-90">
          {subtitle}
        </div>
      </div>
    </button>
  );
}

function BotMascot() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-[12px] h-[74px] w-[74px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white to-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]" />
      <div className="absolute left-1/2 top-[28px] h-[44px] w-[44px] -translate-x-1/2 rounded-full bg-[#0f172a]" />
      <div className="absolute left-1/2 top-[40px] h-2.5 w-2.5 -translate-x-3 rounded-full bg-cyan-300" />
      <div className="absolute left-1/2 top-[40px] h-2.5 w-2.5 translate-x-0 rounded-full bg-cyan-300" />
      <div className="absolute left-1/2 top-[53px] h-[6px] w-4 -translate-x-1/2 rounded-full border-b-2 border-cyan-300" />

      <div className="absolute left-1/2 top-[70px] h-[48px] w-[74px] -translate-x-1/2 rounded-[28px] bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]" />
      <div className="absolute left-1/2 top-[86px] h-[24px] w-[24px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500 to-indigo-500 shadow-[0_8px_18px_rgba(111,99,255,0.25)]" />
      <div className="absolute left-1/2 top-[92px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-white" />

      <div className="absolute left-[4px] top-[76px] h-[26px] w-[20px] -rotate-[-18deg] rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[4px] top-[76px] h-[26px] w-[20px] rotate-[18deg] rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)]" />

      <div className="absolute left-[20px] top-[12px] h-6 w-6 rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[18px] top-[12px] h-6 w-6 rounded-full bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)]" />

      <div className="absolute left-1/2 top-[112px] h-[14px] w-[40px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-sm" />
    </div>
  );
}
