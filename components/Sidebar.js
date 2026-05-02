import {
  Home,
  ScanLine,
  Pill,
  Bell,
  FileText,
  MessageSquare,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: ScanLine, label: 'Scan Prescription' },
  { icon: Pill, label: 'My Medicines' },
  { icon: Bell, label: 'Reminders' },
  { icon: FileText, label: 'Health Records' },
  { icon: MessageSquare, label: 'AI Assistant' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-soft p-6 flex flex-col rounded-r-2xl min-h-screen">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary">Lumi</h1>
        <p className="text-sm text-slate-500">AI Digital Pharmacist</p>
      </div>

      <nav className="space-y-3">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition ${
              idx === 1
                ? 'bg-blue-50 text-primary font-semibold'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
