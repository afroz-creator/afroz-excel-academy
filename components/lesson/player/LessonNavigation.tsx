"use client";

interface LessonNavigationProps {
  previousLesson?: number;
  nextLesson?: number;
}

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Previous Button */}
      <button
        disabled={!previousLesson}
        className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ⬅ Previous Lesson
      </button>

      {/* Complete Button */}
      <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
        ✅ Mark as Complete
      </button>

      {/* Next Button */}
      <button
        disabled={!nextLesson}
        className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next Lesson ➡
      </button>

    </div>
  );
}