"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface LoginDesignProps {
  children: React.ReactNode;
}

const LoginDesign: React.FC<LoginDesignProps> = ({ children }) => {
  const path = usePathname();
  if (path === "/login") return <>{children}</>;
  return <div className="mx-auto min-h-[96vh]">{children}</div>;
};

export default LoginDesign;
