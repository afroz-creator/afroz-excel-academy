"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

import {
  getCourses,
  deleteCourse,
} from "@/lib/admin";

interface Course {
  id: string;
  title?: string;
  category?: string;
  instructor?: string;
  lessons?: number;
}

export default function CourseTable() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCourses() {
    try {
      const data = await getCourses();
      setCourses(data as Course[]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  async function handleDelete(id: string) {
    const ok = confirm(
      "Are you sure you want to delete this course?"
    );

    if (!ok) return;

    try {
      await deleteCourse(id);

      setCourses((prev) =>
        prev.filter((course) => course.id !== id)
      );

      alert("✅ Course deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete course.");
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 shadow">
        Loading Courses...
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Courses
        </h2>

        <Link
          href="/admin/courses/new"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Course
        </Link>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Title</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Instructor</th>
              <th className="py-3 text-center">Lessons</th>
              <th className="py-3 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {courses.map((course) => (

              <tr
                key={course.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4 font-semibold">
                  {course.title ?? "-"}
                </td>

                <td className="py-4">
                  {course.category ?? "-"}
                </td>

                <td className="py-4">
                  {course.instructor ?? "-"}
                </td>

                <td className="py-4 text-center">
                  {course.lessons ?? 0}
                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <button
                      className="rounded-lg p-2 hover:bg-blue-100"
                      title="View"
                    >
                      <Eye
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <Link
                        href={`/admin/courses/${course.id}/edit`}
                        className="rounded-lg p-2 hover:bg-yellow-100"
                        title="Edit"
                        >
                        <Pencil
                            size={18}
                            className="text-yellow-600"
                        />
                        </Link>

                    <button
                      onClick={() =>
                        handleDelete(course.id)
                      }
                      className="rounded-lg p-2 hover:bg-red-100"
                      title="Delete"
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