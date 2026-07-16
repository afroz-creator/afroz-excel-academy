import Image from "next/image";

interface LessonHeroProps {
  title: string;
  module: string;
  duration: string;
  type: string;
  image: string;
}

export default function LessonHero({
  title,
  module,
  duration,
  type,
  image,
}: LessonHeroProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 shadow-xl">

      <div className="grid items-center gap-8 p-8 lg:grid-cols-2">

        {/* Left */}
        <div className="text-white">

          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            📘 {module}
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight">
            {title}
          </h1>

          {/* Debug */}
          <p className="mt-2 text-red-200 break-all">
            {image}
          </p>

          <p className="mt-4 text-green-100">
            Afroz Excel Academy
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 font-semibold text-green-700">
              ⏱ {duration}
            </span>

            <span className="rounded-full bg-white px-4 py-2 font-semibold text-green-700">
              📚 {type}
            </span>

            <span className="rounded-full bg-yellow-300 px-4 py-2 font-semibold text-black">
              ⭐ Beginner
            </span>

          </div>

          <button className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:scale-105">
            ▶️ Start Learning
          </button>

        </div>

        {/* Right */}
        <div className="relative h-[320px] w-full">

          <Image
            src={image}
            alt={title}
            fill
            className="rounded-2xl object-cover shadow-2xl"
            priority
          />

        </div>

      </div>

    </div>
  );
}