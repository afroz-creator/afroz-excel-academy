import Link from "next/link";
import { excelCourse } from "@/data/excelCourse";

export default function ExcelCoursePage() {
  const totalLessons = excelCourse.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      {/* Hero Card */}
      <div className="rounded-3xl bg-gradient-to-r from-green-700 to-green-500 p-10 text-white shadow-xl">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          📘 Premium Course
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          {excelCourse.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-green-100">
          Master Microsoft Excel from Basic to Advanced with practical projects,
          formulas, functions, charts, Pivot Tables and dashboards.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="/course/excel/lesson/1"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-gray-100"
          >
            🚀 Continue Learning
          </Link>

        </div>

      </div>

      {/* Course Stats */}
      <div className="mt-10 grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Instructor</p>
          <h3 className="mt-2 text-xl font-bold">
            {excelCourse.instructor}
          </h3>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Modules</p>
          <h3 className="mt-2 text-xl font-bold">
            {excelCourse.modules.length}
          </h3>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Lessons</p>
          <h3 className="mt-2 text-xl font-bold">
            {totalLessons}
          </h3>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-500">Progress</p>
          <h3 className="mt-2 text-xl font-bold">
            {excelCourse.progress}%
          </h3>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">

        <div className="mb-3 flex justify-between">
          <span className="font-semibold">
            Course Progress
          </span>

          <span className="font-bold text-green-700">
            {excelCourse.progress}%
          </span>
        </div>

        <div className="h-4 rounded-full bg-gray-200">
          <div
            className="h-4 rounded-full bg-green-600 transition-all"
            style={{
              width: `${excelCourse.progress}%`,
            }}
          />
        </div>

      </div>

      {/* Modules */}
      <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-bold">
          📚 Course Modules
        </h2>

        <div className="mt-8 space-y-8">

          {excelCourse.modules.map((module) => (
            <div key={module.id}>

              <h3 className="mb-4 text-xl font-bold text-green-700">
                {module.title}
              </h3>

              <div className="space-y-3">

                {module.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/course/excel/lesson/${lesson.id}`}
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-green-50"
                  >
                    <div>
                      <h4 className="font-semibold">
                        {lesson.title}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {lesson.duration}
                      </p>
                    </div>

                    <div className="text-xl">
                      {lesson.completed
                        ? "✅"
                        : lesson.locked
                        ? "🔒"
                        : "▶️"}
                    </div>

                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}