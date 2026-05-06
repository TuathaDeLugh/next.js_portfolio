import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { PiListChecksBold } from "react-icons/pi";
import getStandards from "@/controllers/standard";
import DelStandardBtn from "../Delete/DelStandardBtn";

export default async function StandardsTable() {
  const standards = await getStandards();

  return (
    <div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm border border-amber-100">
            <PiListChecksBold size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Engineering Standards</h3>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Manage "Standards" bullet points</p>
          </div>
        </div>
        <Link href="/admin/content/add/standard" className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5">
          <AiOutlinePlus size={18} />
          <span className="hidden sm:inline">Add New</span>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {standards?.map((std) => (
              <tr key={std._id} className="hover:bg-gray-50/50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900 text-sm">{std.title}</div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600 font-medium whitespace-normal max-w-md">
                  {std.desc}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/content/edit/standard/${std._id}`}
                      className="p-2 rounded-lg text-blue-500 hover:bg-blue-50 transition-colors duration-150"
                      title="Edit"
                    >
                      <HiPencilAlt size={20} />
                    </Link>
                    <DelStandardBtn id={std._id} />
                  </div>
                </td>
              </tr>
            ))}
            {(!standards || standards.length === 0) && (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500 text-sm">
                  No standards found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
