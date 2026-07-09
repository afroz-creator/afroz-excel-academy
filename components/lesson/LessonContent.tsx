interface LessonContentProps {
  title: string;
  description: string;
  realLifeUses: string[];
}

export default function LessonContent({
  title,
  description,
  realLifeUses,
}: LessonContentProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* What is Excel */}

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          {description}
        </p>

      </div>

      {/* Real Life Uses */}

      <div className="mt-12 bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          🌍 Real Life Uses
        </h2>

        <ul className="mt-8 space-y-4 text-lg text-gray-600">
          {realLifeUses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

    </section>
  );
}