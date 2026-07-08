interface LessonHeroProps {
  title: string;
  level: string;
  duration: string;
  module: string;
}

export default function LessonHero({
  title,
  level,
  duration,
  module,
}: LessonHeroProps) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <span className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold">
          Afroz IT Solution
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-8">
          {title}
        </h1>

        <div className="flex flex-wrap gap-4 mt-8">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            ⭐ {level}
          </span>

          <span className="bg-white/20 px-4 py-2 rounded-full">
            ⏱ {duration}
          </span>

          <span className="bg-white/20 px-4 py-2 rounded-full">
            📚 {module}
          </span>

        </div>

        <p className="mt-8 text-xl max-w-3xl text-green-100">
          Learn Microsoft Excel step by step in simple Roman Hindi with practical examples.
        </p>

        <button className="mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
          Start Practice →
        </button>

      </div>
    </section>
  );
}