import React from "react";
import { authOptions } from "@/app/(all)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Admin = async (): Promise<React.JSX.Element> => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/admin/dashbord");
  } else {
    redirect("/login");
  }
};

export default Admin;
