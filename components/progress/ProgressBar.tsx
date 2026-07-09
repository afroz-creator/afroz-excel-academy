interface ProgressBarProps {
  completed: number;
  total: number;
}

export default function ProgressBar({
  completed,
  total,
}: ProgressBarProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-2xl font-bold">
            Course Progress
          </h2>

          <span className="font-bold text-green-600">
            {percentage}%
          </span>

        </div>

        <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-green-600 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <p className="mt-4 text-gray-600">
          Completed {completed} of {total} lessons
        </p>

      </div>
    </section>
  );
}