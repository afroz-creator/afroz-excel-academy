"use client";

import Link from "next/link";
import { BookOpen, PlayCircle } from "lucide-react";
import { useStudent } from "@/context/StudentContext";

export default function CourseHero() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <div className="animate-pulse rounded-3xl bg-gray-200 p-12 h-72" />
    );
  }

  const progress = student.progress ?? 0;
  const currentLesson = student.currentLesson ?? 1;

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 shadow-2xl">

      <div className="grid gap-10 p-10 lg:grid-cols-2 lg:items-center">

        {/* Left */}

        <div>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">

            <BookOpen size={16} />

            Premium Course

          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-white">
            Advanced Excel Masterclass
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-green-100">
            Learn Microsoft Excel from Beginner to Advanced with
            real projects, formulas, Pivot Tables, Charts,
            Dashboards and Automation.
          </p>

          <div className="mt-10">

            <div className="mb-3 flex justify-between text-white">

              <span>Course Progress</span>

              <span className="font-bold">
                {progress}%
              </span>

            </div>

            <div className="h-4 overflow-hidden rounded-full bg-white/30">

              <div
                className="h-4 rounded-full bg-white transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

          <Link
            href={`/course/excel/lesson/${currentLesson}`}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-green-700 transition hover:scale-105 hover:bg-green-50"
          >

            <PlayCircle size={22} />

            Continue Learning

          </Link>

        </div>

        {/* Right */}

        <div className="hidden lg:flex justify-center">

          <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">

            <div className="text-center">

              <div className="text-8xl">
                📊
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Excel Expert
              </h2>

              <p className="mt-3 text-green-100">
                Complete the course and unlock
                your Professional Certificate.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}