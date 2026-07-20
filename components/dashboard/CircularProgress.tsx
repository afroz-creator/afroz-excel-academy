"use client";

import {
  buildStyles,
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useStudent } from "@/context/StudentContext";

export default function CircularProgress() {
  const { student, loading } = useStudent();

  if (loading || !student) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-md">
        <div className="flex h-64 items-center justify-center">
          <p className="text-gray-500">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  const totalLessons = student.totalLessons ?? 20;
  const lessonsCompleted = student.lessonsCompleted ?? 0;

  // Automatically calculate progress
  const progress =
    totalLessons > 0
      ? Math.round(
          (lessonsCompleted / totalLessons) * 100
        )
      : 0;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-md">

      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Course Progress
      </h2>

      <div className="mx-auto h-56 w-56">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={10}
          styles={buildStyles({
            textSize: "18px",
            pathColor: "#16a34a",
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-gray-800">
          {lessonsCompleted} / {totalLessons} Lessons Completed
        </p>

        <p className="mt-2 text-gray-500">
          Keep learning every day 🚀
        </p>
      </div>

    </div>
  );
}