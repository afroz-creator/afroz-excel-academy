"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Props {
  studentId: string;
}

interface Student {
  name?: string;
  email?: string;
  mobile?: string;
  progress?: number;
  lessonsCompleted?: number;
  totalLessons?: number;
  currentLesson?: number;
  certificates?: number;
  streak?: number;
  createdAt?: any;
  updatedAt?: any;
}

export default function StudentProfile({
  studentId,
}: Props) {
  const [student, setStudent] = useState<Student | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudent() {
      try {
        const ref = doc(
          db,
          "students",
          studentId
        );

        const snap = await getDoc(ref);

        if (snap.exists()) {
          setStudent(
            snap.data() as Student
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStudent();
  }, [studentId]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow">
        Loading Student...
      </div>
    );
  }

  if (!student) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow">
        Student Not Found
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-white p-8 shadow">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600 text-4xl font-bold text-white">
            {student.name?.charAt(0) ?? "S"}
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              {student.name}
            </h1>

            <p className="mt-2 text-gray-500">
              {student.email}
            </p>

            <p className="text-gray-500">
              {student.mobile ?? "-"}
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow">

          <p className="text-gray-500">
            Progress
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-700">
            {student.progress ?? 0}%
          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <p className="text-gray-500">
            Lessons
          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {student.lessonsCompleted ?? 0}/
            {student.totalLessons ?? 0}

          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <p className="text-gray-500">
            Certificates
          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {student.certificates ?? 0}

          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <p className="text-gray-500">
            Streak
          </p>

          <h2 className="mt-3 text-3xl font-bold">

            🔥 {student.streak ?? 0}

          </h2>

        </div>

      </div>

      {/* Progress */}

      <div className="rounded-3xl bg-white p-8 shadow">

        <div className="mb-3 flex justify-between">

          <span className="font-semibold">
            Course Progress
          </span>

          <span className="font-bold text-green-700">

            {student.progress ?? 0}%

          </span>

        </div>

        <div className="h-5 rounded-full bg-gray-200">

          <div
            className="h-5 rounded-full bg-green-600"
            style={{
              width: `${student.progress ?? 0}%`,
            }}
          />

        </div>

      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-4">

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          ✏ Edit Student
        </button>

        <button className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-white hover:bg-yellow-600">
          🔄 Reset Progress
        </button>

        <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
          🎓 Issue Certificate
        </button>

        <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
          🗑 Delete Student
        </button>

      </div>

    </div>
  );
}