import React, { Suspense } from "react";
import { GrCertificate } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import DelEduBtn from "../Delete/DelEduBtn";
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
    <div className="w-full p-1">
      {/* Header */}
      <div className="w-full px-4 py-4 bg-white flex justify-between">
        <div className="rounded-lg flex">
          <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-1 shadow-lg rounded-full bg-white">
            <GrCertificate size={20} />
          </div>
          <h3 className="p-3 font-semibold text-xl">Experience</h3>
        </div>
        <div className="p-3 text-white text-3xl text-center inline-flex items-center justify-center w-12 h-12 mb-1 shadow-lg rounded-full bg-green-400">
          <Link href="/admin/content/add/exp">
            <AiOutlinePlus size={20} />
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="block w-full py-4 rounded overflow-x-auto">
        <table className="items-center w-full bg-transparent">
          <thead>
            <tr className="border border-l-0 border-r-0 bg-slate-200/50">
              <th className="px-6 py-3 text-xs md:text-sm uppercase font-semibold text-left w-2/12">
                Organization
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-xs md:text-sm uppercase font-semibold text-left w-2/12">
                Position
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-xs md:text-sm uppercase font-semibold text-left w-2/12">
                Address
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-xs md:text-sm uppercase font-semibold text-left w-3/12">
                Duration
              </th>
              <th className="px-6 py-3 text-xs md:text-sm uppercase font-semibold text-left w-1/12">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {experiences?.map((exp) => (
              <tr key={exp._id} className="border border-l-0 border-r-0">
                <td className="table-cell pl-6 pr-1 py-3 text-xs md:text-sm text-left">
                  {exp.orgName}
                </td>
                <td className="hidden sm:table-cell pl-6 pr-1 py-3 text-xs md:text-sm text-left">
                  {exp.position}
                </td>
                <td className="hidden sm:table-cell pl-6 pr-1 py-3 text-xs md:text-sm text-left">
                  {exp.address}
                </td>
                <td className="hidden sm:table-cell pl-6 pr-1 py-3 text-xs md:text-sm text-left">
                  {formatDate(exp.duration.start)} - {getEndDate(exp.duration.end)}
                </td>
                <td className="table-cell px-6 py-3 text-xs md:text-sm text-left">
                  <div className="flex">
                    <Link
                      href={`/admin/content/edit/exp/${exp._id}`}
                      title="Edit"
                    >
                      <HiPencilAlt className="text-blue-400" size={25} />
                    </Link>
                    <p className="px-2"></p>
                    <DelExpBtn id={exp._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
