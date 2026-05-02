import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ScanCard from '../components/ScanCard';
import RiskScore from '../components/RiskScore';
import MedicinesTable from '../components/MedicinesTable';

// NEW components (you must create these next)
import SchedulePanel from '../components/SchedulePanel';
import AdherenceCard from '../components/AdherenceCard';
import PharmacyPanel from '../components/PharmacyPanel';
import ActionButtons from '../components/ActionButtons';

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-[#F8FAFC]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 p-8 space-y-8">
        
        {/* Header */}
        <Header />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Scan Card */}
            <ScanCard />

            {/* Risk + Adherence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RiskScore />
              <AdherenceCard />
            </div>

            {/* Medicines Table */}
            <MedicinesTable />

            {/* Action Buttons */}
            <ActionButtons />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <SchedulePanel />
            <PharmacyPanel />
          </div>

        </div>
      </section>
    </main>
  );
}
