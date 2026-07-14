"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { excelCourse } from "@/data/excelCourse";

export default function LessonSidebar() {
  const params = useParams();
  const currentLessonId = Number(params.id);

  return (
    <aside className="sticky top-24 h-fit overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
        <h2 className="text-xl font-bold">
          {excelCourse.title}
        </h2>

        <p className="mt-1 text-sm text-blue-100">
          {excelCourse.instructor}
        </p>

        <div className="mt-5">
          <div className="mb-2 flex justify-between text-sm">
            <span>Progress</span>

            <span className="font-semibold">
              {excelCourse.progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-blue-300/40">
            <div
              className="h-2 rounded-full bg-white transition-all"
              style={{
                width: `${excelCourse.progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Lesson List */}
      <div className="max-h-[650px] overflow-y-auto p-5">

        {excelCourse.modules.map((module) => (
          <div key={module.id} className="mb-8">

            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              {module.title}
            </h3>

            <div className="space-y-2">

              {module.lessons.map((lesson) => {
                const active =
                  lesson.id === currentLessonId;

                return (
                  <Link
                    key={lesson.id}
                    href={`/course/excel/lesson/${lesson.id}`}
                    className={`
                      flex items-center justify-between rounded-2xl border p-4 transition-all duration-200

                      ${
                        active
                          ? "border-blue-600 bg-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                      }

                      ${
                        lesson.locked
                          ? "opacity-60"
                          : ""
                      }
                    `}
                  >
                    <div>

                      <p
                        className={`font-semibold ${
                          active
                            ? "text-blue-700"
                            : "text-gray-800"
                        }`}
                      >
                        {lesson.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {lesson.duration}
                      </p>

                    </div>

                    <div className="text-xl">

                      {lesson.completed
                        ? "✅"
                        : lesson.locked
                        ? "🔒"
                        : "▶️"}

                    </div>
                  </Link>
                );
              })}

            </div>

          </div>
        ))}

      </div>

    </aside>
  );
}