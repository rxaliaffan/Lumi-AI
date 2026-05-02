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
    <aside className="w-72 bg-white border-r border-gray-100 p-6 flex flex-col min-h-screen">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-indigo-600">Lumi</h1>
        <p className="text-sm text-gray-500">AI Digital Pharmacist</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <button
              key={idx}
              className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition-all text-sm ${
                idx === 1
                  ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom section (optional upgrade feel) */}
      <div className="mt-auto pt-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl text-sm">
          <p className="font-semibold">Upgrade to Pro</p>
          <p className="text-xs opacity-80 mt-1">
            Get advanced AI insights & tracking
          </p>
        </div>
      </div>
    </aside>
  );
}
