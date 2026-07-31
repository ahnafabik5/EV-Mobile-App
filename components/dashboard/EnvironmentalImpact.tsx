import { environment } from "@/data/environment";

export default function EnvironmentalImpact() {
  return (
    <div className="rounded-3xl border border-lime-500/20 bg-lime-500/10 p-8">

      <h2 className="text-2xl font-bold">
        Environmental Impact
      </h2>

      <div className="mt-8 space-y-5">

        <Item
          title="CO₂ Saved"
          value={environment.co2}
        />

        <Item
          title="Trees Equivalent"
          value={environment.trees.toString()}
        />

        <Item
          title="Energy Efficiency"
          value={environment.energy}
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
    <div className="flex items-center justify-between border-b border-white/10 pb-3">

      <span className="text-gray-400">
        {title}
      </span>

      <span className="font-semibold text-lime-400">
        {value}
      </span>

    </div>
  );
}