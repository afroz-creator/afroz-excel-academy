"use client";

import { useEffect, useState } from "react";
import { getStudents } from "@/lib/admin";

interface Student {
  id: string;
  name?: string;
  email?: string;
  progress?: number;
  currentLesson?: number;
}

export default function RecentStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    loadStudents();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        Loading students...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Recent Students
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
                Lesson
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

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}