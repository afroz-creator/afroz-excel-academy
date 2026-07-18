"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { excelCourse } from "@/data/excelCourse";

export default function LessonSidebar() {
  const params = useParams();
  const currentLessonId = Number(params.id);

  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <>
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
      <div className="max-h-[calc(100vh-180px)] overflow-y-auto p-5">

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
                    onClick={() => setOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile Button */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 font-semibold text-white shadow"
        >
          <Menu size={20} />
          Course Lessons
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden overflow-hidden rounded-3xl border bg-white shadow lg:block lg:sticky lg:top-24 h-fit">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      {open && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          {/* Drawer */}
          <aside className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85%] overflow-hidden bg-white shadow-2xl lg:hidden">

            <div className="flex items-center justify-between border-b p-5">

              <h2 className="text-xl font-bold text-green-700">
                Course Lessons
              </h2>

              <button
                onClick={() => setOpen(false)}
              >
                <X size={26} />
              </button>

            </div>

            <SidebarContent />

          </aside>
        </>
      )}
    </>
  );
}