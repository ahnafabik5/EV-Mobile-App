import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Phone,
  MapPin,
  CarFront,
  ShieldAlert,
} from "lucide-react";

export default function RoadsidePage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-500 via-emerald-500 to-green-700 px-12 py-14 text-white shadow-2xl">

          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-xl"></div>

          <div className="relative flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
                24 / 7 Emergency Support
              </p>

              <h1 className="mt-2 text-7xl font-extrabold">
                Roadside Help
              </h1>

              <p className="mt-3 text-2xl">
                Assistance Anywhere in Bangladesh
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                🚗 Average Response Time • 18 Minutes
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <ShieldAlert
                size={80}
                strokeWidth={1.5}
              />

            </div>

          </div>

        </section>

        {/* Action Buttons */}

        <div className="grid gap-8 md:grid-cols-3">        <button className="rounded-[30px] bg-red-500 p-10 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl">

          <h2 className="text-3xl font-bold">
            Emergency SOS
          </h2>

          <p className="mt-3 text-red-100">
            Instant emergency request
          </p>

        </button>

        <button className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <Phone
            size={42}
            className="text-green-600"
          />

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Call Support
          </h2>

          <p className="mt-2 text-gray-500">
            24/7 customer assistance
          </p>

        </button>

        <button className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <MapPin
            size={42}
            className="text-green-600"
          />

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Share Location
          </h2>

          <p className="mt-2 text-gray-500">
            Send live GPS coordinates
          </p>

        </button>

      </div>

      {/* Request Summary */}

      <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

        <div className="flex items-center gap-4">

          <CarFront
            className="text-green-600"
            size={32}
          />

          <h2 className="text-3xl font-bold text-gray-900">
            Request Summary
          </h2>

        </div>

        <div className="mt-8 space-y-5">
            <Row
  title="Vehicle"
  value="BYD Seal"
/>

<Row
  title="Current Location"
  value="Dhaka, Bangladesh"
/>

<Row
  title="Estimated Arrival"
  value="18 Minutes"
/>

<Row
  title="Assigned Technician"
  value="Mohammad Rahman"
/>

<Row
  title="Support Status"
  value="On The Way"
/>

        </div>

      </section>

      {/* Emergency Services */}

      <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

        <h2 className="text-3xl font-bold text-gray-900">
          Available Emergency Services
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <Service title="Battery Jump Start" />

          <Service title="Emergency Towing" />

          <Service title="Flat Tyre Assistance" />

          <Service title="Charging Assistance" />

          <Service title="Lockout Support" />

          <Service title="Vehicle Inspection" />

        </div>

      </section>

    </div>

  </DashboardLayout>

);
}
function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 transition hover:border-green-300 hover:bg-green-50">

      <span className="text-lg font-semibold text-gray-700">
        {title}
      </span>

      <span className="text-xl font-bold text-green-600">
        {value}
      </span>

    </div>
  );
}

function Service({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">

        <ShieldAlert
          size={22}
          className="text-green-600"
        />

      </div>

      <span className="text-lg font-semibold text-gray-800">
        {title}
      </span>

    </div>
  );
}