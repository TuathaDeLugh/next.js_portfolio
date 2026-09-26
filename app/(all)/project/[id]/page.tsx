import React from "react";
import getSingleProject from "@/controllers/singleproject";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoChevronBack } from "react-icons/io5";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

const Details = async ({
  params,
}: ProjectDetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const project = await getSingleProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto min-h-[78vh] bg-white">
      <div className="relative bg-green-50 -mt-2 pt-24 pb-36 -z-10" />
      <div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-16">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="rounded-t mb-0 px-6 py-6 border-b border-gray-100">
              <div className="text-center flex justify-between items-center">
                <TransitionLink
                  href="/project"
                  title="back"
                  className="cursor-pointer p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <IoChevronBack className="text-gray-800" size={24} />
                </TransitionLink>
                <h1 className="text-gray-900 text-xl font-bold">{project.title}</h1>
                <div />
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10">
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <div className="flex justify-center uppercase text-gray-900 font-bold my-7">
                    <Image
                      width={1200}
                      height={900}
                      className="rounded-2xl border border-gray-100 shadow-md object-contain"
                      src={project.image?.link || "/code.png"}
                      alt={project.title}
                    />
                  </div>

                  <div className="block uppercase text-gray-900 text-sm font-bold my-7">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 text-white rounded-xl px-6 py-2.5 hover:bg-slate-900 transition-colors mr-3 cursor-pointer inline-block"
                    >
                      Github
                    </a>
                    {project.livedemo && project.livedemo !== "/" ? (
                      <a
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white rounded-xl px-5 py-2.5 hover:bg-green-600 transition-colors cursor-pointer inline-block shadow-sm"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>

                  <div className="block text-gray-900 font-bold my-7">
                    Created with :{" "}
                    <span className="font-semibold text-green-600 ml-1">{project.technology}</span>
                  </div>

                  <div
                    className="data w-full bg-white text-justify"
                    dangerouslySetInnerHTML={{ __html: project.summary }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
