"use client";

import {
  Mail,
  Phone,
  Shield,
  Calendar,
  User,
} from "lucide-react";

import { useStudent } from "@/context/StudentContext";

export default function ProfileInformation() {
  const { student, loading } = useStudent();

  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-gray-200 h-96" />
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        👤 Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <User className="text-blue-600" />
            <span className="font-semibold text-gray-500">
              Full Name
            </span>
          </div>

          <p className="text-xl font-bold text-gray-800">
            {student?.name || "Not Available"}
          </p>
        </div>

        {/* Email */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <Mail className="text-green-600" />
            <span className="font-semibold text-gray-500">
              Email
            </span>
          </div>

          <p className="text-lg text-gray-800 break-all">
            {student?.email || "Not Available"}
          </p>
        </div>

        {/* Mobile */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <Phone className="text-orange-600" />
            <span className="font-semibold text-gray-500">
              Mobile
            </span>
          </div>

          <p className="text-lg text-gray-800">
            {student?.mobile || "Not Available"}
          </p>
        </div>

        {/* Role */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <Shield className="text-purple-600" />
            <span className="font-semibold text-gray-500">
              Role
            </span>
          </div>

          <p className="text-lg font-semibold text-gray-800">
            {student?.role || "Student"}
          </p>
        </div>

        {/* Joined */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <Calendar className="text-red-600" />
            <span className="font-semibold text-gray-500">
              Joined
            </span>
          </div>

          <p className="text-lg text-gray-800">
            {student?.createdAt?.toDate
              ? student.createdAt
                  .toDate()
                  .toLocaleDateString()
              : "Not Available"}
          </p>
        </div>

        {/* Status */}
        <div className="rounded-2xl border p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">🟢</span>

            <span className="font-semibold text-gray-500">
              Account Status
            </span>
          </div>

          <p className="font-bold text-green-600">
            {student?.isActive
              ? "Active"
              : "Inactive"}
          </p>
        </div>

      </div>

    </div>
  );
}