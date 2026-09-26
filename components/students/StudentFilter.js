export default function StudentFilter({ filter, setFilter }) {
  return (
    <select
      className="bg-[#1e293b] border border-[#334155] rounded px-3 py-2 text-sm text-white"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All Statuses</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}
