export default function StatsCard({ title, value, change }) {
  return (
    <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-5">
      <p className="text-sm text-slate-400 font-medium">{title}</p>
      <div className="flex items-baseline justify-between mt-2">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {change && (
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
