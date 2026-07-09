import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  slug: string;
}

export default function Card({
  title,
  description,
  slug,
}: CardProps) {
  return (
    <Link
      href={`/tutorials/${slug}`}
      className="block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200"
    >
      <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-6">
          <span className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Learn Now →
          </span>
        </div>
      </div>
    </Link>
  );
}