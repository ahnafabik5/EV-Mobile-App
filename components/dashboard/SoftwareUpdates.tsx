import { updates } from "@/data/update";

export default function SoftwareUpdates() {
  return (
    <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">

      <h2 className="text-2xl font-bold">
        Software Updates
      </h2>

      <div className="mt-8 space-y-5">

        {updates.map((item) => (

          <div
            key={item.version}
            className="rounded-2xl border border-white/10 p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  {item.version}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {item.status}
                </p>

              </div>

              <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black">
                Install
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}