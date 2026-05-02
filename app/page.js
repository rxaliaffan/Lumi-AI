import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ScanCard from '@/components/ScanCard';
import RiskScore from '@/components/RiskScore';
import MedicinesTable from '@/components/MedicinesTable';

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />

      <section className="flex-1 p-8 space-y-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScanCard />
          </div>

          <div>
            <RiskScore />
          </div>
        </div>

        <MedicinesTable />
      </section>
    </main>
  );
}
