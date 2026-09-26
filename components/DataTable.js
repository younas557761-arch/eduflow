export default function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto border border-[#334155] rounded-xl bg-[#1e293b]">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-[#0f172a] text-slate-400 text-xs uppercase border-b border-[#334155]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#334155]">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="px-6 py-8 text-center text-slate-500">
                No data available.
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr key={i} className="hover:bg-[#334155]/50 transition">
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4">{cell}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
