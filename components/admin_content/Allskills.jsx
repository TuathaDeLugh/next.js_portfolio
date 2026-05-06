import React from 'react'
import { GrCpu } from "react-icons/gr";
import DelSkillBtn from '../Delete/DelSkillBtn';
import AddSkill from '../InsertForm/AddSkill';
import getSkills from '@/controllers/skill';



export default async function Allskills() {
    const skills = await getSkills();
    return (
        <div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm border border-indigo-100">
                        <GrCpu size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">All Skills</h3>
                        <p className="text-xs text-gray-500 font-medium mt-0.5">Manage technologies</p>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <AddSkill />
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6 bg-gray-50/30">
                <div className='flex flex-wrap gap-2.5'>
                    {skills?.map((skill) => (
                        <div key={skill._id} className='group flex items-center gap-1.5 py-1.5 pl-3 pr-1.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-green-300 hover:shadow transition-all duration-200'>
                            <span className="text-sm font-semibold text-gray-700">
                                {skill.lang}
                            </span>
                            <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                                <DelSkillBtn id={skill._id} />
                            </div>
                        </div>
                    ))}
                    {(!skills || skills.length === 0) && (
                        <p className="text-gray-500 text-sm">No skills added yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
