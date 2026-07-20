"use client";

import { useState } from "react";

import {
  getStudentProfile,
  updateStudentProgress,
  updateCertificates,
} from "@/lib/student";

interface Props {
  lessonId: number;
}

export default function CompleteLessonButton({
  lessonId,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleCompleteLesson() {
    try {
      setLoading(true);

      const student = await getStudentProfile();

      if (!student) {
        alert("Student profile not found.");
        return;
      }

      // Already completed
      if (lessonId < student.currentLesson) {
        alert("✅ This lesson is already completed.");
        return;
      }

      // Wrong lesson
      if (lessonId !== student.currentLesson) {
        alert("❌ Complete previous lesson first.");
        return;
      }

      const lessonsCompleted =
        student.lessonsCompleted + 1;

      const progress = Math.round(
        (lessonsCompleted / student.totalLessons) * 100
      );

      const currentLesson = Math.min(
        lessonId + 1,
        student.totalLessons
      );

      await updateStudentProgress(
        lessonsCompleted,
        progress,
        currentLesson
      );

      // Certificate Logic
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

      if (certificates !== student.certificates) {
        await updateCertificates(certificates);
      }

      alert(
        `🎉 Lesson ${lessonId} Completed!\n\nNext Lesson Unlocked!`
      );
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
      className="rounded-xl bg-green-700 px-8 py-4 font-bold text-white transition hover:bg-green-800 disabled:opacity-50"
    >
      {loading ? "Updating..." : "✅ Complete Lesson"}
    </button>
  );
}