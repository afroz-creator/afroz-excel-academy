"use client";

import { User, Mail, Phone, Shield } from "lucide-react";
import { useStudent } from "@/context/StudentContext";

export default function PersonalInfo() {
  const { student, loading } = useStudent();

  if (loading) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Loading...
      </div>
    );
  }

  if (!student) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Student not found.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Personal Information
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <User className="h-6 w-6 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold">{student.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{student.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-orange-600" />
          <div>
            <p className="text-sm text-gray-500">Mobile</p>
            <p className="font-semibold">{student.mobile}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Shield className="h-6 w-6 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-semibold capitalize">
              {student.role}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}