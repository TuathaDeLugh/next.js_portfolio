import getExps from "@/controllers/exp";
import React from "react";

export default async function AboutExp() {
  const exps = await getExps();
  console.log(exps);

  return (
    <>
      <h3 className="py-3 font-semibold text-2xl text-gray-800">Experience</h3>
      {exps?.map((exp) => {
        return (
          <div
            key={exp._id}
            className="bg-white/70 shadow-md rounded-lg p-4 mb-4"  
          >
            <div className="flex justify-between items-center text-lg font-light leading-relaxed text-gray-600">
              <h4 className="text-xl font-semibold leading-relaxed">{exp.orgName}</h4>
              <span className="text-sm text-gray-500">
                {new Date(exp.duration.start).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                –
                {exp.duration.end === "Present"
                  ? "Present"
                  : new Date(exp.duration.end).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{exp.address}</p>
            <p className="mt-2 text-gray-600 text-lg leading-relaxed">{exp.position}</p>
            <p className="mt-1 text-gray-700 leading-relaxed">{exp.summary}</p>
          </div>
        );
      })}
    </>
  );
}
