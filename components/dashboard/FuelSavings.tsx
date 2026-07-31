import { fuel } from "@/data/fuel";

export default function FuelSavings() {
  return (
    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">

      <h2 className="text-2xl font-bold">
        Fuel Savings
      </h2>

      <div className="mt-8 space-y-5">

        <Row
          title="Monthly Distance"
          value={`${fuel.monthlyDistance} KM`}
        />

        <Row
          title="Petrol Cost"
          value={`৳${fuel.petrolCost}`}
        />

        <Row
          title="EV Cost"
          value={`৳${fuel.evCost}`}
        />

        <Row
          title="Monthly Savings"
          value={`৳${fuel.savings}`}
          green
        />

      </div>

    </div>
  );
}

function Row({
  title,
  value,
  green,
}: {
  title: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3">

      <span className="text-gray-400">
        {title}
      </span>

      <span className={green ? "font-bold text-emerald-400" : "font-semibold"}>
        {value}
      </span>

    </div>
  );
}