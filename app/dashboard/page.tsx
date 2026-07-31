import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
  BatteryCharging,
  MapPinned,
  Wrench,
  ShieldCheck,
  Car,
  DollarSign,
  Leaf,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "Locate Charging",
    icon: MapPinned,
    href: "/stations",
  },
  {
    title: "Book Service",
    icon: Wrench,
    href: "/service",
  },
  {
    title: "Roadside Help",
    icon: Car,
    href: "/roadside",
  },
  {
    title: "Battery Health",
    icon: BatteryCharging,
    href: "/battery",
  },
  {
    title: "Fuel Savings",
    icon: DollarSign,
    href: "/fuel",
  },
  {
    title: "Environment",
    icon: Leaf,
    href: "/analytics",
  },
  {
    title: "Warranty",
    icon: ShieldCheck,
    href: "/warranty",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/settings",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

       <section className="rounded-[32px] bg-gradient-to-r from-green-500 to-green-600 p-8 text-white shadow-xl">
  <div className="flex items-center gap-8">

    <img
  src="/car.jpg"
  alt="BYD Seal"
  className="h-[280px] w-full max-w-[520px] rounded-[25px] object-cover"
/>

    <div>

      <p className="text-sm opacity-80">
        Vehicle Profile
      </p>

      <h1 className="mt-2 text-5xl font-bold">
        BYD Seal
      </h1>

      <p className="mt-2 text-lg">
        Premium Electric Sedan
      </p>

      <div className="mt-5 inline-flex rounded-full bg-white/20 px-5 py-2">
        ✔ Verified Vehicle • Since 2025
      </div>

    </div>

  </div>

  <div className="mt-8">

    <div className="grid grid-cols-4 rounded-3xl bg-white p-6 shadow-xl">

      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">85%</h2>
        <p className="text-gray-500">Battery</p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">380</h2>
        <p className="text-gray-500">KM</p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">412</h2>
        <p className="text-gray-500">Cycles</p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">2 Years</h2>
        <p className="text-gray-500">Warranty</p>
      </div>

    </div>

  </div>

</section>



        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
              >
                <Icon
                  size={32}
                  className="text-green-600"
                />

                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm font-medium text-green-600">
                  Open →
                </p>

              </Link>
            );
          })}

        </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold">
            Nearby Charging Stations
          </h2>

          <div className="mt-6 space-y-4">
                        <Station
              name="Gulshan Super Hub"
              distance="2.1 KM"
              status="6 Slots Available"
            />

            <Station
              name="Bashundhara EV Point"
              distance="4.8 KM"
              status="4 Slots Available"
            />

            <Station
              name="Uttara Fast Charger"
              distance="7.3 KM"
              status="8 Slots Available"
            />

          </div>

        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold">
            Vehicle Insights
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Insight
              title="Battery Temperature"
              value="29°C"
            />

            <Insight
              title="Charging Cycles"
              value="412"
            />

            <Insight
              title="AI Prediction"
              value="Excellent"
            />

            <Insight
              title="Next Service"
              value="21 Days"
            />

          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}

function Station({
  name,
  distance,
  status,
}: {
  name: string;
  distance: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-5">

      <div>

        <h3 className="font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {distance}
        </p>

      </div>

      <div className="text-right">

        <p className="text-sm font-semibold text-green-600">
          {status}
        </p>

        <Link
          href="/stations"
          className="mt-3 inline-block rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500"
        >
          Reserve
        </Link>

      </div>

    </div>
  );
}

function Insight({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-green-50 p-5">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-green-700">
        {value}
      </h3>

    </div>
  );
}