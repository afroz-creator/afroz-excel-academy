import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-yellow-50 px-6">

      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Afroz Excel Academy
          </h1>

          <p className="mt-3 text-gray-500">
            Sign in to continue learning
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <button
            className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
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