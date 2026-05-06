import "../../globals.css"
import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Poppins } from 'next/font/google'
import ToastCont from '@/components/ToastCont'
import SessionAuth from "@/components/SessionAuth";

const font = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: "Admin — Umang Sailor",
  description: "Admin panel for Umang Sailor's portfolio website.",
  manifest: "/manifest.webmanifest",
}

export default async function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className + " bg-gray-50"}>
        <SessionProvider>
          <SessionAuth />
          <ToastCont />
          <Nav />
          {/* Content area — shifts right based on sidebar width */}
          <main className="ml-16 lg:ml-56 min-h-screen bg-gray-50 transition-all duration-300">
            {/* Top bar */}
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Admin Panel</p>
                <h1 className="text-lg font-bold text-gray-900">Umang Sailor</h1>
              </div>
              <a
                href="/"
                className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center gap-1.5 transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Site
              </a>
            </header>

            {/* Page content */}
            <div className="p-6">
              {children}
            </div>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}