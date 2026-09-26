'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function StudentForm({ initialData = {}, isEdit = false }) {
  const [form, setForm] = useState({
    roll_number: initialData.roll_number || '',
    first_name: initialData.first_name || '',
    last_name: initialData.last_name || '',
    gender: initialData.gender || 'Male',
    guardian_phone: initialData.guardian_phone || '',
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await supabase.from('students').update(form).eq('id', initialData.id);
    } else {
      await supabase.from('students').insert([form]);
    }
    router.push('/dashboard/students');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e293b] border border-[#334155] p-6 rounded-xl space-y-4">
      <div>
        <label className="text-xs text-slate-400">Roll Number</label>
        <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" value={form.roll_number} onChange={e => setForm({...form, roll_number: e.target.value})} required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400">First Name</label>
          <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" value={form.first_name} onChange={e => setForm({...form, first_name: e.target.value})} required />
        </div>
        <div>
          <label className="text-xs text-slate-400">Last Name</label>
          <input className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-2 text-white" value={form.last_name} onChange={e => setForm({...form, last_name: e.target.value})} required />
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-600 py-2.5 rounded font-semibold text-white">Save Student</button>
    </form>
  );
}
