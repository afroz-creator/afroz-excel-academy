"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Trophy,
  Flame,
  TrendingUp,
} from "lucide-react";

import {
  getProgress,
  defaultProgress,
} from "@/lib/storage";

export default function StatisticsCards() {
  const [progress, setProgress] = useState(defaultProgress);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const stats = [
    {
      title: "Lessons Completed",
      value: `${progress.lessonsCompleted}/${progress.totalLessons}`,
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Overall Progress",
      value: `${Math.round(
        (progress.lessonsCompleted / progress.totalLessons) * 100
      )}%`,
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Learning Streak",
      value: `${progress.streak} Days`,
      icon: Flame,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Certificates",
      value: `${progress.certificates}`,
      icon: Trophy,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
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
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon className={`h-7 w-7 ${item.color}`} />
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}