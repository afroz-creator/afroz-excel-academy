"use client";

import { use } from "react";
import EditStudentForm from "@/components/admin/EditStudentForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function EditStudentPage({ params }: Props) {
  const { id } = use(params);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            ✏ Edit Student
          </h1>

          <p className="mt-2 text-gray-500">
            Update student information and learning progress.
          </p>
        </div>

        <EditStudentForm studentId={id} />
      </div>
    </main>
  );
}