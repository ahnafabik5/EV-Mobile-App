import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Earth,
  Trees,
  Recycle,
  Factory,
  Award,
  Target,
} from "lucide-react";

export default function EnvironmentalPage() {
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
                Environmental Impact
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                Green Future
              </h1>

              <p className="mt-3 text-2xl">
                Driving Towards Sustainable Transportation
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                🌱 Every Drive Makes a Difference
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <Earth
                size={80}
                strokeWidth={1.5}
              />

            </div>

          </div>

        </section>

        {/* Statistics */}

        <div className="grid gap-8 md:grid-cols-3">

          <Card
            icon={<Earth size={40} className="text-blue-500" />}
            title="EV Adoption"
            value="14.8%"
            desc="Estimated adoption in major cities."
          />

          <Card
            icon={<Factory size={40} className="text-orange-500" />}
            title="CO₂ Saved"
            value="248 KG"
            desc="Carbon emission prevented."
          />

          <Card
            icon={<Trees size={40} className="text-green-600" />}
            title="Trees Saved"
            value="11"
            desc="Equivalent environmental impact."
          />

        </div>
                {/* Sustainability */}

        <div className="grid gap-8 lg:grid-cols-2">

          <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Sustainability Goals
            </h2>

            <p className="mt-2 text-gray-500">
              Track Bangladesh's green transportation initiatives.
            </p>

            <div className="mt-8 space-y-5">

              <Goal
                icon={<Recycle className="text-green-600" />}
                title="Reduce Fossil Fuel Usage"
                status="On Track"
              />

              <Goal
                icon={<Trees className="text-green-600" />}
                title="Cleaner Urban Air"
                status="Improving"
              />

              <Goal
                icon={<Target className="text-green-600" />}
                title="2030 Green Transport Vision"
                status="In Progress"
              />

            </div>

          </section>

          {/* Achievement */}

          <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Achievement
            </h2>

            <div className="mt-10 flex flex-col items-center">

              <Award
                size={90}
                className="text-yellow-500"
              />

              <h3 className="mt-6 text-3xl font-bold text-gray-900">
                Green Driver
              </h3>

              <p className="mt-4 max-w-md text-center leading-7 text-gray-600">
                Your driving habits help reduce emissions,
                improve air quality and support a greener
                future for Bangladesh.
              </p>

              <div className="mt-8 w-full">

                <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">

                  <span>Eco Progress</span>

                  <span>92%</span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                  <div className="h-full w-[92%] rounded-full bg-green-600"></div>

                </div>

              </div>

            </div>

          </section>

        </div>
              </div>

    </DashboardLayout>

  );
}
function Card({
  icon,
  title,
  value,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-5xl font-extrabold tracking-tight text-green-600">
        {value}
      </p>

      <p className="mt-3 leading-7 text-gray-600">
        {desc}
      </p>

    </div>
  );
}

function Goal({
  icon,
  title,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
          {icon}
        </div>

        <span className="text-lg font-semibold text-gray-800">
          {title}
        </span>

      </div>

      <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
        {status}
      </span>

    </div>
  );
}