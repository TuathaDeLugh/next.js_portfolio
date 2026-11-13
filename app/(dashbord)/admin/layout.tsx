import "@/app/globals.css";
import React from "react";
import SessionProvider from "@/components/SessionProvider";
import ToastCont from "@/components/ToastCont";
import SessionAuth from "@/components/SessionAuth";
import AdminShell from "@/components/admin/AdminShell";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ThemeScript from "@/components/theme/ThemeScript";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";

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
  themeColor: "#070709",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Admin Command Center — Umang Sailor",
  description:
    "Executive control plane for Umang Sailor's engineering portfolio, systems architecture, and production deployments.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = async ({
  children,
}: AdminLayoutProps): Promise<React.JSX.Element> => {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-obsidian text-pearl font-sans selection:bg-luxury-gold selection:text-obsidian antialiased transition-colors duration-200">
        <SessionProvider>
          <ThemeProvider>
            <SessionAuth />
            <ToastCont />
            <AdminShell>{children}</AdminShell>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default AdminLayout;
