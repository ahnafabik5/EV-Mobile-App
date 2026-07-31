type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-cyan-500/30">

      <h2 className={`text-4xl font-black ${color}`}>
        {value}
      </h2>

      <p className="mt-3 text-gray-400">
        {title}
      </p>

    </div>
  );
}