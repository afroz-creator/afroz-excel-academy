interface LessonHeaderProps {
  title: string;
  progress: number;
}

export default function LessonHeader({
  title,
  progress,
}: LessonHeaderProps) {
  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Excel Master Course
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            {title}
          </h1>
        </div>

        <div className="w-full md:w-72">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Course Progress
            </span>

            <span className="text-sm font-semibold text-blue-600">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}