'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ScanCard from '@/components/ScanCard';
import RiskScore from '@/components/RiskScore';
import MedicinesTable from '@/components/MedicinesTable';

export default function HomePage() {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <main className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />

      <section className="flex-1 p-8 space-y-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScanCard onAnalysisComplete={setAnalysisData} />
          </div>

          <div>
            <RiskScore data={analysisData} />
          </div>
        </div>

        <MedicinesTable medicines={analysisData?.medicines || []} />
      </section>
    </main>
  );
}
