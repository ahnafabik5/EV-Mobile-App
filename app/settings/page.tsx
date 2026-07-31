import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Settings,
  Bell,
  Moon,
  MapPin,
  BatteryCharging,
  Globe,
  Shield,
  User,
} from "lucide-react";

const settings = [
  {
    title: "Dark Mode",
    icon: Moon,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
  {
    title: "Location Access",
    icon: MapPin,
  },
  {
    title: "Battery Alerts",
    icon: BatteryCharging,
  },
  {
    title: "Charging Reminder",
    icon: BatteryCharging,
  },
  {
    title: "Language",
    icon: Globe,
  },
  {
    title: "Privacy",
    icon: Shield,
  },
  {
    title: "Account Security",
    icon: User,
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-500 via-emerald-500 to-green-700 px-4 sm:px-8 lg:px-12 py-14 text-white shadow-2xl">

          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-xl"></div>

          <div className="relative flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
                Preferences
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                Settings
              </h1>

              <p className="mt-3 text-2xl">
                Personalize Your EV Experience
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                ⚙ Smart Preferences Enabled
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <Settings
                size={80}
                strokeWidth={1.5}
              />

            </div>

          </div>

        </section>
                {/* Settings */}

        <div className="grid gap-6 md:grid-cols-2">

          {settings.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="flex items-center justify-between rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                    <Icon
                      size={26}
                      className="text-green-600"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Enabled
                    </p>

                  </div>

                </div>

                <button className="rounded-full bg-green-600 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-green-700">

                  ON

                </button>

              </div>

            );

          })}

        </div>
              </div>

    </DashboardLayout>

  );
}