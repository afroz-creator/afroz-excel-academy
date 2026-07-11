"use client";

import {
  BookOpen,
  TrendingUp,
  Flame,
  Trophy,
  Star,
  Target,
} from "lucide-react";

import { useStudent } from "@/context/StudentContext";

export default function LearningStats() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <div className="h-96 animate-pulse rounded-3xl bg-gray-200"></div>
    );
  }

  const xp = student.lessonsCompleted * 10;
  const level = Math.floor(xp / 100) + 1;

  const stats = [
    {
      title: "Lessons Completed",
      value: `${student.lessonsCompleted}/${student.totalLessons}`,
      icon: BookOpen,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Overall Progress",
      value: `${student.progress}%`,
      icon: TrendingUp,
      bg: "from-green-500 to-emerald-500",
    },
    {
      title: "Learning Streak",
      value: `${student.streak} Days`,
      icon: Flame,
      bg: "from-orange-500 to-red-500",
    },
    {
      title: "Certificates",
      value: student.certificates,
      icon: Trophy,
      bg: "from-yellow-500 to-amber-500",
    },
    {
      title: "XP Earned",
      value: `${xp} XP`,
      icon: Star,
      bg: "from-purple-500 to-pink-500",
    },
    {
      title: "Current Level",
      value: `Level ${level}`,
      icon: Target,
      bg: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Learning Statistics
        </h2>

        <p className="mt-2 text-gray-500">
          Track your learning performance.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.bg}`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}