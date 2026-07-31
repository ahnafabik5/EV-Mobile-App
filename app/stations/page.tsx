import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Search,
  MapPin,
  Zap,
} from "lucide-react";

const stations = [
  {
    name: "Gulshan Super Hub",
    area: "Gulshan 2",
    distance: "2.1 km",
    slots: 6,
    type: "DC Fast 120kW",
  },
  {
    name: "Bashundhara EV Point",
    area: "Bashundhara",
    distance: "4.8 km",
    slots: 4,
    type: "DC Fast 60kW",
  },
  {
    name: "Dhanmondi Charging",
    area: "Dhanmondi 27",
    distance: "5.3 km",
    slots: 9,
    type: "AC Type-2",
  },
  {
    name: "Uttara EV Center",
    area: "Sector 7",
    distance: "8.9 km",
    slots: 11,
    type: "Ultra Fast",
  },
];

export default function StationsPage() {
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
                EV Charging Network
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                Find Chargers
              </h1>

              <p className="mt-3 text-2xl">
                30+ Charging Stations Nearby
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                ⚡ Fast • Safe • Reliable
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <Zap
                size={80}
                strokeWidth={1.5}
              />

            </div>

          </div>

        </section>

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            placeholder="Search charging station..."
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-800 outline-none focus:border-green-500"
          />
                  </div>

        {/* Map */}

        <section className="flex h-72 items-center justify-center rounded-[32px] border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-100 shadow-xl">

          <div className="text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">

              <MapPin
                size={50}
                className="text-green-600"
              />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Bangladesh EV Charging Network
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              Interactive Map Preview
            </p>

          </div>

        </section>

        {/* Stations */}

        <div className="space-y-6">

          {stations.map((station) => (

            <div
              key={station.name}
              className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    {station.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {station.area}
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

                  {station.distance}

                </span>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">              <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

                {station.slots} Slots Available

              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">

                {station.type}

              </span>

            </div>

            <div className="mt-8 flex gap-4">

              <button className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">

                Reserve Slot

              </button>

              <button className="rounded-2xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600">

                Directions

              </button>

            </div>

          </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  );
}