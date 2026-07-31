import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Wrench,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

const centers = [
  {
    name: "Dhaka EV Service Center",
    location: "Tejgaon",
    slot: "10:30 AM",
  },
  {
    name: "BYD Gulshan",
    location: "Gulshan 2",
    slot: "2:00 PM",
  },
  {
    name: "Uttara EV Care",
    location: "Sector 11",
    slot: "4:30 PM",
  },
];

export default function ServicePage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-500 via-emerald-500 to-green-700 px-4 sm:px-8 lg:px-12 py-14 text-white shadow-2xl">

          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-xl"></div>

          <div className="relative flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
                EV Service Center
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                Next Service
              </h1>

              <p className="mt-3 text-2xl">
                Scheduled in 21 Days
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                🔧 Vehicle Health Excellent
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <Wrench size={80} />

            </div>

          </div>

        </section>

        <div className="grid gap-8 lg:grid-cols-2">
                  {/* Booking Form */}

          <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Book Appointment
            </h2>

            <input
              placeholder="Vehicle Name"
              className="mb-5 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 outline-none focus:border-green-500"
            />

            <input
              placeholder="Preferred Date"
              className="mb-5 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 outline-none focus:border-green-500"
            />

            <select className="mb-5 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-800">

              <option>Battery Inspection</option>

              <option>Brake Service</option>

              <option>Motor Diagnostics</option>

              <option>Tyre Rotation</option>

              <option>Software Update</option>

            </select>

            <button className="w-full rounded-2xl bg-emerald-600 py-4 text-lg font-bold text-white transition hover:bg-emerald-700">

              Confirm Booking

            </button>

          </section>

          {/* Service Centers */}

          <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-slate-900">
              Available Centers
            </h2>

            <div className="mt-8 space-y-6">
                {centers.map((center) => (

  <div
    key={center.name}
    className="rounded-3xl border border-slate-200 bg-gray-50 p-6 transition duration-300 hover:border-green-300 hover:bg-green-50 hover:shadow-lg"
  >

    <h3 className="text-2xl font-bold text-slate-900">
      {center.name}
    </h3>

    <div className="mt-5 space-y-3 text-slate-600">

      <p className="flex items-center gap-2">

        <MapPin
          size={18}
          className="text-emerald-600"
        />

        {center.location}

      </p>

      <p className="flex items-center gap-2">

        <Clock
          size={18}
          className="text-emerald-600"
        />

        {center.slot}

      </p>

      <p className="flex items-center gap-2">

        <Calendar
          size={18}
          className="text-emerald-600"
        />

        Today

      </p>

    </div>

    <button className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">

      Book Here

    </button>

  </div>

))}

            </div>

          </section>

        </div>

      </div>

    </DashboardLayout>

  );
}