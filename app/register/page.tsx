export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-yellow-50 px-6 py-12">

      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Create Your Account
          </h1>

          <p className="mt-3 text-gray-500">
            Join Afroz Excel Academy Today
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

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
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <button
            className="mt-4 w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?
          <a
            href="/login"
            className="ml-1 font-semibold text-green-700 hover:underline"
          >
            Login
          </a>
        </p>

      </div>

    </main>
  );
}