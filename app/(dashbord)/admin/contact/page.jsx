import React, { Suspense } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import DelmailBtn from '@/components/Delete/DelmailBtn';
import Link from 'next/link';
import { FiMessageSquare } from "react-icons/fi";
import getEmails from '@/controllers/email';
import { TotalEmail } from '@/components/total/Total';

async function AdminContact() {
  const emails = await getEmails();
  let i = 1;
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-sm">
              <FiMessageSquare size={18} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Messages</h2>
          </div>
          <p className="text-sm text-gray-500 ml-12">Contact form submissions from visitors</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-green-50 border border-green-100 text-center">
          <div className="text-xl font-bold text-green-600"><TotalEmail /></div>
          <div className="text-xs text-gray-500 font-medium">Total</div>
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {emails ? (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">#</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Preview</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {emails?.map((email) => (
                  <tr key={email._id} className="hover:bg-gray-50 transition-colors duration-100">
                    <Suspense fallback={<tr><td colSpan={6} className="py-4 text-center text-sm text-gray-400">Loading…</td></tr>}>
                      <td className="px-5 py-4 text-gray-400 text-xs font-medium">{i++}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900">{email.fullname}</td>
                      <td className="px-5 py-4 text-gray-500 hidden sm:table-cell">{email.email}</td>
                      <td className="px-5 py-4 text-gray-700">
                        <span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs font-medium">
                          {(email.subject).substring(0, 20)}{email.subject.length > 20 ? '…' : ''}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-400 hidden sm:table-cell text-xs">
                        {(email.details).substring(0, 30)}{email.details.length > 30 ? '…' : ''}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/contact/${email._id}`}
                            title="View"
                            className="w-8 h-8 rounded-lg bg-green-50 hover:bg-green-500 border border-green-100 flex items-center justify-center text-green-600 hover:text-white transition-all duration-150 cursor-pointer"
                          >
                            <AiOutlineEye size={15} />
                          </Link>
                          <DelmailBtn id={email._id} />
                        </div>
                      </td>
                    </Suspense>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-16 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <FiMessageSquare size={22} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No messages yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminContact;