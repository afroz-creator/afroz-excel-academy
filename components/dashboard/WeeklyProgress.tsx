const weeklyData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 30 },
];

export default function WeeklyProgress() {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Weekly Progress
          </h2>

          <p className="mt-1 text-gray-500">
            Your learning activity this week
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          +12% This Week
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4 h-64">
        {weeklyData.map((item) => (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center"
          >
            <div className="flex h-48 items-end">
              <div
                className="w-10 rounded-t-xl bg-gradient-to-t from-green-700 via-green-500 to-green-300 transition-all duration-300 hover:scale-105"
                style={{
                  height: `${item.value}%`,
                }}
              />
            </div>

            <p className="mt-3 text-sm font-medium text-gray-600">
              {item.day}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}