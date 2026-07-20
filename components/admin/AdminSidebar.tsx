"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: GraduationCap,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Lessons",
    href: "/admin/lessons",
    icon: FileText,
  },
  {
    title: "Certificates",
    href: "/admin/certificates",
    icon: Award,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r bg-white lg:block">

      {/* Logo */}

      <div className="border-b p-6">

        <h1 className="text-2xl font-bold text-green-700">
          Afroz Excel Academy
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Admin Panel
        </p>

      </div>

      {/* Menu */}

      <nav className="space-y-2 p-5">

        {menus.map((menu) => {

          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition

                ${
                  active
                    ? "bg-green-600 text-white shadow"
                    : "text-gray-700 hover:bg-green-50"
                }
              `}
            >
              <Icon size={22} />

              <span className="font-semibold">
                {menu.title}
              </span>

            </Link>
          );
        })}

      </nav>

    </aside>
  );
}