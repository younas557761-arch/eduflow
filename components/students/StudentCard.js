export default function StudentCard({ student }) {
  return (
    <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-xl space-y-2">
      <h3 className="text-lg font-bold text-white">{student.first_name} {student.last_name}</h3>
      <p className="text-sm text-slate-400">Roll #: {student.roll_number}</p>
      <p className="text-sm text-slate-400">Gender: {student.gender}</p>
      <p className="text-sm text-slate-400">Status: {student.status}</p>
    </div>
  );
}
