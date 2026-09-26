'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import TeacherForm from '@/components/teachers/TeacherForm';

export default function EditTeacher({ params }) {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('teachers').select('*').eq('id', params.id).single();
      setTeacher(data);
    }
    load();
  }, [params.id]);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Edit Teacher</h2>
      {teacher && <TeacherForm initialData={teacher} isEdit={true} />}
    </div>
  );
}
