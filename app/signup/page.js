'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }
    const slug = schoolName.toLowerCase().replace(/ /g, '-');
    await supabase.from('schools').insert([{ name: schoolName, email, slug }]);
    setLoading(false);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Register Your School</h2>
        <p className="text-sm text-slate-400 mb-6">Create an account for your institute</p>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">School Name</label>
            <input type="text" required className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
            <input type="email" required className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Password</label>
            <input type="password" required className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>
        <div className="mt-4 text-center text-xs text-slate-400">
          Already have an account? <Link href="/login" className="text-cyan-400">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
