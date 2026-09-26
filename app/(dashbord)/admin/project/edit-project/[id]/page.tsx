import getSingleProject from "@/controllers/singleproject";
import EditProjectForm from "@/components/EditForm/EditProjectForm";
import React from "react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { IProject } from "@/types";

interface EditProjectProps {
  params: Promise<{ id: string }>;
}

const EditProject = async ({
  params,
}: EditProjectProps): Promise<React.JSX.Element> => {
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
    <div>
      <EditProjectForm project={project} />
    </div>
  );
};

export default EditProject;
