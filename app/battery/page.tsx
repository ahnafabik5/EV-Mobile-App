import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  BatteryCharging,
  Thermometer,
  Activity,
  Cpu,
  Zap,
  Gauge,
  BatteryFull,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function BatteryPage() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-black">
        Battery Health
      </h1>

      <p className="mt-2 text-gray-400">
        Live battery monitoring and diagnostics.
      </p>

      <div className="mt-10 space-y-8">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 p-10 text-white shadow-2xl">

  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"></div>

  <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10"></div>

  <div className="relative">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-green-100">
          Battery Health
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black">
          92%
        </h2>

        <p className="mt-2 text-xl">
          Excellent Condition
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md">
  <ShieldCheck size={18} />
  <span className="font-medium">
    Battery Certified
  </span>
</div>

      </div>

      <div className="rounded-full bg-white/20 p-8">

        <BatteryFull size={70} />

      </div>

    </div>

    <div className="mt-10 h-4 overflow-hidden rounded-full bg-white/20">

      <div className="h-full w-[92%] rounded-full bg-white"></div>

    </div>

    <div className="mt-4 flex justify-between text-sm">

      <span>0%</span>

      <span>Current Charge</span>

      <span>100%</span>

    </div>

  </div>

</div>

       <div className="grid gap-6 lg:grid-cols-3">

  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

    <Thermometer className="text-orange-500" size={42} />

    <h3 className="mt-5 text-xl font-bold text-slate-900">
      Temperature
    </h3>

    <p className="mt-3 text-5xl font-black text-orange-500">
      29°C
    </p>

    <p className="mt-2 text-slate-500">
      Normal Operating Range
    </p>

  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

    <Activity className="text-emerald-600" size={42} />

    <h3 className="mt-5 text-xl font-bold text-slate-900">
      Charge Cycles
    </h3>

    <p className="mt-3 text-5xl font-black text-emerald-600">
      412
    </p>

    <p className="mt-2 text-slate-500">
      Healthy Battery Usage
    </p>

  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

    <Zap className="text-yellow-500" size={42} />

    <h3 className="mt-5 text-xl font-bold text-slate-900">
      Charging Speed
    </h3>

    <p className="mt-3 text-5xl font-black text-yellow-500">
      120kW
    </p>

    <p className="mt-2 text-slate-500">
      DC Fast Charging
    </p>

  </div>

</div>

      </div>

      <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

        <div className="flex items-center gap-4">
            <div className="flex items-center justify-between">

  <div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
      <Cpu className="text-emerald-600" size={26} />
    </div>

    <div>

      <h2 className="text-3xl font-bold text-slate-900">
        AI Battery Prediction
      </h2>

      <p className="text-sm text-slate-500">
        Intelligent health analysis powered by AI
      </p>

    </div>

  </div>

  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
    AI Active
  </span>

</div>

          <Cpu className="text-cyan-400" />

          <h2 className="text-2xl font-bold">
            AI Battery Prediction
          </h2>

        </div>

        <div className="mt-8 space-y-5">

          <Prediction
            title="Estimated Battery Life"
            value="8.4 Years"
          />

          <Prediction
            title="Next Health Check"
            value="21 Days"
          />

          <Prediction
            title="Charging Efficiency"
            value="97%"
          />

          <Prediction
            title="Recommended Action"
            value="No Maintenance Required"
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

function Prediction({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-gray-50 px-6 py-5 transition hover:border-green-300 hover:bg-green-50">

      <div>

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

      </div>

      <span className="text-xl font-bold text-emerald-600">
        {value}
      </span>

    </div>
  );
}