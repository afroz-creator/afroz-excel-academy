"use client";

import {
  Flame,
  Star,
  Target,
  Trophy,
} from "lucide-react";

import { useStudent } from "@/context/StudentContext";

export default function TodayActivity() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <div className="animate-pulse rounded-3xl bg-gray-200 h-72"></div>
    );
  }

  const xp = student.lessonsCompleted * 10;
  const nextCertificate = Math.max(0, 100 - student.progress);

  const items = [
    {
      title: "Today's Goal",
      value: "2 Lessons",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "XP Earned",
      value: `${xp} XP`,
      icon: Star,
      color: "bg-green-500",
    },
    {
      title: "Current Streak",
      value: `${student.streak} Days`,
      icon: Flame,
      color: "bg-orange-500",
    },
    {
      title: "Next Certificate",
      value: `${nextCertificate}% Left`,
      icon: Trophy,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900">
        Today's Activity
      </h2>

      <p className="mt-2 text-gray-500">
        Keep your daily learning streak alive 🚀
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.value}
                </h3>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}