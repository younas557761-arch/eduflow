import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="EduFlow Control Panel" />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
