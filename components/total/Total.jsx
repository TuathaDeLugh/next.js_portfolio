import getEmails from '@/controllers/email';
import getProjects from '@/controllers/project';
import React from 'react'

export async function TotalEmail() {
    const emails = await getEmails();
  return (
    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <label className=' font-semibold text-2xl'>{(emails).length}</label>
          </div>
  )
}

export async function TotalProject() {
    const projects = await getProjects();
  return (
    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <label className=' font-semibold text-2xl'>{(projects).length}</label>
          </div>
  )
}
