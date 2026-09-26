'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function TeacherForm({ initialData = {}, isEdit = false }) {
  const [form, setForm] = useState({
    employee_id: initialData.employee_id || '',
    first_name: initialData.first_name || '',
    last_name: initialData.last_name || '',
    qualification: initialData.qualification || '',
    email: initialData.email || '',
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await supabase.from('teachers').update(form).eq('id', initialData.id);
    } else {
      await supabase.from('teachers').insert([form]);
    }
    router.push('/dashboard/teachers');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e293b] border border-[#334155] p-6 rounded-xl space-y-4">
      <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" placeholder="Employee ID" value={form.employee_id} onChange={e => setForm({...form, employee_id: e.target.value})} required />
      <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" placeholder="First Name" value={form.first_name} onChange={e => setForm({...form, first_name: e.target.value})} required />
      <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" placeholder="Last Name" value={form.last_name} onChange={e => setForm({...form, last_name: e.target.value})} required />
      <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" placeholder="Qualification" value={form.qualification} onChange={e => setForm({...form, qualification: e.target.value})} />
      <button type="submit" className="w-full bg-blue-600 py-2.5 rounded font-semibold text-white">Save Teacher</button>
    </form>
  );
}
