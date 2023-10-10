import React from 'react'
import { GrCpu } from "react-icons/gr";
import DelSkillBtn from '../Delete/DelSkillBtn';
import AddSkill from '../InsertForm/AddSkill';
import getSkills from '@/controllers/skill';



export default async function Allskills() {
    const skills = await getSkills();
    return (
        <div className='w-full lg:w-[34.5%] '>
            <div className='px-4 py-4 bg-white flex justify-between'>
                <div className=" rounded-lg flex ">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-1 shadow-lg rounded-full bg-white">
                        <GrCpu size={20} />

                    </div>
                    <h3
                        className={
                            "p-3 font-semibold text-xl "}
                    >
                        All Skills
                    </h3>
                </div>
            </div>
            <div className="p-3  block mx-2 rounded ">
                <AddSkill />
                <div className='pt-2 flex flex-wrap'>
                    {skills?.map((skill) => {
                            return (
                        <p key={skill._id} className='flex w-max py-1 px-2 rounded-full text-white bg-green-400 last:mr-0 mr-2 mt-2'>
                            <span className="text-sm inline-block ">
                                {skill.lang}
                            </span>
                            <DelSkillBtn id={skill._id} />
                        </p>
                            )
                    }
                    )
                    }
                </div>
            </div>
        </div>
    )
}
