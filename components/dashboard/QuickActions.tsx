import { actions } from "@/data/actions";

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {actions.map((item) => (

          <button
            key={item.title}
            className={`${item.color} rounded-2xl border border-white/10 p-6 text-left transition duration-300 hover:scale-[1.03] hover:border-cyan-400`}
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}