"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { getCompletedLessons } from "@/lib/progress";

export default function AchievementCard() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    async function loadAchievements() {
      const user = auth.currentUser;

      if (!user) return;

      const lessonsCompleted = await getCompletedLessons(user.uid);

      setCompleted(lessonsCompleted);
    }

    loadAchievements();
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
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Achievements
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((badge) => (
          <div
            key={badge.title}
            className={`rounded-2xl p-6 text-center shadow-md transition ${
              badge.unlocked
                ? "border-2 border-green-500 bg-green-100"
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
              {badge.unlocked ? "Unlocked" : "Locked"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}