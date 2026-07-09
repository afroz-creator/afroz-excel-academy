"use client";

import { getCompletedLessons } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function AchievementCard() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(getCompletedLessons().length);
  }, []);

  const achievements = [
    {
      title: "First Step",
      icon: "🥉",
      unlocked: completed >= 1,
    },
    {
      title: "Excel Beginner",
      icon: "🥈",
      unlocked: completed >= 3,
    },
    {
      title: "Formula Master",
      icon: "🥇",
      unlocked: completed >= 5,
    },
    {
      title: "Excel Expert",
      icon: "👑",
      unlocked: completed >= 6,
    },
  ];

  return (
    <section className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {achievements.map((badge) => (
          <div
            key={badge.title}
            className={`rounded-2xl shadow-md p-6 text-center transition ${
              badge.unlocked
                ? "bg-green-100 border-2 border-green-500"
                : "bg-gray-100 opacity-60"
            }`}
          >
            <div className="text-5xl">
              {badge.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold">
              {badge.title}
            </h3>

            <p className="mt-2">
              {badge.unlocked
                ? "Unlocked"
                : "Locked"}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}