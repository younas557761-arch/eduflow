'use client';
import ClassForm from '@/components/classes/ClassForm';

export default function NewClass() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Add Class</h2>
      <ClassForm />
    </div>
  );
}
