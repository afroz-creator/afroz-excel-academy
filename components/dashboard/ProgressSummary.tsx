"use client";

import { useStudent } from "@/context/StudentContext";

export default function ProgressSummary() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 animate-pulse rounded-2xl bg-gray-200"
          />
        ))}
      </section>
    );
  }

  const completed = student.lessonsCompleted ?? 0;
  const total = student.totalLessons ?? 20;
  const percentage = student.progress ?? 0;
  const remaining = Math.max(total - completed, 0);

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-gray-500">
          Overall Progress
        </h3>

        <p className="mt-3 text-4xl font-bold text-green-600">
          {percentage}%
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-gray-500">
          Completed Lessons
        </h3>

        <p className="mt-3 text-4xl font-bold">
          {completed}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-gray-500">
          Remaining Lessons
        </h3>

        <p className="mt-3 text-4xl font-bold">
          {remaining}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-gray-500">
          Total Lessons
        </h3>

        <p className="mt-3 text-4xl font-bold">
          {total}
        </p>
      </div>

    </section>
  );
}