export interface ProjectImage {
  name: string;
  link: string;
}

export interface IProject {
  _id: string;
  title: string;
  info: string;
  technology: string;
  github: string;
  summary: string;
  image: ProjectImage;
  livedemo: string;
  archived?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IExperience {
  _id: string;
  orgName: string;
  address: string;
  position: string;
  duration: {
    start: string;
    end: string;
  };
  summary: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IService {
  _id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IStandard {
  _id: string;
  title: string;
  desc: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ISkill {
  _id: string;
  lang: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IEmail {
  _id: string;
  fullname: string;
  email: string;
  subject: string;
  details: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAbout {
  _id: string;
  summary?: string;
  image?: string;
  noofprojects?: string;
  yearofcodeing?: string;
  noofskills?: string;
  aboutme?: string;
  yearofexperience?: string;
  noofclients?: string;
  skills?: string;
  heading?: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password?: string;
  role?: string;
}

export interface UploadedFile {
  name: string;
  link: string;
}
