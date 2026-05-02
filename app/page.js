import {
  Bell,
  BellRing,
  Bot,
  Camera,
  ChevronDown,
  CircleAlert,
  Clock3,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  LayoutGrid,
  MapPin,
  Mic,
  Pill,
  Plus,
  ScanSearch,
  Settings,
  Share2,
  ShieldAlert,
  ShoppingCart,
  Stethoscope,
  Upload,
  UserRound,
  Sparkles,
  TriangleAlert,
  CheckCircle2,
  Phone,
  SunMedium,
  MoonStar,
  ArrowUpFromLine,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Scan Prescription", icon: ScanSearch },
  { label: "My Medicines", icon: Pill },
  { label: "Drug Interactions", icon: TriangleAlert },
  { label: "Reminders", icon: Bell },
  { label: "Patient Profile", icon: UserRound },
  { label: "AI Chat Assistant", icon: Bot },
  { label: "Settings", icon: Settings },
];

const scanActions = [
  {
    title: "Scan via Camera",
    subtitle: "Use camera to scan prescription",
    icon: Camera,
    tint: "from-violet-100 to-violet-50",
    iconBg: "bg-violet-500",
    iconColor: "text-white",
  },
  {
    title: "Upload Image",
    subtitle: "Upload prescription image",
    icon: ArrowUpFromLine,
    tint: "from-emerald-100 to-emerald-50",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
  },
  {
    title: "Voice Input",
    subtitle: "Speak prescription details",
    icon: Mic,
    tint: "from-sky-100 to-sky-50",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
  },
];

const warnings = [
  {
    title: "Drug Interactions",
    note: "2 interactions found",
    icon: TriangleAlert,
    tone: "text-red-500",
    border: "border-red-100",
    bg: "bg-red-50",
  },
  {
    title: "Dose Adjustment",
    note: "1 medicine may need adjustment",
    icon: CircleAlert,
    tone: "text-orange-500",
    border: "border-orange-100",
    bg: "bg-orange-50",
  },
  {
    title: "Warnings",
    note: "1 important warning",
    icon: ShieldAlert,
    tone: "text-amber-500",
    border: "border-amber-100",
    bg: "bg-amber-50",
  },
];

const medicines = [
  {
    name: "Metformin 500mg",
    purpose: "Helps control blood sugar",
    when: "After breakfast",
    safety: "Safe",
    safetyClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dot: "bg-emerald-500",
    icon: Pill,
  },
  {
    name: "Amoxicillin 500mg",
    purpose: "Fights bacterial infection",
    when: "After food, 3 times a day",
    safety: "Caution",
    safetyClass: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-amber-500",
    icon: Pill,
  },
  {
    name: "Ibuprofen 400mg",
    purpose: "Relieves pain and fever",
    when: "After food if needed",
    safety: "High Risk",
    safetyClass: "bg-red-50 text-red-500 border-red-100",
    dot: "bg-blue-500",
    icon: Pill,
  },
  {
    name: "Aspirin 75mg",
    purpose: "Helps prevent blood clots",
    when: "After dinner",
    safety: "Caution",
    safetyClass: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-violet-500",
    icon: Pill,
  },
];

const schedule = [
  {
    time: "8:00 AM",
    name: "Metformin 500mg",
    status: "Taken",
    statusClass: "bg-emerald-50 text-emerald-600",
    icon: SunMedium,
    iconClass: "text-amber-500",
  },
  {
    time: "1:00 PM",
    name: "Amoxicillin 500mg",
    status: "Due",
    statusClass: "bg-violet-50 text-violet-600",
    icon: SunMedium,
    iconClass: "text-amber-500",
  },
  {
    time: "8:00 PM",
    name: "Aspirin 75mg",
    status: "Due",
    statusClass: "bg-violet-50 text-violet-600",
    icon: MoonStar,
    iconClass: "text-slate-500",
  },
];

const pharmacies = [
  {
    name: "HealthPlus Pharmacy",
    distance: "0.5 km away",
    status: "Open 24 hours",
    statusClass: "text-emerald-600",
    icon: Plus,
  },
  {
    name: "LifeCare Pharmacy",
    distance: "0.8 km away",
    status: "Closes at 10 PM",
    statusClass: "text-orange-500",
    icon: Plus,
  },
  {
    name: "CarePoint Pharmacy",
    distance: "1.2 km away",
    status: "Open 24 hours",
    statusClass: "text-emerald-600",
    icon: Plus,
  },
];

function Card({ className = "", children }) {
  return <div className={`lumi-card ${className}`}>{children}</div>;
}

