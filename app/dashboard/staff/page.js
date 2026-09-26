'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DataTable from '@/components/DataTable';
import Link from 'next/link';

export default function StaffPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('staff').select('*');
      if (data) setStaff(data);
    }
    load();
  }, []);

  const headers = ['Emp ID', 'Name', 'Role', 'Phone', 'Status'];
  const rows = staff.map(s => [s.employee_id, `${s.first_name} ${s.last_name}`, s.role, s.phone, s.status]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Staff Members</h2>
        <Link href="/dashboard/staff/new" className="px-4 py-2 bg-blue-600 rounded-lg text-sm">Add Staff</Link>
      </div>
      <DataTable headers={headers} rows={rows} />
    </div>
  );
}
