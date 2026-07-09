"use client";

import { getCompletedLessons } from "@/lib/progress";
import { tutorials } from "@/data/tutorials";
import { useEffect, useState } from "react";

export default function ProgressSummary() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(getCompletedLessons().length);
  }, []);

  const total = tutorials.length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <section className="grid md:grid-cols-4 gap-6 mt-10">

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-gray-500">Overall Progress</h3>

        <p className="text-4xl font-bold text-green-600 mt-3">
          {percentage}%
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-gray-500">
          Completed Lessons
        </h3>

        <p className="text-4xl font-bold mt-3">
          {completed}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-gray-500">
          Remaining Lessons
        </h3>

        <p className="text-4xl font-bold mt-3">
          {total - completed}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-gray-500">
          Total Lessons
        </h3>

        <p className="text-4xl font-bold mt-3">
          {total}
        </p>
      </div>

    </section>
  );
}