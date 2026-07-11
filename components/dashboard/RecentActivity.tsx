"use client";

import {
  BookOpen,
  Trophy,
  Award,
  Download,
} from "lucide-react";

const activities = [
  {
    title: "Completed Excel Basics Lesson",
    time: "Today",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    title: "Bronze Badge Unlocked",
    time: "Yesterday",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    title: "Certificate Downloaded",
    time: "2 Days Ago",
    icon: Download,
    color: "bg-blue-500",
  },
  {
    title: "Quiz Passed Successfully",
    time: "Last Week",
    icon: Trophy,
    color: "bg-purple-500",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Recent Activity
      </h2>

      <p className="mt-2 text-gray-500">
        Track your latest learning journey.
      </p>

      <div className="mt-8 space-y-6">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}