"use client";

import { Flame, Star, Target } from "lucide-react";
import { useStudent } from "@/context/StudentContext";

export default function UserWelcome() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-500 p-8 text-white shadow-lg">
        <p>Loading...</p>
      </section>
    );
  }

  const xp = student.lessonsCompleted * 10;
  const level = Math.floor(xp / 100) + 1;

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 p-8 text-white shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}
        <div>

          <p className="text-green-100 text-sm uppercase tracking-widest">
            Welcome Back
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            {student.name} 👋
          </h1>

          <p className="mt-3 text-green-100">
            Continue your Excel learning journey and become an Excel Expert.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Star size={18} />
              <span>{xp} XP</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Flame size={18} />
              <span>{student.streak} Day Streak</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Target size={18} />
              <span>Level {level}</span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md lg:w-72">

          <h2 className="text-xl font-bold">
            Today's Goal
          </h2>

          <p className="mt-2 text-green-100">
            Complete 2 Lessons Today
          </p>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${Math.min(student.progress, 100)}%`,
              }}
            />

          </div>

          <p className="mt-3 text-sm text-green-100">
            {student.progress}% Completed
          </p>

        </div>

      </div>

    </section>
  );
}