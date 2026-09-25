export default function TeacherCard({ teacher }) {
  return <div className="card p-5"><h3 className="font-semibold">{teacher.first_name} {teacher.last_name}</h3><p className="text-sm text-slate-400">{teacher.employee_no}</p><p className="mt-2 text-sm">{teacher.specialization || "Teacher"}</p></div>;
}
