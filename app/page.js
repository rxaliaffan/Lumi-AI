import {
  Home,
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
  ChevronDown,
  Globe,
  Phone,
  SunMedium,
  MoonStar,
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

export default function HomePage() {
  return (
    <main className="min-h-screen flex bg-[#f6f7fb]">
      
      {/* SIDEBAR */}
      <aside className="w-[260px] bg-white border-r px-5 py-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
            ✨
          </div>
          <div>
            <div className="font-semibold text-lg">Lumi</div>
            <div className="text-xs text-gray-500">AI Digital Pharmacist</div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm cursor-pointer ${
                item.active
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </div>
          ))}
        </nav>

        {/* CHAT CARD */}
        <div className="mt-auto bg-gradient-to-b from-indigo-50 to-white p-4 rounded-2xl">
          <div className="text-sm font-semibold">Hi! I’m Lumi ✨</div>
          <div className="text-xs text-gray-500 mt-1">
            Your AI Pharmacist
          </div>
          <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-xl text-sm">
            Talk to Lumi
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 p-6">
        
        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-[26px] font-semibold">Hello, Ali 👋</h1>
            <p className="text-sm text-gray-500">
              We're here to help you stay healthy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex border rounded-xl overflow-hidden">
              <div className="px-4 py-2 flex items-center gap-2 text-sm">
                <Globe size={16} />
                English
                <ChevronDown size={14} />
              </div>
              <div className="px-4 py-2 text-sm font-medium">اردو</div>
            </div>

            <button className="bg-indigo-50 px-4 py-2 rounded-xl text-indigo-600 text-sm">
              🎤 Voice Input
            </button>

            <div className="w-12 h-12 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-6">
          
          {/* LEFT */}
          <div className="space-y-6">
            
            {/* SCAN CARD */}
            <div className="bg-white rounded-2xl p-6 border">
              <div className="grid grid-cols-2 gap-6 items-center">
                
                <div className="flex justify-center">
                  <div className="w-40 h-52 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <span className="text-indigo-500 text-3xl">Rx</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Scan Prescription
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Upload or capture your prescription and get AI-powered analysis.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <ScanBtn icon={Camera} label="Camera" />
                    <ScanBtn icon={Upload} label="Upload" />
                    <ScanBtn icon={Mic} label="Voice" />
                  </div>
                </div>
              </div>
            </div>

            {/* RISK + SUMMARY */}
            <div className="grid grid-cols-[300px_1fr] gap-6">
              
              <div className="bg-white p-6 rounded-2xl border text-center">
                <div className="text-sm font-medium mb-4">
                  Prescription Risk Score
                </div>
                <div className="text-4xl font-bold text-orange-500">
                  7.5
                </div>
                <div className="text-sm text-orange-500 mt-2">
                  Moderate Risk
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border">
                <h3 className="font-semibold mb-2">
                  AI Summary (In Simple Words)
                </h3>
                <p className="text-sm text-gray-500">
                  Your prescription has some important points. Some medicines may interact. Please consult doctor if needed.
                </p>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-2xl border">
              <div className="p-5 font-semibold">
                Your Medicines
              </div>

              <table className="w-full text-sm">
                <thead className="text-gray-400 text-xs">
                  <tr>
                    <th className="p-4 text-left">Medicine</th>
                    <th>Purpose</th>
                    <th>When</th>
                    <th>Safety</th>
                  </tr>
                </thead>
                <tbody>
                  <Row name="Metformin 500mg" status="Safe" />
                  <Row name="Amoxicillin 500mg" status="Caution" />
                  <Row name="Ibuprofen 400mg" status="High Risk" />
                </tbody>
              </table>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            
            <div className="bg-white p-5 rounded-2xl border">
              <div className="flex justify-between mb-3">
                <span className="font-semibold">Today's Schedule</span>
                <span className="text-indigo-500 text-sm">View all</span>
              </div>

              <ScheduleRow time="8:00 AM" name="Metformin" />
              <ScheduleRow time="1:00 PM" name="Amoxicillin" />
            </div>

            <div className="bg-white p-5 rounded-2xl border text-center">
              <div className="font-semibold mb-3">Adherence</div>
              <div className="text-3xl font-bold text-green-500">
                85%
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border">
              <div className="font-semibold mb-3">
                Nearby Pharmacies
              </div>

              <Pharmacy name="HealthPlus" />
              <Pharmacy name="LifeCare" />
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
    <div className="bg-gray-50 p-4 rounded-xl text-center cursor-pointer hover:bg-gray-100">
      <Icon className="mx-auto mb-2" size={20} />
      <div className="text-sm">{label}</div>
    </div>
  );
}

function Row({ name, status }) {
  return (
    <tr className="border-t">
      <td className="p-4">{name}</td>
      <td>—</td>
      <td>—</td>
      <td>{status}</td>
    </tr>
  );
}

function ScheduleRow({ time, name }) {
  return (
    <div className="flex justify-between py-2 text-sm">
      <span>{time}</span>
      <span>{name}</span>
    </div>
  );
}

function Pharmacy({ name }) {
  return (
    <div className="flex justify-between py-2 text-sm">
      <span>{name}</span>
      <Phone size={16} />
    </div>
  );
}
