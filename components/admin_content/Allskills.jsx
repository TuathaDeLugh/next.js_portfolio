import React from 'react'
import { GrCpu } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import DelSkillBtn from '../Delete/DelSkillBtn';





export default function Allskills() {
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
                <div className='flex gap-2 '>
                    <input type="text" className='border rounded-full px-4 w-[95%] ' />
                    <div className="p-3 text-white text-3xl text-center inline-flex items-center justify-center w-10 h-10 mb-1 shadow-lg rounded-full bg-green-400 ">
                        <AiOutlinePlus size={20} />
                    </div>

                </div>
                <div className='pt-2 flex flex-wrap'>
                    <p className='flex w-max py-1 px-2 rounded-full text-white bg-green-400 uppercase last:mr-0 mr-2 mt-2'>
                        <span className="text-sm inline-block ">
                            Html
                        </span>
                        <DelSkillBtn />
                    </p>
                    <p className='flex w-max py-1 px-2 rounded-full text-white bg-green-400 uppercase last:mr-0 mr-2 mt-2'>
                        <span className="text-sm inline-block ">
                            CSS
                        </span>
                        <DelSkillBtn />
                    </p>
                </div>
            </div>
        </div>
    )
}
