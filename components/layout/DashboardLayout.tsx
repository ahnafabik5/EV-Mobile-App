"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="mx-auto flex max-w-[1600px]">

        <Sidebar />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>

      </div>

    </div>
  );
}