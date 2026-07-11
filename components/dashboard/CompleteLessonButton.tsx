"use client";

import { useState } from "react";

import {
  getStudentProfile,
  updateStudentProgress,
  updateCertificates,
} from "@/lib/student";

export default function CompleteLessonButton() {
  const [loading, setLoading] = useState(false);

  async function handleCompleteLesson() {
    try {
      setLoading(true);

      const student = await getStudentProfile();

      if (!student) {
        alert("Student profile not found.");
        return;
      }

      const lessonsCompleted = student.lessonsCompleted + 1;

      const progress = Math.round(
        (lessonsCompleted / student.totalLessons) * 100
      );

      // Progress Update
      await updateStudentProgress(
        lessonsCompleted,
        progress
      );

      // Certificate Unlock Logic
      let certificates = student.certificates;

      if (lessonsCompleted >= 100) {
        certificates = 4;
      } else if (lessonsCompleted >= 50) {
        certificates = 3;
      } else if (lessonsCompleted >= 25) {
        certificates = 2;
      } else if (lessonsCompleted >= 10) {
        certificates = 1;
      }

      await updateCertificates(certificates);

      alert("🎉 Lesson Completed!");

      
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCompleteLesson}
      disabled={loading}
      className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-60"
    >
      {loading ? "Updating..." : "✅ Complete Lesson"}
    </button>
  );
}