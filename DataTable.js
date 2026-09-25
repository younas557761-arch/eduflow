export default function DataTable({ columns, rows, actions }) {
  return <div className="overflow-x-auto rounded-xl border border-slate-700">
    <table className="min-w-full text-left text-sm"><thead className="bg-slate-800">
      <tr>{columns.map(c => <th key={c.key} className="px-4 py-3 text-slate-400">{c.label}</th>)}{actions && <th className="px-4 py-3">Actions</th>}</tr>
    </thead><tbody>{rows.map(row => <tr key={row.id} className="border-t border-slate-700">
      {columns.map(c => <td key={c.key} className="px-4 py-3">{row[c.key] ?? "—"}</td>)}
      {actions && <td className="px-4 py-3">{actions(row)}</td>}
    </tr>)}</tbody></table>
  </div>;
}
