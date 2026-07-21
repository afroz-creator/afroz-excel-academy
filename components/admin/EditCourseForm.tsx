"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Props {
  courseId: string;
}

export default function EditCourseForm({
  courseId,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [lessons, setLessons] = useState(0);

  useEffect(() => {
    async function loadCourse() {
      try {
        const ref = doc(db, "courses", courseId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          setTitle(data.title ?? "");
          setCategory(data.category ?? "");
          setInstructor(data.instructor ?? "");
          setLessons(data.lessons ?? 0);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [courseId]);

  async function handleSave() {
    try {
      setSaving(true);

      const ref = doc(db, "courses", courseId);

      await updateDoc(ref, {
        title,
        category,
        instructor,
        lessons: Number(lessons),
      });

      alert("✅ Course updated successfully.");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update course.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow">
        Loading Course...
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold">
            Course Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Category
          </label>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Instructor
          </label>

          <input
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Total Lessons
          </label>

          <input
            type="number"
            value={lessons}
            onChange={(e) =>
              setLessons(Number(e.target.value))
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

      </div>

      <div className="mt-8">

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
  );
}