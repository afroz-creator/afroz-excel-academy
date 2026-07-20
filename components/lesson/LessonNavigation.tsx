"use client";

import Link from "next/link";

interface Props {
  previousLesson?: number | null;
  nextLesson?: number | null;
}

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: Props) {
  return (
    <section className="mt-10">
      <div className="grid gap-4 md:grid-cols-3">

        {/* Previous Lesson */}
        <div>
          {previousLesson ? (
            <Link
              href={`/course/excel/lesson/${previousLesson}`}
              className="block rounded-2xl border p-6 transition hover:border-green-600 hover:shadow-lg"
            >
              <p className="text-sm text-gray-500">
                ← Previous Lesson
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Lesson {previousLesson}
              </h3>
            </Link>
          ) : (
            <div className="rounded-2xl border bg-gray-50 p-6 text-center text-gray-400">
              First Lesson
            </div>
          )}
        </div>

        {/* Course Home */}
        <Link
          href="/course/excel"
          className="flex items-center justify-center rounded-2xl bg-green-700 p-6 text-lg font-bold text-white transition hover:bg-green-800"
        >
          📚 Course Home
        </Link>

        {/* Next Lesson */}
        <div>
          {nextLesson ? (
            <Link
              href={`/course/excel/lesson/${nextLesson}`}
              className="block rounded-2xl border p-6 text-right transition hover:border-green-600 hover:shadow-lg"
            >
              <p className="text-sm text-gray-500">
                Next Lesson →
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Lesson {nextLesson}
              </h3>
            </Link>
          ) : (
            <div className="rounded-2xl border bg-green-50 p-6 text-center">
              <h3 className="text-lg font-bold text-green-700">
                🎉 Course Completed
              </h3>

              <p className="mt-2 text-gray-600">
                Congratulations!
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}