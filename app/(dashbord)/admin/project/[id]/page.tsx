import React from "react";
import getSingleProject from "@/controllers/singleproject";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import DelProjBtn from "@/components/Delete/DelProjBtn";
import Image from "next/image";
import { IProject } from "@/types";

interface DetailsProps {
  params: Promise<{ id: string }>;
}

const Details = async ({ params }: DetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const project: IProject | null = await getSingleProject(id);

  if (!project) {
    return (
      <div className="w-full px-4 py-8">
        <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
          <p className="text-gray-500 mb-4">Project not found</p>
          <Link
            href="/admin/project"
            className="inline-flex items-center gap-2 text-green-600 hover:underline font-medium"
          >
            <IoChevronBack size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="rounded-t mb-0 px-6 py-6 border-b border-gray-100">
          <div className="text-center flex justify-between items-center">
            <Link href="/admin/project" title="back">
              <IoChevronBack className="text-black" size={25} />
            </Link>
            <h6 className="text-black text-xl font-bold">{project.title}</h6>
            <DelProjBtn
              id={String(project._id)}
              name={project.image?.name}
            />
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10">
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              {project.image?.link && (
                <div className="flex justify-center uppercase text-black font-bold my-7">
                  <Image
                    width={1200}
                    height={900}
                    className="rounded-lg border shadow-md max-h-[500px] object-cover"
                    src={project.image.link}
                    alt={project.title}
                  />
                </div>
              )}

              <div className="block uppercase text-black text-sm font-bold my-7 flex flex-wrap gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-slate-500 text-white rounded px-6 py-[0.58rem] hover:bg-slate-800 transition-colors"
                  >
                    Github
                  </Link>
                )}
                {project.livedemo && project.livedemo !== "/" && (
                  <Link
                    href={project.livedemo}
                    target="_blank"
                    className="bg-blue-500 text-white rounded px-4 py-[0.58rem] hover:bg-blue-800 transition-colors"
                  >
                    Live Demo
                  </Link>
                )}
              </div>

              <div className="block uppercase text-black font-bold my-7">
                Created with :{" "}
                <label className="font-normal">{project.technology}</label>
              </div>

              <div
                className="data w-full bg-white text-justify prose max-w-none"
                dangerouslySetInnerHTML={{ __html: project.summary }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
