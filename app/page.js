import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ScanCard from "@/components/ScanCard";
import RiskScore from "@/components/RiskScore";
import MedicinesTable from "@/components/MedicinesTable";
import SchedulePanel from "@/components/SchedulePanel";
import AdherenceCard from "@/components/AdherenceCard";
import PharmacyPanel from "@/components/PharmacyPanel";

export default function Home() {
  return (
    <div className="flex bg-[#f6f7fb] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        <Header />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 space-y-6">
            <ScanCard />
            <RiskScore />
            <MedicinesTable />
          </div>

          <div className="col-span-4 space-y-6">
            <SchedulePanel />
            <AdherenceCard />
            <PharmacyPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
