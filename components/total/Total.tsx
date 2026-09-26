import getEmails from "@/controllers/email";
import getProjects from "@/controllers/project";
import React from "react";
import { IEmail, IProject } from "@/types";

export const TotalEmail = async (): Promise<React.JSX.Element> => {
  const emails: IEmail[] = await getEmails();
  return (
    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
      {emails ? (
        <label className="font-semibold text-2xl">{emails.length}</label>
      ) : null}
    </div>
  );
};

export const TotalProject = async (): Promise<React.JSX.Element> => {
  const projects: IProject[] = await getProjects();
  return (
    <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
      {projects ? (
        <label className="font-semibold text-2xl">{projects.length}</label>
      ) : null}
    </div>
  );
};
