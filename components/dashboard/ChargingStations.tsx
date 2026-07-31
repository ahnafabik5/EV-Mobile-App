"use client";

import { stations } from "@/data/stations";
import { MapPin, Zap } from "lucide-react";


export default function ChargingStations() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Nearby Charging Stations
        </h2>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black">
          View Map
        </button>

      </div>

      <div className="space-y-5">

        {stations.map((station) => (

          <div
            key={station.id}
            className="rounded-2xl border border-white/10 p-5 transition hover:border-cyan-400"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-bold">
                  {station.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-gray-400">
                  <MapPin size={15} />
                  {station.address}
                </div>

              </div>

              <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black">
                Reserve
              </button>

            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-400">

              <span>
                {station.distance}
              </span>

              <span>
                {station.available} Available
              </span>

              {station.fast && (
                <span className="flex items-center gap-1 text-cyan-400">
                  <Zap size={14} />
                  Fast Charger
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}