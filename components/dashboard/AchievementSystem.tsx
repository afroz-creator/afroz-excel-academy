import {
  Award,
  Medal,
  Crown,
  Gem,
} from "lucide-react";

const achievements = [
  {
    title: "Bronze Learner",
    icon: Award,
    color: "text-orange-600",
    bg: "bg-orange-50",
    unlocked: true,
  },
  {
    title: "Silver Expert",
    icon: Medal,
    color: "text-gray-500",
    bg: "bg-gray-100",
    unlocked: true,
  },
  {
    title: "Gold Master",
    icon: Crown,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    unlocked: false,
  },
  {
    title: "Diamond Champion",
    icon: Gem,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    unlocked: false,
  },
];

export default function AchievementSystem() {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Achievements
          </h2>

          <p className="text-gray-500 mt-1">
            Unlock badges by completing lessons.
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          XP : 1,280
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`rounded-xl border p-6 text-center transition hover:shadow-lg ${
                item.unlocked
                  ? "border-green-200"
                  : "border-gray-200 opacity-60"
              }`}
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className={`h-10 w-10 ${item.color}`} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.unlocked ? "Unlocked" : "Locked"}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}