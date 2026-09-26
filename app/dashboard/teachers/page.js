'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DataTable from '@/components/DataTable';
import Link from 'next/link';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('teachers').select('*');
      if (data) setTeachers(data);
    }
    load();
  }, []);

  const headers = ['Emp ID', 'Name', 'Qualification', 'Email', 'Status'];
  const rows = teachers.map(t => [t.employee_id, `${t.first_name} ${t.last_name}`, t.qualification, t.email, t.status]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Teachers</h2>
        <Link href="/dashboard/teachers/new" className="px-4 py-2 bg-blue-600 rounded-lg text-sm">Add Teacher</Link>
      </div>
      <DataTable headers={headers} rows={rows} />
    </div>
  );
}
