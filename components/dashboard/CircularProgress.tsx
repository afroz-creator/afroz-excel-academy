"use client";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useStudent } from "@/context/StudentContext";

export default function CircularProgress() {
  const { student, loading } = useStudent();

    console.log("Loading:", loading);
    console.log("Student:", student);

  if (loading || !student) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl border bg-white shadow-sm">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
        Course Progress
      </h2>

      <div className="mx-auto h-56 w-56">
        <CircularProgressbar
          value={student.progress}
          text={`${student.progress}%`}
          strokeWidth={10}
          styles={buildStyles({
            textSize: "18px",
            pathColor: "#16a34a",
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
          {student.lessonsCompleted} / {student.totalLessons} Lessons Completed
        </p>

        <p className="mt-2 text-gray-500">
          Keep learning every day 🚀
        </p>
      </div>
    </div>
  );
}