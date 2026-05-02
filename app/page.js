'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ScanCard from '@/components/ScanCard';
import RiskScore from '@/components/RiskScore';
import MedicinesTable from '@/components/MedicinesTable';
import ChatAssistant from '@/components/ChatAssistant';

export default function HomePage() {
  const [analysisData, setAnalysisData] = useState({
    medicines: [],
    riskScore: 0,
    warnings: [],
  });

  return (
    <main className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />

      <section className="flex-1 p-8 space-y-8 overflow-y-auto">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScanCard onAnalysisComplete={setAnalysisData} />
          </div>

          <div>
            <RiskScore data={analysisData} />
          </div>
        </div>

        <MedicinesTable medicines={analysisData.medicines} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChatAssistant analysisData={analysisData} />
        </div>
      </section>
    </main>
  );
}
