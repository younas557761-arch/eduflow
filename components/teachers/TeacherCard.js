export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-[#1e293b] border border-[#334155] p-6 rounded-xl space-y-2">
      <h3 className="text-lg font-bold text-white">{teacher.first_name} {teacher.last_name}</h3>
      <p className="text-sm text-slate-400">Emp ID: {teacher.employee_id}</p>
      <p className="text-sm text-slate-400">Qualification: {teacher.qualification}</p>
    </div>
  );
}
