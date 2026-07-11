"use client";

import { useEffect, useState } from "react";
import { getStudentProfile } from "@/lib/student";

interface StudentProfile {
  name: string;
  email: string;
  mobile: string;
  role: string;
  progress: number;
}

export default function UserWelcome() {
  const [student, setStudent] = useState<StudentProfile | null>(null);

  useEffect(() => {
    async function loadStudent() {
      const data = await getStudentProfile();

      if (data) {
        setStudent(data as StudentProfile);
      }
    }

    loadStudent();
  }, []);

  return (
    <section className="mb-8 rounded-3xl bg-gradient-to-r from-green-700 to-green-600 p-8 text-white shadow-xl">

      <h1 className="text-3xl font-bold">
        Welcome, {student?.name || "Student"} 👋
      </h1>

      <p className="mt-2 text-green-100">
        {student?.email}
      </p>

      <p className="mt-1 text-green-200 text-sm">
        Mob: {student?.mobile}
      </p>

    </section>
  );
}