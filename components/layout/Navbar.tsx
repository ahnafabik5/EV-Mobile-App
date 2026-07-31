"use client";

import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            Welcome back to EV Care
          </p>

        </div>

        <div className="flex items-center gap-5">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search..."
             className="w-72 rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-gray-800 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />

          </div>

          <button className="rounded-xl border border-gray-200 p-3 hover:bg-gray-100">

            <Bell size={22} />

          </button>

          <button className="rounded-full">

            <UserCircle
              size={42}
              className="text-green-600"
            />

          </button>

        </div>

      </div>

    </header>
  );
}