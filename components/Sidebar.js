'use client';

import {
  Home,
  ScanLine,
  Pill,
  Bell,
  User,
  MessageSquare,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: ScanLine, label: 'Scan Prescription' },
  { icon: Pill, label: 'My Medicines' },
  { icon: Bell, label: 'Reminders' },
  { icon: User, label: 'Patient Profile' },
  { icon: MessageSquare, label: 'AI Assistant' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-100 px-6 py-6 flex flex-col min-h-screen">

      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-indigo-600">Lumi</h1>
        <p className="text-xs text-gray-500">AI Digital Pharmacist</p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <button
              key={idx}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm transition ${
                idx === 0
                  ? 'bg-indigo-100 text-indigo-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* BOTTOM CARD */}
      <div className="mt-auto pt-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-4 rounded-2xl">
          <p className="text-sm font-semibold">Hi! I'm Lumi ✨</p>
          <p className="text-xs opacity-90 mt-1 mb-3">
            Your AI Pharmacist assistant
          </p>
          <button className="w-full bg-white text-indigo-600 text-sm py-2 rounded-xl">
            Talk to Lumi
          </button>
        </div>
      </div>

    </aside>
  );
}
