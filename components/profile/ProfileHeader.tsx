"use client";

import { User, Flame, Star, Trophy } from "lucide-react";
import { useStudent } from "@/context/StudentContext";

export default function ProfileHeader() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <section className="h-72 animate-pulse rounded-3xl bg-gray-200"></section>
    );
  }

  const xp = student.lessonsCompleted * 10;
  const level = Math.floor(xp / 100) + 1;

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 p-8 text-white shadow-xl">

      <div className="flex flex-col items-center gap-6 lg:flex-row">

        {/* Avatar */}
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30 bg-white/15 backdrop-blur-md">
          <User size={64} />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-4xl font-extrabold">
            {student.name}
          </h1>

          <p className="mt-2 text-green-100">
            {student.email}
          </p>

          <p className="mt-1 text-green-200">
            📱 {student.mobile}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Star size={18} />
              <span>{xp} XP</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Flame size={18} />
              <span>{student.streak} Day Streak</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2">
              <Trophy size={18} />
              <span>Level {level}</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}