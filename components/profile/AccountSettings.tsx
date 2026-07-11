"use client";

import {
  LogOut,
  UserPen,
  Lock,
  Camera,
} from "lucide-react";

import { logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function AccountSettings() {
  const router = useRouter();

  async function handleLogout() {
    const ok = confirm("Are you sure you want to logout?");

    if (!ok) return;

    await logoutUser();

    router.push("/login");
  }

  const actions = [
    {
      title: "Edit Profile",
      description: "Update your personal information",
      icon: UserPen,
      color: "bg-blue-500",
      disabled: true,
    },
    {
      title: "Change Password",
      description: "Secure your account",
      icon: Lock,
      color: "bg-yellow-500",
      disabled: true,
    },
    {
      title: "Change Profile Photo",
      description: "Upload your profile picture",
      icon: Camera,
      color: "bg-green-500",
      disabled: true,
    },
  ];

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Account Settings
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your account securely.
        </p>
      </div>

      <div className="space-y-5">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              disabled={item.disabled}
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                Coming Soon
              </span>
            </button>
          );
        })}

        <button
          onClick={handleLogout}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </section>
  );
}