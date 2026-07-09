import Link from "next/link";

interface ContinueLearningProps {
  nextLesson: {
    title: string;
    slug: string;
  };
}

export default function ContinueLearning({
  nextLesson,
}: ContinueLearningProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-12 mb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-10 text-white flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold">
            Continue Learning
          </h2>

          <p className="mt-3 text-green-100">
            Next Lesson: <strong>{nextLesson.title}</strong>
          </p>
        </div>

        <Link
          href={`/tutorials/${nextLesson.slug}`}
          className="mt-6 md:mt-0 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Continue →
        </Link>

      </div>
    </section>
  );
}