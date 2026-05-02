'use client';

import { Upload, Camera, Mic } from 'lucide-react';

export default function ScanCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      
      <h3 className="text-xl font-semibold mb-1">Scan Prescription</h3>
      <p className="text-sm text-gray-500 mb-6">
        Upload or capture your prescription and get AI-powered analysis.
      </p>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 flex items-center justify-between">

        {/* Left Illustration */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-sm">
            📄
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex gap-4">

          {/* Camera */}
          <button className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Camera size={22} className="text-indigo-500 mb-2" />
            <span className="text-xs text-gray-600">Scan</span>
          </button>

          {/* Upload */}
          <button className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Upload size={22} className="text-green-500 mb-2" />
            <span className="text-xs text-gray-600">Upload</span>
          </button>

          {/* Voice */}
          <button className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Mic size={22} className="text-purple-500 mb-2" />
            <span className="text-xs text-gray-600">Voice</span>
          </button>

        </div>
      </div>
    </div>
  );
}
