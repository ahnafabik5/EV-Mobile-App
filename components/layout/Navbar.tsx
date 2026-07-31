"use client";

import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";

type Props = {
  onMenuClick?: () => void;
};

export default function Navbar({
  onMenuClick,
}: Props) {

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">

      <div className="flex h-20 items-center justify-between px-4 md:px-8">


        {/* Left Section */}

        <div className="flex items-center gap-4">


          {/* Mobile Menu Button */}

          <button
            onClick={onMenuClick}
            className="rounded-xl border border-slate-200 p-3 hover:bg-gray-100 lg:hidden"
          >

            <Menu size={24} />

          </button>


          <div>

            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              Dashboard
            </h2>

            <p className="hidden text-sm text-slate-500 sm:block">
              Welcome back to EV Care
            </p>

          </div>


        </div>


        {/* Right Section */}

        <div className="flex items-center gap-3">


          {/* Search */}

          <div className="relative hidden md:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />


            <input

              placeholder="Search..."

              className="
              w-72 rounded-xl
              border border-slate-200
              bg-white
              py-3 pl-11 pr-4
              text-slate-800
              outline-none
              shadow-md
              focus:border-green-500
              "

            />

          </div>



          {/* Notification */}

          <button className="rounded-xl border border-slate-200 p-3 hover:bg-gray-100">

            <Bell size={22} />

          </button>



          {/* Profile */}

          <button>

            <UserCircle
              size={38}
              className="text-emerald-600"
            />

          </button>


        </div>


      </div>

    </header>
  );
}