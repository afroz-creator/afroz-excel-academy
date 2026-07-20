"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "firebase/auth";

import {
  ChevronDown,
  UserCircle,
  BookOpen,
  Download,
  Award,
  Settings,
  LogOut,
} from "lucide-react";

interface UserDropdownProps {
  user: User;
  onLogout: () => void;
}

export default function UserDropdown({
  user,
  onLogout,
}: UserDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      {/* User Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2 transition hover:bg-green-100"
      >
        <UserCircle className="h-6 w-6 text-green-700" />

        <span className="font-semibold text-green-700">
          {user.displayName || "Student"}
        </span>

        <ChevronDown
          className={`h-5 w-5 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border bg-white shadow-2xl z-50">

          {/* Header */}
          <div className="border-b p-5">

            <p className="text-sm text-gray-500">
              Welcome 👋
            </p>

            <h3 className="mt-1 text-lg font-bold">
              {user.displayName || "Student"}
            </h3>

            <p className="text-sm text-gray-500 break-all">
              {user.email}
            </p>

          </div>

          {/* Menu */}
          <div className="p-2">

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-gray-100"
            >
              <UserCircle size={20} />
              My Profile
            </Link>

            <Link
              href="/course"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-gray-100"
            >
              <BookOpen size={20} />
              My Courses
            </Link>

            <Link
              href="/downloads"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-gray-100"
            >
              <Download size={20} />
              My Downloads
            </Link>

            <Link
              href="/certificates"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-gray-100"
            >
              <Award size={20} />
              Certificates
            </Link>

            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-gray-100"
            >
              <Settings size={20} />
              Settings
            </Link>

          </div>

          {/* Logout */}
          <div className="border-t p-2">

            <button
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={20} />
              Logout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}