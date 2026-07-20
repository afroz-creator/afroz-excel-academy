"use client";

import {
  BookOpen,
  Trophy,
  Flame,
  TrendingUp,
} from "lucide-react";

import { useStudent } from "@/context/StudentContext";

export default function LearningStatistics() {
  const { student, loading } = useStudent();

  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-gray-200 h-96" />
    );
  }

  const stats = [
    {
      title: "Overall Progress",
      value: `${student?.progress ?? 0}%`,
      icon: TrendingUp,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lessons Completed",
      value: `${student?.lessonsCompleted ?? 0}/${student?.totalLessons ?? 0}`,
      icon: BookOpen,
      bg: "from-green-500 to-emerald-500",
    },
    {
      title: "Learning Streak",
      value: `${student?.streak ?? 0} Days`,
      icon: Flame,
      bg: "from-orange-500 to-red-500",
    },
    {
      title: "Certificates",
      value: `${student?.certificates ?? 0}`,
      icon: Trophy,
      bg: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        📊 Learning Statistics
      </h2>

      <div className="space-y-5">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border p-5 transition hover:shadow-md"
            >
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
                <Icon
                  className="text-white"
                  size={28}
                />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}