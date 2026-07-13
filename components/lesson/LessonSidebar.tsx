"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { excelCourse } from "@/data/excelCourse";

export default function LessonSidebar() {
  const params = useParams();
  const currentLessonId = Number(params.id);

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b p-5">
        <h2 className="text-lg font-bold text-gray-900">
          {excelCourse.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {excelCourse.instructor}
        </p>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-semibold">
              {excelCourse.progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-600 transition-all"
              style={{
                width: `${excelCourse.progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="max-h-[650px] overflow-y-auto p-4">
        {excelCourse.modules.map((module) => (
          <div key={module.id} className="mb-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
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
                    className={`flex items-center justify-between rounded-xl border p-3 transition-all

                    ${
                      active
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }

                    ${
                      lesson.locked
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }
                    `}
                  >
                    <div>
                      <p className="font-medium">
                        {lesson.title}
                      </p>

                      <p className="text-xs text-gray-500">
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