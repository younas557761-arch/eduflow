import StatsCard from '@/components/StatsCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Total Students" value="1,240" change="+4.5%" />
        <StatsCard title="Total Teachers" value="84" change="+1.2%" />
        <StatsCard title="Active Classes" value="32" change="100%" />
        <StatsCard title="Staff Members" value="18" change="0%" />
      </div>
      <div className="p-6 bg-[#1e293b] border border-[#334155] rounded-xl text-center py-16">
        <h3 className="text-lg font-semibold text-white">System Active & Operational</h3>
        <p className="text-slate-400 text-sm mt-1">Select an action from the sidebar navigation.</p>
      </div>
    </div>
  );
}
