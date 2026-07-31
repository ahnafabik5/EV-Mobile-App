import { BatteryCharging } from "lucide-react";
import { battery } from "@/data/dashboard";

export default function BatteryCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Battery Overview
        </h2>

        <BatteryCharging
          className="text-cyan-400"
          size={34}
        />

      </div>

      <div className="mt-8 space-y-4">

        <Item
          title="Health"
          value={`${battery.health}%`}
        />

        <Item
          title="Status"
          value={battery.status}
        />

        <Item
          title="Temperature"
          value={battery.temperature}
        />

        <Item
          title="Cycles"
          value={battery.cycles.toString()}
        />

        <Item
          title="Charging"
          value={battery.charging}
        />

      </div>

    </div>
  );
}

function Item({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-3">

      <span className="text-gray-400">
        {title}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}