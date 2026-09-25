export default function TeacherFilter({ value, onChange }) {
  return <input value={value} onChange={e=>onChange(e.target.value)} placeholder="Filter specialization..." className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"/>;
}
