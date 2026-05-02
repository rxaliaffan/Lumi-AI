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
  { icon: MessageSquare, label: 'AI Chat Assistant' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-100 px-6 py-6 flex flex-col min-h-screen">

      {/* 🔷 Logo */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-lg">
            ✦
          </div>
          <div>
            <h1 className="text-xl font-semibold">Lumi</h1>
            <p className="text-xs text-gray-500">AI Digital Pharmacist</p>
          </div>
        </div>
      </div>

      {/* 🔷 Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <button
              key={idx}
              className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition-all text-sm ${
                idx === 0
                  ? 'bg-indigo-100 text-indigo-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 🔷 Bottom AI Card */}
      <div className="mt-auto pt-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-5 rounded-2xl relative overflow-hidden">

          <p className="text-sm font-semibold mb-1">
            Hi! I'm Lumi ✨
          </p>

          <p className="text-xs opacity-90 mb-4">
            Your AI Pharmacist. How can I help you today?
          </p>

          <button className="w-full bg-white text-indigo-600 text-sm font-medium py-2 rounded-xl">
            🎤 Talk to Lumi
          </button>

        </div>
      </div>

    </aside>
  );
}
