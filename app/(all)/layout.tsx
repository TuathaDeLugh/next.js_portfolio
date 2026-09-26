import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import NavBar from "@/components/Navbar";
import ToastCont from "@/components/ToastCont";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";
import LoginDesign from "@/components/loginDesign";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#f0fdf4",
};

export const metadata: Metadata = {
  title: "Umang Sailor",
  description:
    "Hello My name is Umang Sailor. This is my portfolio Website(PWA). My all projects and contact information is listed on this website",
  manifest: "/manifest.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({
  children,
}: RootLayoutProps): Promise<React.JSX.Element> => {
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider>
          <NavBar />
          <ToastCont />
          <LoginDesign>{children}</LoginDesign>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
