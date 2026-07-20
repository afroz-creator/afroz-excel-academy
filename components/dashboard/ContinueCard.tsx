"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { tutorials } from "@/data/tutorials";
import { auth } from "@/lib/firebase";
import { getCompletedLessons } from "@/lib/progress";

export default function ContinueCard() {
  const [nextLesson, setNextLesson] = useState(tutorials[0]);

  useEffect(() => {
    async function loadNextLesson() {
      const user = auth.currentUser;

      if (!user) return;

      const completed = await getCompletedLessons(user.uid);

      const next =
        tutorials[completed] ??
        tutorials[tutorials.length - 1];

      setNextLesson(next);
    }

    loadNextLesson();
  }, []);

  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-lg">

      <h2 className="text-3xl font-bold">
        Continue Learning
      </h2>

      <p className="mt-3 text-blue-100">
        Your next recommended lesson
      </p>

      <div className="mt-8 flex flex-col items-center justify-between md:flex-row">

        <div>
          <h3 className="text-2xl font-bold">
            {nextLesson.title}
          </h3>

          <p className="mt-2 text-blue-100">
            Continue where you left off.
          </p>
        </div>

        <Link
          href={`/tutorials/${nextLesson.slug}`}
          className="mt-6 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-gray-100 md:mt-0"
        >
          Continue →
        </Link>

      </div>

    </section>
  );
}