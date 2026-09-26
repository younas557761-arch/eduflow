'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import StudentForm from '@/components/students/StudentForm';

export default function EditStudent({ params }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('students').select('*').eq('id', params.id).single();
      setStudent(data);
    }
    load();
  }, [params.id]);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Edit Student</h2>
      {student && <StudentForm initialData={student} isEdit={true} />}
    </div>
  );
}
