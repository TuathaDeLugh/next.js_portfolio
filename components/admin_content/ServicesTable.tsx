import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { PiTreeStructure } from "react-icons/pi";
import getServices from "@/controllers/service";
import DelServiceBtn from "../Delete/DelServiceBtn";
import { IService } from "@/types";

const ServicesTable = async (): Promise<React.JSX.Element> => {
  const services: IService[] = await getServices();

  return (
    <div className="w-full bg-carbon rounded-3xl border border-luxury-gold/15 shadow-xl overflow-hidden mb-8">
      {/* Header */}
      <div className="px-6 py-5 border-b border-luxury-gold/15 flex items-center justify-between bg-obsidian/60 flex-wrap gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-obsidian border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-md">
            <PiTreeStructure size={20} />
          </div>
          <div>
            <h3 className="font-bold text-pearl text-base sm:text-lg">
              Architectural Domains &amp; Specializations
            </h3>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Manage competencies showcased in the technical capabilities section
            </p>
          </div>
        </div>
        <Link
          href="/admin/content/add/service"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-md"
        >
          <FiPlus size={15} />
          <span>Add Domain</span>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-obsidian/40 border-b border-luxury-gold/10 font-mono text-[11px] text-pearl-dim uppercase tracking-wider">
              <th className="px-6 py-4">Domain Title</th>
              <th className="hidden sm:table-cell px-6 py-4">Technical Scope</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-luxury-gold/10">
            {services?.map((svc) => (
              <tr
                key={svc._id}
                className="hover:bg-plate/40 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold text-pearl text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    {svc.title}
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-xs text-pearl-muted max-w-lg leading-relaxed">
                  {svc.desc}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Link
                      href={`/admin/content/edit/service/${svc._id}`}
                      className="p-2 rounded-lg text-pearl-dim hover:text-luxury-gold hover:bg-plate transition-colors"
                      title="Edit domain"
                    >
                      <HiPencilAlt size={17} />
                    </Link>
                    <DelServiceBtn id={svc._id} />
                  </div>
                </td>
              </tr>
            ))}
            {(!services || services.length === 0) && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-8 text-center text-pearl-dim font-mono text-xs"
                >
                  No architectural domains indexed yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesTable;
