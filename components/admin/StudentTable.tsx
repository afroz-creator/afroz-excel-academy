"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  getStudents,
  deleteStudent,
} from "@/lib/admin";

interface Student {
  id: string;
  name?: string;
  email?: string;
  mobile?: string;
  progress?: number;
  currentLesson?: number;
  certificates?: number;
}

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadStudents() {
    try {
      const data = await getStudents();
      setStudents(data as Student[]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleDelete(id: string) {
    const ok = confirm(
      "Are you sure you want to delete this student?"
    );

    if (!ok) return;

    try {
      await deleteStudent(id);

      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

      alert("✅ Student deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete student.");
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        Loading Students...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Students
        </h2>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {students.length} Students
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Name
              </th>

              <th className="py-3 text-left">
                Email
              </th>

              <th className="py-3 text-center">
                Progress
              </th>

              <th className="py-3 text-center">
                Current Lesson
              </th>

              <th className="py-3 text-center">
                Certificates
              </th>

              <th className="py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4 font-semibold">
                  {student.name ?? "-"}
                </td>

                <td className="py-4">
                  {student.email ?? "-"}
                </td>

                <td className="py-4 text-center">
                  {student.progress ?? 0}%
                </td>

                <td className="py-4 text-center">
                  {student.currentLesson ?? 1}
                </td>

                <td className="py-4 text-center">
                  {student.certificates ?? 0}
                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    {/* View Student */}

                    <Link
                      href={`/admin/students/${student.id}`}
                      className="rounded-lg p-2 transition hover:bg-blue-100"
                      title="View Student"
                    >
                      <Eye
                        size={18}
                        className="text-blue-600"
                      />
                    </Link>

                    {/* Edit Student */}

                    <button
                      className="rounded-lg p-2 transition hover:bg-yellow-100"
                      title="Edit Student"
                    >
                      <Pencil
                        size={18}
                        className="text-yellow-600"
                      />
                    </button>

                    {/* Delete Student */}

                    <button
                      onClick={() =>
                        handleDelete(student.id)
                      }
                      className="rounded-lg p-2 transition hover:bg-red-100"
                      title="Delete Student"
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