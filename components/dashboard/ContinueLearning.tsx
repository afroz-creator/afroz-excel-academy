"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Lock } from "lucide-react";

import { excelCourse } from "@/data/excelCourse";

export default function ContinueLearning() {
  // Flatten all lessons from modules
  const lessons = excelCourse.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      module: module.title,
    }))
  );

  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Continue Learning
          </h2>

          <p className="mt-1 text-gray-500">
            Resume your unfinished lessons
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {lessons.map((lesson) => {
          const progress = lesson.completed ? 100 : lesson.locked ? 0 : 50;

          return (
            <div
              key={lesson.id}
              className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    {lesson.locked ? (
                      <Lock className="h-6 w-6 text-gray-500" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-green-700" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      {lesson.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {lesson.module}
                    </p>

                    <p className="text-xs text-gray-400">
                      {lesson.duration}
                    </p>
                  </div>
                </div>

                {lesson.locked ? (
                  <button
                    disabled
                    className="rounded-lg bg-gray-300 px-4 py-2 text-white"
                  >
                    Locked
                  </button>
                ) : (
                  <Link
                    href={`/course/excel/lesson/${lesson.id}`}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                  >
                    {lesson.completed ? "Review" : "Continue"}

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-700"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}