function SectionTitle({ title, action }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-slate-800">
        {title}
      </h3>
      {action ? (
        <button className="text-[13px] font-medium text-indigo-500 hover:text-indigo-600">
          {action}
        </button>
      ) : null}
    </div>
  );
}

function GradientDonut({
  id,
  value,
  display,
  caption,
  captionClass,
  startColor,
  endColor,
  size = 170,
  stroke = 9,
  displayClass = "text-slate-800",
}) {
  const r = 50;
  const c = 2 * Math.PI * r;
  const dashOffset = c - (value / 100) * c;

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
          r={r}
          fill="none"
          stroke="#eef1f8"
          strokeWidth={stroke}
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className={`text-[54px] font-semibold leading-none tracking-[-0.05em] ${displayClass}`}>
          {display}
        </div>
        <div className={`mt-2 text-[14px] font-medium ${captionClass}`}>{caption}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1700px]">
        <aside className="hidden w-[278px] shrink-0 border-r border-white/70 bg-white/90 px-5 py-5 shadow-[8px_0_30px_rgba(15,23,42,0.03)] backdrop-blur xl:flex xl:flex-col">
          <div className="flex items-center gap-3 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 shadow-[0_10px_25px_rgba(111,99,255,0.35)]">
              <Sparkles className="h-6 w-6 text-white" strokeWidth={2.2} />
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
                    ? "bg-gradient-to-r from-violet-50 to-indigo-50 text-indigo-600 shadow-[0_10px_25px_rgba(111,99,255,0.08)]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon className={`h-[20px] w-[20px] ${active ? "text-indigo-500" : "text-slate-500"}`} strokeWidth={2.2} />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-[26px] border border-violet-100 bg-gradient-to-b from-violet-50 to-white p-4 shadow-[0_12px_35px_rgba(111,99,255,0.08)]">
            <div className="flex items-start gap-3">
              <div className="relative h-24 w-24 shrink-0 rounded-[28px] bg-gradient-to-br from-violet-100 to-indigo-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-slate-900 to-slate-700 shadow-lg">
                    <Bot className="h-8 w-8 text-cyan-300" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-slate-800">
                  Hi! I&apos;m Lumi ✨
                </p>
                <p className="mt-2 text-[13px] leading-5 text-slate-500">
                  Your AI Pharmacist
                  <br />
                  How can I help you today?
                </p>
              </div>
            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(111,99,255,0.30)] transition hover:brightness-105">
              <Mic className="h-[18px] w-[18px]" strokeWidth={2.2} />
              Talk to Lumi
            </button>
          </div>
        </aside>

        <section className="flex-1 px-4 py-4 sm:px-5 lg:px-6 xl:px-7">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-6">
              <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h1 className="text-[28px] font-semibold tracking-[-0.04em] text-slate-900">
                    Hello, Ali 👋
                  </h1>
                  <p className="mt-2 text-[15px] text-slate-500">
                    We&apos;re here to help you stay healthy.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 self-start">
                  <div className="flex h-11 items-stretch overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
                    <button className="flex items-center gap-2 px-4 text-[14px] font-medium text-slate-700">
                      <Globe className="h-[18px] w-[18px] text-slate-600" strokeWidth={2} />
                      English
                      <ChevronDown className="h-[16px] w-[16px] text-slate-400" strokeWidth={2.2} />
                    </button>
                    <div className="w-px bg-slate-200" />
                    <button className="px-4 text-[14px] font-semibold text-slate-700">
                      اردو
                    </button>
                  </div>

                  <button className="flex h-11 items-center gap-2 rounded-2xl border border-violet-100 bg-gradient-to-b from-violet-50 to-white px-5 text-[14px] font-semibold text-indigo-600 shadow-[0_8px_22px_rgba(111,99,255,0.10)]">
                    <Mic className="h-[18px] w-[18px] text-violet-600" strokeWidth={2.2} />
                    Voice Input
                  </button>

                  <div className="flex items-center gap-2 pl-1">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-slate-200 to-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                      <span className="text-[26px]">👳🏻‍♂️</span>
                    </div>
                    <ChevronDown className="h-[16px] w-[16px] text-slate-500" strokeWidth={2.2} />
                  </div>
                </div>
              </header>

              <Card className="overflow-hidden border-violet-100 bg-gradient-to-r from-violet-50 via-white to-indigo-50/50 p-5 shadow-[0_18px_40px_rgba(111,99,255,0.08)]">
                <div className="grid gap-5 lg:grid-cols-[1.05fr_1.1fr]">
                  <div className="relative min-h-[265px] overflow-hidden rounded-[26px] border border-white/70 bg-gradient-to-br from-[#f4f1ff] via-[#faf8ff] to-[#eef6ff] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <div className="absolute left-4 top-8 h-48 w-48 rounded-full bg-violet-200/30 blur-2xl" />
                    <div className="absolute -bottom-3 left-5 h-20 w-20 rounded-full bg-emerald-400/20 blur-xl" />

                    <div className="relative flex h-full items-center justify-center">
                      <div className="absolute left-2 top-6 h-40 w-40 rounded-full bg-white/35" />
                      <div className="absolute left-10 top-24 h-20 w-10 rounded-[999px] bg-emerald-400/75 blur-[0.5px] rotate-[-24deg]" />
                      <div className="absolute left-24 top-28 h-18 w-9 rounded-[999px] bg-emerald-500/70 rotate-[14deg]" />

                      <div className="relative">
                        <div className="absolute left-1/2 top-2 h-12 w-24 -translate-x-1/2 rounded-[18px] bg-violet-400/30 blur-xl" />
                        <div className="relative mx-auto h-52 w-40 rounded-[34px] border-[3px] border-violet-300 bg-white/60 shadow-[0_18px_30px_rgba(111,99,255,0.14)]">
                          <div className="absolute -top-3 left-1/2 h-8 w-14 -translate-x-1/2 rounded-[12px] border-[3px] border-violet-300 bg-white/70" />
                          <div className="absolute left-1/2 top-6 h-[158px] w-[3px] -translate-x-1/2 bg-violet-100" />
                          <div className="absolute left-6 top-7 text-[26px] font-semibold tracking-[-0.05em] text-violet-500">
                            Rx
                          </div>
                          <div className="absolute left-9 top-16 h-2 w-20 rounded-full bg-slate-200/80" />
                          <div className="absolute left-9 top-22 h-2 w-18 rounded-full bg-slate-200/80" />
                          <div className="absolute left-9 top-28 h-2 w-16 rounded-full bg-slate-200/80" />
                          <div className="absolute left-9 top-34 h-2 w-19 rounded-full bg-slate-200/80" />
                          <div className="absolute left-9 top-40 h-2 w-13 rounded-full bg-slate-200/80" />
                        </div>

                        <div className="absolute -right-7 bottom-10 rounded-[28px] bg-white p-3 shadow-[0_18px_30px_rgba(111,99,255,0.16)]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-violet-600 to-indigo-500">
                            <Camera className="h-8 w-8 text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-center lg:text-left">
                      <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-slate-900">
                        Scan Prescription
                      </h2>
                      <p className="mx-auto mt-2 max-w-[430px] text-[15px] leading-6 text-slate-500 lg:mx-0">
                        Upload or capture your prescription and get AI-powered analysis.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {scanActions.map(({ title, subtitle, icon: Icon, tint, iconBg, iconColor }) => (
                        <button
                          key={title}
                          className={`group rounded-[22px] border border-[color:var(--border)] bg-gradient-to-b ${tint} px-4 py-5 text-left shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(111,99,255,0.10)]`}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className={`flex h-16 w-16 items-center justify-center rounded-[999px] ${iconBg} ${iconColor} shadow-[0_10px_20px_rgba(111,99,255,0.18)]`}>
                              <Icon className="h-8 w-8" strokeWidth={2.2} />
                            </div>
                            <div className="mt-4 text-[14px] font-semibold text-slate-800">{title}</div>
                            <div className="mt-2 text-[13px] leading-5 text-slate-500">{subtitle}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
                <Card className="p-5">
                  <SectionTitle title="Prescription Risk Score" />
                  <div className="mt-3 flex justify-center pb-1">
                    <GradientDonut
                      id="risk-ring"
                      value={75}
                      display="7.5"
                      caption="Moderate Risk"
                      captionClass="text-orange-500"
                      startColor="#f9d49b"
                      endColor="#f97316"
                      displayClass="text-slate-700"
                    />
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                      <Sparkles className="h-4 w-4" strokeWidth={2.3} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-slate-800">
                        AI Summary (In Simple Words)
                      </h3>
                      <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-slate-600">
                        Your prescription has some important points to note. Some medicines may
                        interact with each other. Please follow the instructions carefully and
                        consult your doctor if you feel unwell.
                      </p>

                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {warnings.map(({ title, note, icon: Icon, tone, border, bg }) => (
                          <div key={title} className={`rounded-[18px] border ${border} ${bg} p-4 shadow-[0_8px_18px_rgba(15,23,42,0.03)]`}>
                            <div className="flex items-start gap-3">
                              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white ${tone}`}>
                                <Icon className="h-4 w-4" strokeWidth={2.3} />
                              </div>
                              <div>
                                <div className="text-[14px] font-semibold text-slate-800">{title}</div>
                                <div className="mt-1 text-[13px] leading-5 text-slate-600">{note}</div>
                                <button className="mt-2 text-[13px] font-medium text-indigo-500">
                                  View details
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="overflow-hidden p-0">
                <div className="border-b border-[color:var(--border)] px-6 py-5">
                  <SectionTitle title="Your Medicines" />
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-[color:var(--border)] text-left text-[13px] font-medium text-slate-400">
                        <th className="px-6 py-4">Medicine</th>
                        <th className="px-6 py-4">Purpose (In Simple Words)</th>
                        <th className="px-6 py-4">When to Take</th>
                        <th className="px-6 py-4">Safety</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.map(({ name, purpose, when, safety, safetyClass, dot, icon: Icon }) => (
                        <tr key={name} className="border-b border-[color:var(--border)] last:border-0">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`h-3.5 w-3.5 rounded-full ${dot} ring-4 ring-white`} />
                              <div className="flex items-center gap-2 text-[14px] font-medium text-slate-700">
                                <Icon className="h-4 w-4 text-slate-400" strokeWidth={2.2} />
                                {name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[14px] text-slate-600">{purpose}</td>
                          <td className="px-6 py-4 text-[14px] text-slate-600">{when}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium ${safetyClass}`}>
                              {safety}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-[color:var(--border)] px-6 py-4 text-[13px] text-slate-500">
                  Take medicines exactly as prescribed. Do not stop or change the dose without doctor advice.
                </div>
              </Card>

              <div className="grid gap-4 xl:grid-cols-4">
                <ActionCard
                  title="Order Medicine"
                  subtitle="Get medicines delivered"
                  icon={ShoppingCart}
                  className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white"
                />
                <ActionCard
                  title="Consult Doctor"
                  subtitle="Talk to a doctor online"
                  icon={Stethoscope}
                  className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white"
                />
                <ActionCard
                  title="Set Reminder"
                  subtitle="Never miss your medication"
                  icon={BellRing}
                  className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white"
                />
                <ActionCard
                  title="Share Report"
                  subtitle="Share analysis with family or doctor"
                  icon={Share2}
                  className="bg-gradient-to-br from-violet-400 to-purple-400 text-white"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-5">
                <SectionTitle title="Today's Schedule" action="View all" />
                <div className="mt-4 space-y-3">
                  {schedule.map(({ time, name, status, statusClass, icon: Icon, iconClass }) => (
                    <div
                      key={time + name}
                      className="flex items-center justify-between gap-3 rounded-[18px] border border-[color:var(--border)] bg-white px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Icon className={`h-5 w-5 ${iconClass}`} strokeWidth={2.1} />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-violet-600">{time}</div>
                          <div className="mt-1 text-[14px] text-slate-700">{name}</div>
                        </div>
                      </div>

                      <div className={`rounded-full px-3 py-1 text-[13px] font-medium ${statusClass}`}>
                        {status}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5">
                <SectionTitle title="Adherence Progress" />
                <div className="mt-4 flex flex-col items-center">
                  <GradientDonut
                    id="adherence-ring"
                    value={85}
                    display="85%"
                    caption="Great job! Keep it up 🎉"
                    captionClass="text-slate-600"
                    startColor="#34d399"
                    endColor="#22c55e"
                    displayClass="text-slate-800"
                    size={165}
                    stroke={9}
                  />
                </div>
              </Card>

              <Card className="p-5">
                <SectionTitle title="Nearby Pharmacies" action="View all" />
                <div className="mt-4 space-y-4">
                  {pharmacies.map(({ name, distance, status, statusClass, icon: Icon }) => (
                    <div key={name} className="flex items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                          <Icon className="h-5 w-5" strokeWidth={2.4} />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-slate-700">{name}</div>
                          <div className="mt-1 text-[13px] text-slate-500">{distance}</div>
                          <div className={`mt-1 text-[13px] font-medium ${statusClass}`}>{status}</div>
                        </div>
                      </div>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-500">
                        <Phone className="h-4.5 w-4.5" strokeWidth={2.2} />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ActionCard({ title, subtitle, icon: Icon, className = "" }) {
  return (
    <button
      className={`group flex min-h-[96px] items-center gap-4 rounded-[24px] px-5 py-4 text-left shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/20">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className="text-[16px] font-semibold tracking-[-0.02em]">{title}</div>
        <div className="mt-1 text-[13px] leading-5 opacity-90">{subtitle}</div>
      </div>
    </button>
  );
}
