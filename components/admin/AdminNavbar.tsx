"use client";

import Link from "next/link";
import { Bell, Search, UserCircle } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left */}

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border py-2 pl-10 pr-4 outline-none transition focus:border-green-600"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border p-3 transition hover:bg-gray-100">

          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* Profile */}

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl border px-4 py-2 transition hover:bg-gray-100"
        >
          <UserCircle size={38} />

          <div className="hidden md:block">
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Afroz IT Solution
            </p>
          </div>

        </Link>

      </div>

    </header>
  );
}