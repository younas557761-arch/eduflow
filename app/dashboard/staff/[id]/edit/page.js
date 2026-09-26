'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import StaffForm from '@/components/staff/StaffForm';

export default function EditStaff({ params }) {
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('staff').select('*').eq('id', params.id).single();
      setStaff(data);
    }
    load();
  }, [params.id]);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Edit Staff</h2>
      {staff && <StaffForm initialData={staff} isEdit={true} />}
    </div>
  );
}
