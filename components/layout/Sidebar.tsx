"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPinned,
  BatteryCharging,
  Wrench,
  ShieldCheck,
  Car,
  DollarSign,
  Leaf,
  Settings,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Charging", href: "/stations", icon: MapPinned },
  { name: "Battery", href: "/battery", icon: BatteryCharging },
  { name: "Service", href: "/service", icon: Wrench },
  { name: "Warranty", href: "/warranty", icon: ShieldCheck },
  { name: "Roadside", href: "/roadside", icon: Car },
  { name: "Fuel Savings", href: "/fuel", icon: DollarSign },
  { name: "Environment", href: "/analytics", icon: Leaf },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-gray-200 bg-white">

      <div className="border-b border-gray-200 p-6">

        <h1 className="text-2xl font-bold text-green-700">
          EV Care
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Smart Mobility
        </p>

      </div>

      <nav className="space-y-2 p-4">

        {menus.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-4 transition ${
                active
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-green-50"
              }`}
            >
              <Icon size={22} />
              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}