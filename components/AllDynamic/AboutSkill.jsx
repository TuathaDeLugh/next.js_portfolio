import getSkills from '@/controllers/skill';
import React from 'react'

export default async function AboutSkill() {
    const skills = await getSkills();
    return (
    <div className='pt-2 flex flex-wrap'>
                    {skills?.map((skill) => {
                            return (
                        <span key={skill._id} className='text-xs inline-block  w-max py-1 px-2 rounded-full text-white bg-green-400 last:mr-0 mr-2 mt-2'>
                            
                                {skill.lang}
                        </span>
                            )
                    }
                    )
                    }
                </div>
  )
}
