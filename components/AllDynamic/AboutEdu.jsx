import getEdus from '@/controllers/edu';
import React, { Suspense } from 'react'
import { GrCertificate} from "react-icons/gr";

export default async function AboutEdu() {
    const edus = await getEdus();
    return(
        <>
        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <GrCertificate size={25} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Edjucation
            </h3>
        {
            edus?.map((edu) => {
                return (
                    <div key={edu._id}>
                    <Suspense fallback={<p>Loading</p>}>
                    
                    <div className="text-lg font-light leading-relaxed mt-4 mb-2 text-gray-600">
                    <h5 className="text-xl font-semibold">
                    {edu.degree}
                    </h5>
                    </div>
                    <p className="text-lg font-light leading-relaxed  text-gray-600">
                    {edu.place}
                    </p>
                    <p className="text-lg font-light leading-relaxed text-gray-600">
                    {edu.marks}
                    </p>
                    </Suspense>
                    </div>
                    )
                })}
                </>
        )
}
