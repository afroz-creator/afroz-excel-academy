"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function UserWelcome() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="mb-8 rounded-3xl bg-gradient-to-r from-green-700 to-green-600 p-8 text-white shadow-xl">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.displayName || "Student"} 👋
      </h1>

      <p className="mt-2 text-green-100">
        {user?.email}
      </p>
    </section>
  );
}