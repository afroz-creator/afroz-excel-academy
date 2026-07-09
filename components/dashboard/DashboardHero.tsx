export default function DashboardHero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-3xl p-10">
      <p className="text-green-100 text-sm uppercase tracking-wider">
        Welcome Back
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mt-3">
        Continue Your Excel Journey 
      </h1>

      <p className="mt-5 text-lg text-green-100 max-w-2xl">
        Track your learning progress, complete lessons, unlock achievements,
        and become an Excel Expert with Afroz Excel Academy.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
          Continue Learning →
        </button>

        <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition">
          View Progress
        </button>
      </div>
    </section>
  );
}