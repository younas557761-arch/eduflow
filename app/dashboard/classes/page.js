'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DataTable from '@/components/DataTable';
import Link from 'next/link';

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('classes').select('*');
      if (data) setClasses(data);
    }
    load();
  }, []);

  const headers = ['Class Name', 'Section', 'Capacity', 'Room #'];
  const rows = classes.map(c => [c.name, c.section, c.capacity, c.room_number]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Classes Management</h2>
        <Link href="/dashboard/classes/new" className="px-4 py-2 bg-blue-600 rounded-lg text-sm">Add Class</Link>
      </div>
      <DataTable headers={headers} rows={rows} />
    </div>
  );
}
