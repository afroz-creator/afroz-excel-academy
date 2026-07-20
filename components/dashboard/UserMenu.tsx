"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ChevronDown,
  User,
  BookOpen,
  Download,
  Award,
  Settings,
  LogOut,
} from "lucide-react";

import { logoutUser } from "@/lib/auth";
import { getStudentProfile } from "@/lib/student";

interface StudentProfile {
  name: string;
  email: string;
  mobile: string;
  role: string;
}

export default function UserMenu() {
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const [student, setStudent] =
    useState<StudentProfile | null>(null);

  useEffect(() => {
    async function loadStudent() {
      const data = await getStudentProfile();

      if (data) {
        setStudent(data as StudentProfile);
      }
    }

    loadStudent();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  async function handleLogout() {
    await logoutUser();
    router.replace("/login");
  }

  return (
    <div
      ref={menuRef}
      className="relative inline-block"
    >
      {/* Avatar Button */}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
          {student?.name?.charAt(0).toUpperCase() || "S"}
        </div>

        <div className="hidden text-left md:block">
          <h3 className="font-bold">
            {student?.name || "Student"}
          </h3>

          <p className="text-sm text-gray-500">
            {student?.email}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div className="absolute right-0 top-16 z-[9999] mt-2 w-72 overflow-hidden rounded-3xl border bg-white shadow-2xl">

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100"
          >
            <User size={20} />
            My Profile
          </Link>

          <Link
            href="/course"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100"
          >
            <BookOpen size={20} />
            My Courses
          </Link>

          <Link
            href="/downloads"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100"
          >
            <Download size={20} />
            My Downloads
          </Link>

          <Link
            href="/certificates"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100"
          >
            <Award size={20} />
            Certificates
          </Link>

          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100"
          >
            <Settings size={20} />
            Settings
          </Link>

          <hr />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 px-6 py-4 text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>
      )}
    </div>
  );
}