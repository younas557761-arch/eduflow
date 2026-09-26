'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) alert(error.message);
    else setMsg('Password reset link sent to your email.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        {msg ? <p className="text-green-400 text-sm">{msg}</p> : (
          <form onSubmit={handleReset} className="space-y-4">
            <input type="email" required placeholder="Enter your email" className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="w-full py-2.5 rounded-lg bg-blue-600 font-semibold">Send Reset Link</button>
          </form>
        )}
      </div>
    </div>
  );
}
