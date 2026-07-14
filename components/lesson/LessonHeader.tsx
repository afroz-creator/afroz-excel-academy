interface LessonHeaderProps {
  title: string;
  progress: number;
}

export default function LessonHeader({
  title,
  progress,
}: LessonHeaderProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            📘 Advanced Excel Masterclass
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-3 text-gray-600">
            Learn Microsoft Excel step by step with practical examples,
            projects, and real-world exercises.
          </p>
        </div>

        {/* Right */}
        <div className="w-full max-w-sm">

          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Course Progress
            </span>

            <span className="font-bold text-blue-600">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>

      </div>

    </div>
  );
}