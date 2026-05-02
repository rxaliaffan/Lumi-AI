'use client';

import { useState } from 'react';
import { Upload, Camera, Mic } from 'lucide-react';

export default function ScanCard({ onAnalysisComplete }) {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('user_id', 'demo-user');

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onAnalysisComplete(result);
      } else {
        alert(result.error || 'Analysis failed');
      }
    } catch (error) {
      console.error(error);
      alert('Upload failed');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8">
      <h3 className="text-2xl font-semibold mb-3">Scan Your Prescription</h3>
      <p className="text-slate-500 mb-6">
        Upload, scan, or speak your prescription for AI-powered analysis.
      </p>

      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center bg-slate-50">
        <p className="text-slate-500 mb-6">
          Drag & drop prescription image or choose an option below
        </p>
  <div className="flex justify-center gap-4 flex-wrap">
          <label className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl cursor-pointer">
            <Upload size={18} />
            {loading ? 'Analyzing...' : 'Upload'}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          <button className="flex items-center gap-2 px-5 py-3 bg-slate-200 rounded-xl">
            <Camera size={18} /> Camera
          </button>

          <button className="flex items-center gap-2 px-5 py-3 bg-slate-200 rounded-xl">
            <Mic size={18} /> Voice
          </button>
        </div>
      </div>
    </div>
  );
}
