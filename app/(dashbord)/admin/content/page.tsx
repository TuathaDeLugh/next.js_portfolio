import React from "react";
import Allskills from "@/components/admin_content/Allskills";
import Experience from "@/components/admin_content/Experience";
import ServicesTable from "@/components/admin_content/ServicesTable";
import StandardsTable from "@/components/admin_content/StandardsTable";
import { TbId } from "react-icons/tb";

const ContentPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-luxury-gold/15">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-carbon border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-lg">
            <TbId size={22} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Engineering Content &amp; Telemetry
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Manage competencies, standards, specializations, and career milestones
            </p>
          </div>
        </div>
        <div className="font-mono text-[11px] text-pearl-dim">
          SECTION: ARCHITECTURAL DATA
        </div>
      </div>

      {/* Content sections */}
      <div className="grid gap-6">
        <ServicesTable />
        <StandardsTable />
        <Experience />
        <Allskills />
      </div>
    </div>
  );
};

export default ContentPage;
