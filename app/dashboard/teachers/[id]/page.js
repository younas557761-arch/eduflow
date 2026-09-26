'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import TeacherCard from '@/components/teachers/TeacherCard';

export default function TeacherDetail({ params }) {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('teachers').select('*').eq('id', params.id).single();
      setTeacher(data);
    }
    load();
  }, [params.id]);

  if (!teacher) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto">
      <TeacherCard teacher={teacher} />
    </div>
  );
}
