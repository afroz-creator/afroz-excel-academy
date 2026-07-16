"use client";

import Link from "next/link";
import { useState } from "react";

interface LessonNavigationProps {
  previousLesson?: number;
  nextLesson?: number;
}

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: LessonNavigationProps) {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Previous Button */}
        {previousLesson ? (
          <Link
            href={`/course/excel/lesson/${previousLesson}`}
            className="rounded-2xl border border-gray-300 px-6 py-4 text-center font-semibold transition hover:border-blue-500 hover:bg-blue-50"
          >
            ⬅ Previous Lesson
          </Link>
        ) : (
          <div className="rounded-2xl border border-gray-200 px-6 py-4 text-center text-gray-400">
            First Lesson
          </div>
        )}

        {/* Complete Button */}
        <button
          onClick={() => setCompleted(true)}
          className={`rounded-2xl px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl ${
            completed
              ? "bg-green-700"
              : "bg-gradient-to-r from-green-600 to-emerald-500"
          }`}
        >
          {completed ? "🎉 Lesson Completed" : "✅ Mark Lesson Complete"}
        </button>

        {/* Next Button */}
        {nextLesson ? (
          <Link
            href={`/course/excel/lesson/${nextLesson}`}
            className="rounded-2xl border border-gray-300 px-6 py-4 text-center font-semibold transition hover:border-blue-500 hover:bg-blue-50"
          >
            Next Lesson ➜
          </Link>
        ) : (
          <div className="rounded-2xl border border-gray-200 px-6 py-4 text-center text-gray-400">
            Last Lesson
          </div>
        )}

      </div>

    </div>
  );
}