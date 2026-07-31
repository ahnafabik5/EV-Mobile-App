import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  CheckCircle,
  Calendar,
  Wrench,
  Receipt,
} from "lucide-react";

const history = [
  {
    service: "Battery Health Inspection",
    date: "12 Jul 2026",
    cost: "৳1,200",
    status: "Completed",
  },
  {
    service: "Brake Service",
    date: "28 Jun 2026",
    cost: "৳2,500",
    status: "Completed",
  },
  {
    service: "Software Update",
    date: "14 Jun 2026",
    cost: "Free",
    status: "Completed",
  },
  {
    service: "Tyre Rotation",
    date: "05 Jun 2026",
    cost: "৳900",
    status: "Completed",
  },
];

export default function HistoryPage() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-black">
        Maintenance History
      </h1>

      <p className="mt-2 text-gray-400">
        Previous maintenance records and completed services.
      </p>

      <div className="mt-10 space-y-6">

        {history.map((item) => (

          <div
            key={item.service}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >

            <div className="flex items-start justify-between">

              <div>

                <h2 className="flex items-center gap-3 text-2xl font-bold">

                  <Wrench size={22} />

                  {item.service}

                </h2>

                <div className="mt-5 space-y-2 text-gray-400">

                  <p className="flex items-center gap-2">

                    <Calendar size={16} />

                    {item.date}

                  </p>

                  <p className="flex items-center gap-2">

                    <Receipt size={16} />

                    {item.cost}

                  </p>

                </div>

              </div>

              <span className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">

                <CheckCircle size={18} />

                {item.status}

              </span>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
}