"use client";

import UserDropdown from "./UserDropdown";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, onAuthStateChanged } from "firebase/auth";
import { Search, Menu, X } from "lucide-react";

import { auth } from "@/lib/firebase";
import { logoutUser } from "@/lib/auth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);




  async function handleLogout() {
    try {
      await logoutUser();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Afroz Excel Academy"
              width={60}
              height={60}
              priority
            />

            <div>
              <h1 className="text-lg font-bold text-green-700 lg:text-xl">
                Afroz Excel Academy
              </h1>

              <p className="text-xs text-gray-500">
                Powered by Afroz IT Solution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 font-medium text-gray-700 lg:flex">

            <Link href="/" className="transition hover:text-green-700">
              Home
            </Link>

            <Link
              href="/tutorials"
              className="transition hover:text-green-700"
            >
              Tutorials
            </Link>

            <Link
              href="/dashboard"
              className="transition hover:text-green-700"
            >
              Dashboard
            </Link>

            <Link
              href="/practice"
              className="transition hover:text-green-700"
            >
              Practice
            </Link>

            <Link
              href="/projects"
              className="transition hover:text-green-700"
            >
              Projects
            </Link>

            <Link
              href="/downloads"
              className="transition hover:text-green-700"
            >
              Downloads
            </Link>

          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 lg:flex">

            <button className="rounded-lg p-2 transition hover:bg-gray-100">
              <Search size={20} />
            </button>

            {loading ? null : user ? (
              <UserDropdown
                user={user}
                onLogout={handleLogout}
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-green-700 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-50"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-green-700 px-5 py-2.5 font-semibold text-white transition hover:bg-green-800"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">

            <button className="rounded-lg p-2 hover:bg-gray-100">
              <Search size={20} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <Menu size={28} />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">

          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b p-5">

              <div>
                <h2 className="text-xl font-bold text-green-700">
                  Afroz Excel Academy
                </h2>

                <p className="text-xs text-gray-500">
                  Powered by Afroz IT Solution
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>

            </div>

            {/* Menu */}
            <nav className="flex flex-col p-5">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                🏠 Home
              </Link>

              <Link
                href="/tutorials"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                📘 Tutorials
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                📊 Dashboard
              </Link>

              <Link
                href="/practice"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                💻 Practice
              </Link>

              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                📂 Projects
              </Link>

              <Link
                href="/downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 hover:bg-green-50"
              >
                📥 Downloads
              </Link>

              <div className="mt-6 border-t pt-6">

                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mb-3 block rounded-xl border border-green-700 px-5 py-3 text-center font-semibold text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl bg-green-700 px-5 py-3 text-center font-semibold text-white"
                >
                  Register
                </Link>

              </div>

            </nav>

          </div>

        </div>
      )}
    </>
  );
}