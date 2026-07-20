"use client";

import {
  BookOpen,
  Trophy,
  Flame,
  TrendingUp,
} from "lucide-react";

import { useStudent } from "@/context/StudentContext";

export default function StatisticsCards() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <section className="mt-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-44 animate-pulse rounded-3xl bg-gray-200"
            />
          ))}
        </div>
      </section>
    );
  }

  // Safe Values
  const totalLessons = student.totalLessons ?? 20;
  const lessonsCompleted = student.lessonsCompleted ?? 0;
  const progress = student.progress ?? 0;
  const streak = student.streak ?? 0;
  const certificates = student.certificates ?? 0;

  const stats = [
    {
      title: "Lessons Completed",
      value: `${lessonsCompleted}/${totalLessons}`,
      subtitle: "Keep Learning",
      icon: BookOpen,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Overall Progress",
      value: `${progress}%`,
      subtitle: "Course Completed",
      icon: TrendingUp,
      bg: "from-green-500 to-emerald-500",
    },
    {
      title: "Learning Streak",
      value: `${streak} Days`,
      subtitle: "Stay Consistent",
      icon: Flame,
      bg: "from-orange-500 to-red-500",
    },
    {
      title: "Certificates",
      value: `${certificates}`,
      subtitle: "Achievements Earned",
      icon: Trophy,
      bg: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.subtitle}
                  </p>
                </div>

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.bg} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}