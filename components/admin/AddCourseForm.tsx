"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addCourse } from "@/lib/admin";

export default function AddCourseForm() {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [lessons, setLessons] = useState(0);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setSaving(true);

      await addCourse({
        title,
        category,
        instructor,
        lessons: Number(lessons),
        createdAt: new Date(),
      });

      alert("✅ Course added successfully.");

      router.push("/admin/courses");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("❌ Failed to add course.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold">
            Course Title
          </label>

          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Advanced Excel"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Category
          </label>

          <input
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Microsoft Office"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Instructor
          </label>

          <input
            type="text"
            required
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Afroz IT Solution"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Total Lessons
          </label>

          <input
            type="number"
            required
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
          type="submit"
          disabled={saving}
          className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "💾 Save Course"}
        </button>
      </div>
    </form>
  );
}