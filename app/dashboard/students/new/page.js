'use client';
import StudentForm from '@/components/students/StudentForm';

export default function NewStudent() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Add New Student</h2>
      <StudentForm />
    </div>
  );
}
