"use client";

import { Flame, Star, Target } from "lucide-react";
import { useStudent } from "@/context/StudentContext";

export default function UserWelcome() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <section className="rounded-3xl bg-green-600 p-10 text-white shadow-xl">
        <div className="flex h-56 items-center justify-center">
          <p className="text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  // Safe Values
  const totalLessons = student.totalLessons ?? 20;
  const lessonsCompleted = student.lessonsCompleted ?? 0;
  const streak = student.streak ?? 0;

  // Auto Calculations
  const xp = lessonsCompleted * 10;
  const level = Math.floor(xp / 100) + 1;

  const progress =
    totalLessons > 0
      ? Math.round((lessonsCompleted / totalLessons) * 100)
      : 0;

  return (
    <section className="mx-auto w-full max-w-7xl rounded-3xl bg-green-600 p-10 text-white shadow-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex-1">

          <p className="text-sm uppercase tracking-widest text-green-100">
            Welcome Back
          </p>

          <h1 className="mt-2 text-5xl font-extrabold">
            {student.name} 👋
          </h1>

          <p className="mt-3 text-lg text-green-100">
            Continue your Excel learning journey and become an Excel Expert.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3">
              <Star size={18} />
              <span>{xp} XP</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3">
              <Flame size={18} />
              <span>{streak} Day Streak</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3">
              <Target size={18} />
              <span>Level {level}</span>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md lg:w-80">

          <h2 className="text-3xl font-bold">
            Today's Goal
          </h2>

          <p className="mt-3 text-green-100">
            Complete 2 Lessons Today
          </p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-4 text-sm text-green-100">
            {progress}% Completed
          </p>

          <div className="mt-6 rounded-xl bg-white/10 p-4">
            <div className="flex justify-between text-sm">
              <span>Lessons</span>
              <span>
                {lessonsCompleted} / {totalLessons}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}