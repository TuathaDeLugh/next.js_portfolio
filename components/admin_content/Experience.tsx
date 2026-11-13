import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import getExps from "@/controllers/exp";
import DelExpBtn from "../Delete/DelExpBtn";
import { IExperience } from "@/types";

const Experience = async (): Promise<React.JSX.Element> => {
  const experiences: IExperience[] = await getExps();

  const formatDate = (date?: string): string => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getEndDate = (endDate?: string): string => {
    if (!endDate || endDate.toLowerCase() === "present") {
      return "Present";
    }
    return formatDate(endDate);
  };

  return (
    <div className="w-full bg-carbon rounded-3xl border border-luxury-gold/15 shadow-xl overflow-hidden mb-8">
      {/* Header */}
      <div className="px-6 py-5 border-b border-luxury-gold/15 flex items-center justify-between bg-obsidian/60 flex-wrap gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-obsidian border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-md">
            <GrCertificate size={20} />
          </div>
          <div>
            <h3 className="font-bold text-pearl text-base sm:text-lg">
              Career Trajectory &amp; Engineering Roles
            </h3>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Professional history, systems leadership, and commercial responsibilities
            </p>
          </div>
        </div>
        <Link
          href="/admin/content/add/exp"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-md"
        >
          <FiPlus size={15} />
          <span>Add Milestone</span>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-obsidian/40 border-b border-luxury-gold/10 font-mono text-[11px] text-pearl-dim uppercase tracking-wider">
              <th className="px-6 py-4">Organization &amp; Domain</th>
              <th className="hidden sm:table-cell px-6 py-4">Engineering Role</th>
              <th className="hidden md:table-cell px-6 py-4">Location</th>
              <th className="hidden lg:table-cell px-6 py-4">Tenure</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-luxury-gold/10">
            {experiences?.map((exp) => (
              <tr
                key={exp._id}
                className="hover:bg-plate/40 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold text-pearl text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    {exp.orgName}
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-xs font-mono text-luxury-gold font-medium">
                  {exp.position}
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-xs text-pearl-dim font-mono">
                  {exp.address}
                </td>
                <td className="hidden lg:table-cell px-6 py-4">
                  <span className="px-2.5 py-1 rounded-lg bg-obsidian border border-luxury-gold/15 text-pearl-muted font-mono text-[11px]">
                    {formatDate(exp.duration?.start)} — {getEndDate(exp.duration?.end)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Link
                      href={`/admin/content/edit/exp/${exp._id}`}
                      className="p-2 rounded-lg text-pearl-dim hover:text-luxury-gold hover:bg-plate transition-colors"
                      title="Edit milestone"
                    >
                      <HiPencilAlt size={17} />
                    </Link>
                    <DelExpBtn id={exp._id} />
                  </div>
                </td>
              </tr>
            ))}
            {(!experiences || experiences.length === 0) && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-8 text-center text-pearl-dim font-mono text-xs"
                >
                  No career milestones registered.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
