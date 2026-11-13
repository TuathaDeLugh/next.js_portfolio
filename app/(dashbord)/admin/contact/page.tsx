import React from "react";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { FiMessageSquare, FiMail } from "react-icons/fi";
import DelmailBtn from "@/components/Delete/DelmailBtn";
import getEmails from "@/controllers/email";
import { TotalEmail } from "@/components/total/Total";
import { IEmail } from "@/types";

const AdminContact = async (): Promise<React.JSX.Element> => {
  const emails: IEmail[] = await getEmails();
  let i = 1;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-luxury-gold/15">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-carbon border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-lg">
            <FiMessageSquare size={22} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Inbound Transmissions &amp; Messages
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Direct inquiries and correspondences dispatched via public terminal
            </p>
          </div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-carbon border border-luxury-gold/15 text-center flex items-center gap-2">
          <span className="text-xs font-mono text-pearl-dim">TOTAL LOGGED:</span>
          <TotalEmail />
        </div>
      </div>

      {/* Table card */}
      <div className="bg-carbon rounded-3xl border border-luxury-gold/15 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          {emails && emails.length > 0 ? (
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-obsidian/60 border-b border-luxury-gold/15 font-mono text-[11px] text-pearl-dim uppercase tracking-wider">
                  <th className="px-5 py-4 w-12 text-center">#</th>
                  <th className="px-5 py-4">Sender Identity</th>
                  <th className="px-5 py-4 hidden sm:table-cell">Coordinates</th>
                  <th className="px-5 py-4">Subject</th>
                  <th className="px-5 py-4 hidden md:table-cell">Payload Preview</th>
                  <th className="px-5 py-4 text-right w-28">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-gold/10">
                {emails.map((email) => (
                  <tr
                    key={String(email._id)}
                    className="hover:bg-plate/40 transition-colors duration-150"
                  >
                    <td className="px-5 py-4 text-pearl-dim font-mono text-xs text-center">
                      {i++}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-obsidian border border-luxury-gold/20 flex items-center justify-center text-luxury-gold font-mono text-xs font-bold flex-shrink-0">
                          {email.fullname?.charAt(0).toUpperCase() || "?"}
                        </div>
                        <span className="font-semibold text-pearl text-sm truncate">
                          {email.fullname}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-pearl-dim font-mono text-xs hidden sm:table-cell">
                      <a
                        href={`mailto:${email.email}`}
                        className="hover:text-luxury-gold hover:underline flex items-center gap-1.5"
                      >
                        <FiMail size={12} className="text-luxury-gold" />
                        <span>{email.email}</span>
                      </a>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-lg bg-obsidian border border-luxury-gold/15 font-mono text-xs text-luxury-gold truncate block max-w-[200px]">
                        {email.subject || "No Subject"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-pearl-muted text-xs hidden md:table-cell max-w-xs">
                      <span className="line-clamp-1 leading-relaxed">
                        {email.details || "—"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/contact/${email._id}`}
                          title="Inspect Transmission"
                          className="w-8 h-8 rounded-lg bg-obsidian hover:bg-plate border border-luxury-gold/15 flex items-center justify-center text-luxury-gold transition-colors"
                        >
                          <AiOutlineEye size={16} />
                        </Link>
                        <DelmailBtn id={String(email._id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-luxury-gold/20 flex items-center justify-center mx-auto text-luxury-gold">
                <FiMessageSquare size={24} />
              </div>
              <div>
                <p className="text-pearl font-bold text-base">
                  No transmissions logged yet
                </p>
                <p className="text-pearl-dim font-mono text-xs mt-1">
                  Inbound inquiries from the contact terminal will appear here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
