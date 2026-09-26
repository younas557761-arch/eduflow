export default function TeacherFilter({ status, setStatus }) {
  return (
    <select className="bg-[#1e293b] border border-[#334155] rounded px-3 py-2 text-sm text-white" value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="All">All Statuses</option>
      <option value="Active">Active</option>
      <option value="On Leave">On Leave</option>
    </select>
  );
}
