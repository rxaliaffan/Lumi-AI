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

export default function Page() {
  return (
    <main className="flex min-h-screen bg-[#f6f7fb]">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r px-5 py-5 flex flex-col">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <div>
            <div className="text-[24px] font-semibold">Lumi</div>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] ${
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
        <div className="mt-auto bg-indigo-50 p-4 rounded-2xl">
          <div className="text-[16px] font-semibold">
            Hi! I’m Lumi ✨
          </div>
          <p className="text-[13px] text-gray-500 mt-1">
            Your AI Pharmacist
          </p>
          <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-xl text-[14px]">
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-[32px] font-semibold">
              Hello, Ali 👋
            </h1>
            <p className="text-[15px] text-gray-500 mt-1">
              We're here to help you stay healthy.
            </p>
          </div>

          <div className="flex items-center gap-4">

            {/* LANGUAGE */}
            <div className="flex border rounded-xl overflow-hidden bg-white">
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

            {/* PROFILE */}
            <div className="w-12 h-12 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_330px] gap-6">

          {/* LEFT */}
          <div className="space-y-6">

            {/* SCAN */}
            <div className="bg-white p-6 rounded-2xl border">
              <h2 className="text-[22px] font-semibold">
                Scan Prescription
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Upload or capture your prescription and get AI-powered analysis.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <ScanBtn icon={Camera} label="Scan via Camera" />
                <ScanBtn icon={Upload} label="Upload Image" />
                <ScanBtn icon={Mic} label="Voice Input" />
              </div>
            </div>

            {/* RISK + SUMMARY */}
            <div className="grid grid-cols-[320px_1fr] gap-6">

              {/* RISK */}
              <div className="bg-white p-6 rounded-2xl border text-center">
                <div className="text-[14px] mb-3">
                  Prescription Risk Score
                </div>
                <div className="text-[50px] font-bold text-orange-500">
                  7.5
                </div>
                <div className="text-[14px] text-orange-500">
                  Moderate Risk
                </div>
              </div>

              {/* SUMMARY */}
              <div className="bg-white p-6 rounded-2xl border">
                <h3 className="text-[16px] font-semibold mb-2">
                  AI Summary (In Simple Words)
                </h3>
                <p className="text-[14px] text-gray-500 mb-4">
                  Your prescription has some important points to note. Some medicines may interact with each other.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <Warning title="Drug Interactions" />
                  <Warning title="Dose Adjustment" />
                  <Warning title="Warnings" />
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl border">
              <div className="p-5 font-semibold text-[16px]">
                Your Medicines
              </div>

              <table className="w-full text-[14px]">
                <thead className="text-gray-400 text-[12px]">
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

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-4 gap-4">
              <Action title="Order Medicine" icon={ShoppingCart} />
              <Action title="Consult Doctor" icon={Stethoscope} />
              <Action title="Set Reminder" icon={BellRing} />
              <Action title="Share Report" icon={Share2} />
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* SCHEDULE */}
            <div className="bg-white p-5 rounded-2xl border">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Today's Schedule</span>
                <span className="text-indigo-500 text-sm">View all</span>
              </div>

              <Schedule time="8:00 AM" name="Metformin 500mg" />
              <Schedule time="1:00 PM" name="Amoxicillin 500mg" />
              <Schedule time="8:00 PM" name="Aspirin 75mg" />
            </div>

            {/* ADHERENCE */}
            <div className="bg-white p-5 rounded-2xl border text-center">
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
            <div className="bg-white p-5 rounded-2xl border">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Nearby Pharmacies</span>
                <span className="text-indigo-500 text-sm">View all</span>
              </div>

              <Pharmacy name="HealthPlus Pharmacy" />
              <Pharmacy name="LifeCare Pharmacy" />
              <Pharmacy name="CarePoint Pharmacy" />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

/* COMPONENTS */

function ScanBtn({ icon: Icon, label }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100">
      <Icon className="mx-auto mb-2" size={22} />
      <div className="text-[13px]">{label}</div>
    </div>
  );
}

function Warning({ title }) {
  return (
    <div className="bg-gray-50 p-3 rounded-xl text-[13px]">
      {title}
    </div>
  );
}

function Row({ name }) {
  return (
    <tr className="border-t">
      <td className="p-4">{name}</td>
      <td>—</td>
      <td>—</td>
      <td>Safe</td>
    </tr>
  );
}

function Schedule({ time, name }) {
  return (
    <div className="flex justify-between py-2 text-[14px]">
      <span>{time}</span>
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

function Action({ title, icon: Icon }) {
  return (
    <div className="bg-indigo-500 text-white p-4 rounded-xl flex items-center gap-3">
      <Icon size={18} />
      <span className="text-[14px]">{title}</span>
    </div>
  );
}
