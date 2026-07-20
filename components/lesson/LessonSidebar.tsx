"use client";

import { useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { X, Menu } from "lucide-react";

import { excelCourse } from "@/data/excelCourse";
import { useStudent } from "@/context/StudentContext";

export default function LessonSidebar() {
  const params = useParams();
  const currentLessonId = Number(params.id);

 

  const [open, setOpen] = useState(false);

  const { student, loading } = useStudent();

  
  if (loading || !student) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading...
      </div>
    );
  }

  const SidebarContent = () => (
    <>
      {/* Header */}

      <div className="bg-gradient-to-r from-green-700 to-green-600 p-6 text-white">
        <h2 className="text-2xl font-bold">
          {excelCourse.title}
        </h2>

        <p className="mt-1 text-sm text-green-100">
          {excelCourse.instructor}
        </p>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span>Course Progress</span>

            <span className="font-bold">
              {student.progress}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-white/20">
            <div
              className="h-3 rounded-full bg-white transition-all"
              style={{
                width: `${student.progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Lessons */}

      <div className="max-h-[calc(100vh-220px)] overflow-y-auto p-5">
        {excelCourse.modules.map((module) => (
          <div
            key={module.id}
            className="mb-8"
          >
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              {module.title}
            </h3>

            <div className="space-y-3">

                            {module.lessons.map((lesson) => {
                const completed =
                  lesson.id < student.currentLesson;

                const current =
                  lesson.id === student.currentLesson;

                const locked =
                  lesson.id > student.currentLesson;

                return (
                  <Link
                    key={lesson.id}
                    href={
                      locked
                        ? "#"
                        : `/course/excel/lesson/${lesson.id}`
                    }
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center justify-between rounded-2xl border p-4 transition-all duration-200

                      ${
                        completed
                          ? "border-green-300 bg-green-50"
                          : ""
                      }

                      ${
                        current
                          ? "border-green-600 bg-green-100 shadow-md"
                          : ""
                      }

                      ${
                        locked
                          ? "cursor-not-allowed opacity-60"
                          : "hover:border-green-300 hover:bg-green-50"
                      }
                    `}
                  >
                    <div>
                      <p
                        className={`font-semibold ${
                          current
                            ? "text-green-700"
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
                      {completed && "✅"}

                      {current && "▶️"}

                      {locked && "🔒"}
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

      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 font-semibold text-white shadow lg:hidden"
      >
        <Menu size={20} />
        Course Lessons
      </button>

      {/* Desktop Sidebar */}

      <aside className="sticky top-24 hidden h-fit overflow-hidden rounded-3xl border bg-white shadow lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

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