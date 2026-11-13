import getEmails from "@/controllers/email";
import getProjects from "@/controllers/project";
import React from "react";
import { IEmail, IProject } from "@/types";

export const TotalEmail = async (): Promise<React.JSX.Element> => {
  const emails: IEmail[] = await getEmails();
  return (
    <span className="font-mono font-extrabold text-2xl text-luxury-gold">
      {emails ? emails.length : 0}
    </span>
  );
};

export const TotalProject = async (): Promise<React.JSX.Element> => {
  const projects: IProject[] = await getProjects({ all: true });
  return (
    <span className="font-mono font-extrabold text-2xl text-pearl">
      {projects ? projects.length : 0}
    </span>
  );
};
