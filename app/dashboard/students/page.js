'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DataTable from '@/components/DataTable';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('students').select('*');
      if (data) setStudents(data);
    }
    load();
  }, []);

  const filtered = students.filter(s => `${s.first_name} ${s.last_name}`.toLowerCase().includes(search.toLowerCase()));
  const headers = ['Roll #', 'First Name', 'Last Name', 'Gender', 'Status', 'Actions'];
  const rows = filtered.map(s => [
    s.roll_number,
    s.first_name,
    s.last_name,
    s.gender,
    s.status,
    <Link key={s.id} href={`/dashboard/students/${s.id}`} className="text-cyan-400 text-xs">View</Link>
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Students</h2>
        <Link href="/dashboard/students/new" className="px-4 py-2 bg-blue-600 rounded-lg text-sm">Add Student</Link>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search student name..." />
      <DataTable headers={headers} rows={rows} />
    </div>
  );
}
