import Link from "next/link";

interface Props {
  previous?: {
    title: string;
    slug: string;
  };
  next?: {
    title: string;
    slug: string;
  };
}

export default function LessonNavigation({
  previous,
  next,
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-3 gap-6">

        {/* Previous */}

        <div>
          {previous && (
            <Link
              href={`/tutorials/${previous.slug}`}
              className="block rounded-2xl border p-6 hover:border-green-600 hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500">
                ← Previous Lesson
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-800">
                {previous.title}
              </h3>
            </Link>
          )}
        </div>

        {/* All Lessons */}

        <Link
          href="/tutorials"
          className="rounded-2xl bg-green-700 text-white flex items-center justify-center text-lg font-semibold hover:bg-green-800 transition"
        >
          All Lessons
        </Link>

        {/* Next */}

        <div>
          {next && (
            <Link
              href={`/tutorials/${next.slug}`}
              className="block rounded-2xl border p-6 hover:border-green-600 hover:shadow-lg transition text-right"
            >
              <p className="text-sm text-gray-500">
                Next Lesson →
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-800">
                {next.title}
              </h3>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}