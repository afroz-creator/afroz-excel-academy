import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const lessons = [
  {
    title: "Excel Basics",
    progress: 80,
    slug: "excel-basics",
  },
  {
    title: "Formulas",
    progress: 45,
    slug: "formulas",
  },
  {
    title: "Pivot Table",
    progress: 20,
    slug: "pivot-table",
  },
];

export default function ContinueLearning() {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Continue Learning
          </h2>

          <p className="mt-1 text-gray-500">
            Resume your unfinished lessons
          </p>
        </div>

      </div>

      <div className="mt-8 space-y-6">

        {lessons.map((lesson) => (
          <div
            key={lesson.slug}
            className="rounded-xl border border-gray-200 p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <BookOpen className="h-6 w-6 text-green-700" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {lesson.progress}% Completed
                  </p>
                </div>

              </div>

              <Link
                href={`/tutorials/${lesson.slug}`}
                className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
              >
                Continue

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <div className="mt-4 h-3 rounded-full bg-gray-200">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-green-500 to-green-700"
                style={{
                  width: `${lesson.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}