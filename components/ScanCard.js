'use client';

import { Upload, Camera, Mic } from 'lucide-react';

export default function ScanCard({ onAnalysisComplete }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

      {/* Header */}
      <h3 className="text-lg font-semibold mb-1">Scan Prescription</h3>
      <p className="text-sm text-gray-500 mb-6">
        Upload or scan your prescription for AI analysis
      </p>

      {/* Main Container */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 flex items-center justify-between">

        {/* LEFT SIDE (IMAGE AREA) */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">
            📄
          </div>
        </div>

        {/* RIGHT SIDE (BUTTONS GRID) */}
        <div className="flex gap-4">

          {/* CAMERA (PRIMARY) */}
          <button className="w-24 h-24 bg-indigo-500 text-white rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
            <Camera size={22} className="mb-2" />
            <span className="text-xs font-medium">Scan</span>
          </button>

          {/* UPLOAD */}
          <label className="w-24 h-24 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm hover:shadow-md cursor-pointer transition">
            <Upload size={22} className="mb-2 text-green-500" />
            <span className="text-xs text-gray-600">Upload</span>
            <input type="file" className="hidden" />
          </label>

          {/* VOICE */}
          <button className="w-24 h-24 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition">
            <Mic size={22} className="mb-2 text-purple-500" />
            <span className="text-xs text-gray-600">Voice</span>
          </button>

        </div>
      </div>
    </div>
  );
}
