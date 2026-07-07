interface CardProps {
  title: string;
  description: string;
}

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
          Learn Now
        </button>

      </div>

    </div>
  );
}