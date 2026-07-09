import Link from "next/link";

interface TutorialCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function TutorialCard({
  title,
  description,
  slug,
}: TutorialCardProps) {
  return (
    <Link
      href={`/tutorials/${slug}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border"
    >
      <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-6 inline-block bg-green-600 text-white px-5 py-2 rounded-lg">
          Learn Now →
        </div>
      </div>
    </Link>
  );
}