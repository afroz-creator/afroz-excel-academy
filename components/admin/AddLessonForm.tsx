"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addLesson } from "@/lib/admin";

export default function AddLessonForm() {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [order, setOrder] = useState(1);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setSaving(true);

      await addLesson({
        title,
        course,
        duration,
        order: Number(order),
        createdAt: new Date(),
      });

      alert("✅ Lesson added successfully.");

      router.push("/admin/lessons");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("❌ Failed to add lesson.");
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

        {/* Lesson Title */}
        <div>
          <label className="mb-2 block font-semibold">
            Lesson Title
          </label>

          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Introduction to Excel"
          />
        </div>

        {/* Course */}
        <div>
          <label className="mb-2 block font-semibold">
            Course
          </label>

          <input
            type="text"
            required
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="Advanced Excel"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="mb-2 block font-semibold">
            Duration
          </label>

          <input
            type="text"
            required
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border p-3"
            placeholder="15 Minutes"
          />
        </div>

        {/* Lesson Order */}
        <div>
          <label className="mb-2 block font-semibold">
            Lesson Order
          </label>

          <input
            type="number"
            required
            value={order}
            onChange={(e) =>
              setOrder(Number(e.target.value))
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
          {saving ? "Saving..." : "💾 Save Lesson"}
        </button>
      </div>
    </form>
  );
}