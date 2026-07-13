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
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">{module}</p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
        <div className="flex aspect-video items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-6xl">🎥</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Video Player
            </h2>

            <p className="mt-2 text-gray-500">
              Coming in Package 11 – Step 4
            </p>
          </div>
        </div>
      </div>

      {/* Lesson Info */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Duration</p>

          <h3 className="mt-2 text-lg font-semibold">
            {duration}
          </h3>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Lesson Type</p>

          <h3 className="mt-2 text-lg font-semibold">
            {type}
          </h3>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Module</p>

          <h3 className="mt-2 text-lg font-semibold">
            {module}
          </h3>
        </div>
      </div>
    </section>
  );
}