"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      alert("Login Successful!");

      router.push("/dashboard");

    } catch (err: any) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/user-not-found":
          setError("User not found.");
          break;

        case "auth/wrong-password":
          setError("Wrong password.");
          break;

        default:
          setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-yellow-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-gray-200 p-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-500">
            Login to continue learning
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-700 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
}