import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import NavBar from "@/components/Navbar";
import ToastCont from "@/components/ToastCont";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";
import LoginDesign from "@/components/loginDesign";
import { PageTransitionProvider } from "@/components/transitions";
import GsapGlobalOrchestrator from "@/components/animations/GsapGlobalOrchestrator";
import CustomCursor from "@/components/creative/CustomCursor";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import React from "react";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090807",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Umang Sailor — Full-Stack Software Engineer & Creative Developer",
  description:
    "Portfolio of Umang Sailor: Full-Stack Software Engineer specializing in React 19, Next.js, TypeScript, distributed systems, and performance-driven motion design.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({
  children,
}: RootLayoutProps): Promise<React.JSX.Element> => {
  return (
    <html lang="en" className={`dark ${sansFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen bg-obsidian text-pearl font-sans selection:bg-luxury-gold selection:text-obsidian antialiased">
        <SessionProvider>
          <PageTransitionProvider>
            <CustomCursor />
            <GsapGlobalOrchestrator />
            <NavBar />
            <ToastCont />
            <LoginDesign>{children}</LoginDesign>
            <Footer />
          </PageTransitionProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
