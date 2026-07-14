interface LessonPlayerContentProps {
  title: string;
  description: string;
  duration: string;
  type: "Video" | "PDF" | "Quiz";
  module: string;
}

export default function LessonPlayerContent({
  title,
  description,
  duration,
  type,
  module,
}: LessonPlayerContentProps) {
  return (
    <div className="space-y-6">

      {/* Video Card */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">

          <div className="text-center text-white">

            <div className="mb-6 text-7xl">
              ▶️
            </div>

            <h2 className="text-3xl font-bold">
              Video Player
            </h2>

            <p className="mt-3 text-slate-300">
              Video integration will be added in Package 11 – Step 6
            </p>

          </div>

        </div>

      </div>

      {/* Lesson Details */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {module}
        </span>

        <h1 className="mt-5 text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          {description}
        </p>

      </div>

      {/* Lesson Info */}
      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Duration
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {duration}
          </h3>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Lesson Type
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {type}
          </h3>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Module
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {module}
          </h3>

        </div>

      </div>

    </div>
  );
}