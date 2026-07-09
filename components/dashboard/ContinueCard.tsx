"use client";

import Link from "next/link";
import { tutorials } from "@/data/tutorials";
import { getCompletedLessons } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function ContinueCard() {
  const [nextLesson, setNextLesson] = useState(tutorials[0]);

  useEffect(() => {
    const completed = getCompletedLessons();

    const next =
      tutorials.find(
        (lesson) => !completed.includes(lesson.slug)
      ) || tutorials[tutorials.length - 1];

    setNextLesson(next);
  }, []);

  return (
    <section className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

      <h2 className="text-3xl font-bold">
        Continue Learning
      </h2>

      <p className="mt-3 text-blue-100">
        Your next recommended lesson
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h3 className="text-2xl font-bold">
            {nextLesson.title}
          </h3>

          <p className="text-blue-100 mt-2">
            Continue where you left off.
          </p>
        </div>

        <Link
          href={`/tutorials/${nextLesson.slug}`}
          className="mt-6 md:mt-0 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Continue →
        </Link>

      </div>

    </section>
  );
}