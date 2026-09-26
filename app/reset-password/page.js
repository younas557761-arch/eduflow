'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) router.push('/login');
    else alert(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Set New Password</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input type="password" required placeholder="New password" className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full py-2.5 rounded-lg bg-blue-600 font-semibold">Update Password</button>
        </form>
      </div>
    </div>
  );
}
