'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import StudentCard from '@/components/students/StudentCard';

export default function StudentDetail({ params }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchOne() {
      const { data } = await supabase.from('students').select('*').eq('id', params.id).single();
      setStudent(data);
    }
    fetchOne();
  }, [params.id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto">
      <StudentCard student={student} />
    </div>
  );
}
