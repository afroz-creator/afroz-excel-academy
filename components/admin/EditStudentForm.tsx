

"use client";

import { useEffect, useState } from "react";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";



interface Props {
  studentId: string;
}

export default function EditStudentForm({
  studentId,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [progress, setProgress] = useState(0);

  const [currentLesson, setCurrentLesson] =
    useState(1);

  const [lessonsCompleted, setLessonsCompleted] =
    useState(0);

  const [certificates, setCertificates] =
    useState(0);

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
          const data = snap.data();

          setName(data.name ?? "");
          setEmail(data.email ?? "");
          setMobile(data.mobile ?? "");

          setProgress(data.progress ?? 0);

          setCurrentLesson(
            data.currentLesson ?? 1
          );

          setLessonsCompleted(
            data.lessonsCompleted ?? 0
          );

          setCertificates(
            data.certificates ?? 0
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
  async function handleSave() {
  try {
    setSaving(true);

    const { updateDoc } = await import("firebase/firestore");

    const ref = doc(
      db,
      "students",
      studentId
    );

    await updateDoc(ref, {
      name,
      email,
      mobile,
      progress: Number(progress),
      currentLesson: Number(currentLesson),
      lessonsCompleted: Number(lessonsCompleted),
      certificates: Number(certificates),
    });

    alert("✅ Student updated successfully.");
  } catch (error) {
    console.error(error);
    alert("❌ Failed to update student.");
  } finally {
    setSaving(false);
  }
}

return (
  <div className="space-y-8">

    <div>

      <h1 className="text-4xl font-bold">
        Edit Student
      </h1>

      <p className="mt-2 text-gray-500">
        Update student information.
      </p>

    </div>

    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div>

          <label className="mb-2 block font-semibold">
            Name
          </label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block font-semibold">
            Email
          </label>

          <input
            value={email}
            disabled
            className="w-full rounded-xl border bg-gray-100 p-3"
          />

        </div>

        {/* Mobile */}

        <div>

          <label className="mb-2 block font-semibold">
            Mobile
          </label>

          <input
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        {/* Progress */}

        <div>

          <label className="mb-2 block font-semibold">
            Progress %
          </label>

          <input
            type="number"
            value={progress}
            onChange={(e) =>
              setProgress(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        {/* Lessons Completed */}

        <div>

          <label className="mb-2 block font-semibold">
            Lessons Completed
          </label>

          <input
            type="number"
            value={lessonsCompleted}
            onChange={(e) =>
              setLessonsCompleted(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        {/* Current Lesson */}

        <div>

          <label className="mb-2 block font-semibold">
            Current Lesson
          </label>

          <input
            type="number"
            value={currentLesson}
            onChange={(e) =>
              setCurrentLesson(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        {/* Certificates */}

        <div>

          <label className="mb-2 block font-semibold">
            Certificates
          </label>

          <input
            type="number"
            value={certificates}
            onChange={(e) =>
              setCertificates(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "💾 Save Changes"}
        </button>

      </div>

    </div>

  </div>
);
}