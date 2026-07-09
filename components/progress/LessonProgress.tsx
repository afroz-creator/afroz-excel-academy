interface LessonProgressProps {
  completed: boolean;
  onComplete: () => void;
}

export default function LessonProgress({
  completed,
  onComplete,
}: LessonProgressProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-12">
      <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Lesson Progress
          </h2>

          <p className="text-gray-600 mt-2">
            Mark this lesson as completed after finishing it.
          </p>
        </div>

        <button
          onClick={onComplete}
          disabled={completed}
          className={`mt-6 md:mt-0 px-8 py-3 rounded-xl font-bold transition ${
            completed
              ? "bg-green-600 text-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {completed ? "✅ Lesson Completed" : "Mark as Complete"}
        </button>

      </div>
    </section>
  );
}