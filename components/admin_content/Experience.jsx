import React from "react";
import { GrCertificate } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import getExps from "@/controllers/exp";
import DelExpBtn from "../Delete/DelExpBtn";

async function Experience() {
  const experiences = await getExps();
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  const getEndDate = (endDate) => {
    if (!endDate || endDate.toLowerCase() === 'present') {
      return 'Present';
    }
    return formatDate(endDate);
  };
  return (
    <div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm border border-blue-100">
            <GrCertificate size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Experience</h3>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Manage work history</p>
          </div>
        </div>
        <Link href="/admin/content/add/exp" className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5">
          <AiOutlinePlus size={18} />
          <span className="hidden sm:inline">Add New</span>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Organization</th>
              <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Position</th>
              <th className="hidden md:table-cell px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Address</th>
              <th className="hidden lg:table-cell px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {experiences?.map((exp) => (
              <tr key={exp._id} className="hover:bg-gray-50/50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900 text-sm">{exp.orgName}</div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600 font-medium">
                  {exp.position}
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-500">
                  {exp.address}
                </td>
                <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500 font-medium">
                  <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
                    {formatDate(exp.duration.start)} - {getEndDate(exp.duration.end)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/content/edit/exp/${exp._id}`}
                      className="p-2 rounded-lg text-blue-500 hover:bg-blue-50 transition-colors duration-150"
                      title="Edit"
                    >
                      <HiPencilAlt size={20} />
                    </Link>
                    <DelExpBtn id={exp._id} />
                  </div>
                </td>
              </tr>
            ))}
            {(!experiences || experiences.length === 0) && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-gray-500 text-sm">
                  No experience records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
