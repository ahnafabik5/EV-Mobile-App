"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="mx-auto flex max-w-[1600px]">

        {/* Desktop Sidebar */}

        <aside className="hidden lg:block">

          <Sidebar />

        </aside>

        {/* Main Content */}

        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}