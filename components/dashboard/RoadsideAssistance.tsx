export default function RoadsideAssistance() {
  return (
    <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8">

      <h2 className="text-2xl font-bold">
        Roadside Assistance
      </h2>

      <p className="mt-4 text-gray-300">
        24/7 emergency roadside support across Bangladesh.
      </p>

      <div className="mt-8 space-y-4">

        <button className="w-full rounded-xl bg-red-500 py-4 font-bold">
          Request Assistance
        </button>

        <button className="w-full rounded-xl border border-white/10 py-4">
          Call Technician
        </button>

        <button className="w-full rounded-xl border border-white/10 py-4">
          Share Live Location
        </button>

      </div>

    </div>
  );
}