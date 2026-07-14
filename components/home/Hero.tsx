import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-3xl">

          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Welcome to Afroz IT Solution
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Learn Microsoft Excel
            <br />
            From Basic to Advanced
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Learn Microsoft Excel in Roman Hindi with Practical Projects,
            Practice Files and Interview Questions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/course/excel"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              🚀 Start Learning
            </Link>

            <Link
              href="/course/excel/lesson/1"
              className="rounded-xl border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-green-700"
            >
              📘 Preview Lesson
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}