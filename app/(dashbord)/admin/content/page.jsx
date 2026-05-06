import Allskills from '@/components/admin_content/Allskills';

import Experience from '@/components/admin_content/Experience';
import React from 'react';
import { TbId } from "react-icons/tb";

function ContentPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-sm">
          <TbId size={18} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Website Content</h2>
          <p className="text-sm text-gray-500">Manage skills and experience displayed on About page</p>
        </div>
      </div>

      {/* Content sections */}
      <div className="grid gap-6">
        <Experience />

        <Allskills />
      </div>
    </div>
  );
}

export default ContentPage;