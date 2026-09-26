'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (!error) {
      router.push('/dashboard');
    } else {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-sm text-slate-400 mb-6">Login to EduFlow Dashboard</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
            <input type="email" required className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Password</label>
            <input type="password" required className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 flex justify-between text-xs text-slate-400">
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/signup" className="text-cyan-400">Register School</Link>
        </div>
      </div>
    </div>
  );
}
