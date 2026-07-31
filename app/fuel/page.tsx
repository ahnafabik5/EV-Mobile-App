import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  TrendingUp,
  Fuel,
  Wallet,
  CircleDollarSign,
  Car,
  Zap,
  Leaf,
} from "lucide-react";

export default function FuelPage() {
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
                Monthly Fuel Savings
              </p>

              <h1 className="mt-2 text-8xl font-extrabold tracking-tight leading-none">
                ৳6,300
              </h1>

              <p className="mt-2 text-3xl font-semibold tracking-tight text-green-50">
                Saved This Month
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-semibold backdrop-blur-md">
                ⚡ 72% Lower Running Cost
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <Wallet size={80} />

            </div>

          </div>

        </section>

        {/* Stats */}

        <div className="grid gap-6 grid-cols-2 xl:grid-cols-4">

          <Card
            icon={<Fuel className="text-orange-500" size={40} />}
            title="Petrol Saved"
            value="185 L"
          />

          <Card
            icon={<Wallet className="text-green-600" size={40} />}
            title="Monthly Savings"
            value="৳6,300"
          />

          <Card
            icon={<CircleDollarSign className="text-cyan-500" size={40} />}
            title="Yearly Savings"
            value="৳75,600"
          />

          <Card
            icon={<TrendingUp className="text-purple-500" size={40} />}
            title="Efficiency"
            value="72%"
          />

        </div>

        {/* Cost Comparison */}

        <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Cost Comparison
          </h2>

          <p className="mt-2 text-gray-500">
            Compare monthly expenses between petrol and electric vehicles.
          </p>

          <div className="mt-8 space-y-4">

            <Row
              title="Petrol Vehicle / Month"
              value="৳8,400"
            />

            <Row
              title="Electric Vehicle / Month"
              value="৳2,100"
            />

            <Row
              title="Monthly Savings"
              value="৳6,300"
            />

            <Row
              title="Annual Savings"
              value="৳75,600"
            />

          </div>

        </section>

        {/* Tips */}

        <section className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Smart Saving Tips
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <Tip
              icon={<Zap className="text-yellow-500" />}
              title="Smart Charging"
              desc="Charge during off-peak hours to reduce electricity cost."
            />

            <Tip
              icon={<Leaf className="text-green-600" />}
              title="Eco Driving"
              desc="Smooth acceleration increases driving efficiency."
            />

            <Tip
              icon={<Car className="text-blue-500" />}
              title="Tyre Pressure"
              desc="Maintain correct tyre pressure for maximum range."
            />

          </div>

        </section>

      </div>
    </DashboardLayout>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="min-h-[240px] rounded-[30px] border border-gray-200 bg-white p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-bold leading-tight tracking-tight text-gray-900">
        {title}
      </h2>

      <p className="mt-4 whitespace-nowrap text-4xl font-extrabold tracking-tight leading-none text-green-600">
        {value}
      </p>

    </div>
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

      <span className="font-medium text-gray-600">
        {title}
      </span>

      <span className="text-xl font-bold text-green-600">
        {value}
      </span>

    </div>
  );
}

function Tip({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-green-50 p-6">

      <div className="mb-5 text-3xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {desc}
      </p>

    </div>
  );
}