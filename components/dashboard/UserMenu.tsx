"use client";

import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function UserMenu() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await logoutUser();

    router.replace("/login");
  }

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
          {user?.displayName?.charAt(0).toUpperCase() || "A"}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {user?.displayName || "Student"}
          </h2>

          <p className="text-sm text-gray-500">
            {user?.email}
          </p>
        </div>

      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}