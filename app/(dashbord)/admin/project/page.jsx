import Link from 'next/link'
import React, { Suspense } from 'react'
import getProjects from '@/controllers/project';
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { TotalProject } from '@/components/total/Total';

async function ProjectList() {
  const projects = await getProjects({ all: true });
  let i = 1;
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-sm">
              <TbReportAnalytics size={18} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Projects</h2>
          </div>
          <p className="text-sm text-gray-500 ml-12">Manage your portfolio projects</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-purple-50 border border-purple-100 text-center">
            <div className="text-xl font-bold text-purple-600"><TotalProject /></div>
            <div className="text-xs text-gray-500 font-medium">Total</div>
          </div>
          <Link
            href="/admin/project/addproject"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-sm transition-colors duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Project
          </Link>
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {projects ? (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">#</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Info</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects?.map((project) => (
                  <tr key={project._id} className="hover:bg-gray-50 transition-colors duration-100">
                    <Suspense fallback={<tr><td colSpan={4} className="py-4 text-center text-sm text-gray-400">Loading…</td></tr>}>
                      <td className="px-5 py-4 text-gray-400 text-xs font-medium">{i++}</td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-gray-900 capitalize">{project.title}</span>
                          {project.archived && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 w-fit">
                              Archived
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-500 hidden md:table-cell max-w-xs">
                        <span className="line-clamp-1">{project.info}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/project/edit-project/${project._id}`}
                            title="Edit"
                            className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-500 border border-blue-100 flex items-center justify-center text-blue-600 hover:text-white transition-all duration-150 cursor-pointer"
                          >
                            <HiPencilAlt size={15} />
                          </Link>
                          <Link
                            href={`/admin/project/${project._id}`}
                            title="View"
                            className="w-8 h-8 rounded-lg bg-green-50 hover:bg-green-500 border border-green-100 flex items-center justify-center text-green-600 hover:text-white transition-all duration-150 cursor-pointer"
                          >
                            <AiOutlineEye size={15} />
                          </Link>
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
                <TbReportAnalytics size={22} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No projects yet. Add your first one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;