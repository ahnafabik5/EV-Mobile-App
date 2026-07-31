"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />


      <div className="mx-auto flex max-w-[1600px]">


        {/* Desktop Sidebar */}

        <aside className="hidden lg:block">

          <Sidebar />

        </aside>



        {/* Mobile Sidebar Overlay */}

        {sidebarOpen && (

          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

        )}



        {/* Mobile Sidebar */}

        <aside
          className={`
            fixed left-0 top-0 z-50 h-full w-72
            transform bg-white shadow-2xl
            transition-transform duration-300
            lg:hidden
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >

          <Sidebar />

        </aside>



        {/* Content */}

        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">

          {children}

        </main>


      </div>


    </div>
  );
}