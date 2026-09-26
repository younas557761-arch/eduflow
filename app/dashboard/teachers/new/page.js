'use client';
import TeacherForm from '@/components/teachers/TeacherForm';

export default function NewTeacher() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Add Teacher</h2>
      <TeacherForm />
    </div>
  );
}
