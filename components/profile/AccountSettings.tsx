"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import {
  User,
  Lock,
  Award,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function AccountSettings() {
  const router = useRouter();

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  const items = [
    {
      icon: User,
      title: "Edit Profile",
      subtitle: "Update your personal information",
      href: "/profile/edit",
    },
    {
      icon: Lock,
      title: "Change Password",
      subtitle: "Keep your account secure",
      href: "/profile/password",
    },
    {
      icon: Award,
      title: "Certificates",
      subtitle: "Download earned certificates",
      href: "/certificates",
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        ⚙️ Account Settings
      </h2>

      <div className="space-y-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => router.push(item.href)}
              className="flex w-full items-center justify-between rounded-2xl border p-4 transition hover:bg-gray-50 hover:shadow"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3">
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              <ChevronRight />

            </button>
          );
        })}

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="mt-3 flex w-full items-center justify-between rounded-2xl border border-red-200 bg-red-50 p-4 transition hover:bg-red-100"
        >
          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-red-100 p-3">
              <LogOut
                size={22}
                className="text-red-600"
              />
            </div>

            <div className="text-left">

              <h3 className="font-semibold text-red-600">
                Logout
              </h3>

              <p className="text-sm text-red-400">
                Sign out from your account
              </p>

            </div>

          </div>

        </button>

      </div>

    </div>
  );
}