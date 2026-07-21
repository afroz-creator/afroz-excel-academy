"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

import {
  getLessons,
  deleteLesson,
} from "@/lib/admin";

interface Lesson {
  id: string;
  title?: string;
  course?: string;
  duration?: string;
  order?: number;
}

export default function LessonTable() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadLessons() {
    try {
      const data = await getLessons();
      setLessons(data as Lesson[]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLessons();
  }, []);

  async function handleDelete(id: string) {
    const ok = confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!ok) return;

    try {
      await deleteLesson(id);

      setLessons((prev) =>
        prev.filter((lesson) => lesson.id !== id)
      );

      alert("✅ Lesson deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete lesson.");
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow">
        Loading Lessons...
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Lessons
        </h2>

        <Link
          href="/admin/lessons/new"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Lesson
        </Link>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Lesson
              </th>

              <th className="py-3 text-left">
                Course
              </th>

              <th className="py-3 text-center">
                Duration
              </th>

              <th className="py-3 text-center">
                Order
              </th>

              <th className="py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {lessons.map((lesson) => (

              <tr
                key={lesson.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4 font-semibold">
                  {lesson.title ?? "-"}
                </td>

                <td className="py-4">
                  {lesson.course ?? "-"}
                </td>

                <td className="py-4 text-center">
                  {lesson.duration ?? "-"}
                </td>

                <td className="py-4 text-center">
                  {lesson.order ?? 1}
                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <button
                      className="rounded-lg p-2 hover:bg-blue-100"
                    >
                      <Eye
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <button
                      className="rounded-lg p-2 hover:bg-yellow-100"
                    >
                      <Pencil
                        size={18}
                        className="text-yellow-600"
                      />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(lesson.id)
                      }
                      className="rounded-lg p-2 hover:bg-red-100"
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}