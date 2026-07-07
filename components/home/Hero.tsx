export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            Welcome to Afroz IT Solution
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Learn Microsoft Excel
            <br />
            From Basic to Advanced
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Learn Microsoft Excel in Roman Hindi with Practical Projects,
            Practice Files and Interview Questions.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Start Learning
            </button>

            <button className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition">
              Download Notes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}