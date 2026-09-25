export default function StatsCard({ label, value, icon }) {
  return <div className="card p-5"><div className="text-sm text-slate-400">{icon} {label}</div><div className="mt-2 text-3xl font-bold">{value}</div></div>;
}
