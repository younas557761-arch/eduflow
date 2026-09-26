'use client';
import StaffForm from '@/components/staff/StaffForm';

export default function NewStaff() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Add Staff Member</h2>
      <StaffForm />
    </div>
  );
}
