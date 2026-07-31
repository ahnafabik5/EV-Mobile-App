import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  ShieldCheck,
  Calendar,
  BadgeCheck,
  Download,
} from "lucide-react";

export default function WarrantyPage() {
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
                Vehicle Warranty
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                Active
              </h1>

              <p className="mt-3 text-2xl text-green-50">
                Valid Until 18 Dec 2031
              </p>

              <div className="mt-6 inline-flex rounded-full bg-white/20 px-6 py-3 font-semibold backdrop-blur">
                ✔ Premium Coverage Active
              </div>

            </div>

            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

              <ShieldCheck
                size={80}
                strokeWidth={1.5}
              />

            </div>

          </div>

        </section>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          <Card
            icon={<ShieldCheck className="text-emerald-600" />}
            title="Status"
            value="Active"
          />

          <Card
            icon={<Calendar className="text-emerald-600" />}
            title="Expiry Date"
            value="18 Dec 2031"
          />

          <Card
            icon={<BadgeCheck className="text-emerald-600" />}
            title="Coverage"
            value="Battery + Motor"
          />

        </div>
                {/* Included Coverage */}

        <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Included Coverage
          </h2>

          <p className="mt-2 text-slate-500">
            Your vehicle is protected under the manufacturer's premium warranty.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <Coverage title="Battery Pack" />
            <Coverage title="Electric Motor" />
            <Coverage title="Drive Unit" />
            <Coverage title="Power Electronics" />
            <Coverage title="Software Support" />
            <Coverage title="Charging System" />

          </div>

        </section>

        {/* Warranty Progress */}

        <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-bold text-slate-900">
              Warranty Progress
            </h2>

            <span className="font-bold text-emerald-600">
              78%
            </span>

          </div>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-gray-200">

            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>

          </div>

          <p className="mt-4 text-slate-500">
            Approximately 2 years of warranty coverage remaining.
          </p>

        </section>

        {/* Download */}

        <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Warranty Certificate
              </h2>

              <p className="mt-2 text-slate-500">
                Download your official warranty document.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">

              <Download size={20} />

              Download

            </button>

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
    <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-3xl font-extrabold leading-tight text-emerald-600">
        {value}
      </p>

    </div>
  );
}

function Coverage({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-gray-50 p-5 transition hover:border-green-300 hover:bg-green-50">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">

        <ShieldCheck
          size={22}
          className="text-emerald-600"
        />

      </div>

      <span className="text-lg font-semibold text-slate-800">
        {title}
      </span>

    </div>
  );
}