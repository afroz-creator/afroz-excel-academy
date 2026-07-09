import InfoCard from "@/components/ui/InfoCard";

const levels = [
  {
    title: "🟢 Beginner",
    description: "Excel Interface, Rows, Columns, Formatting and Basic Functions.",
  },
  {
    title: "🔵 Intermediate",
    description: "Formulas, Functions, Charts and Data Validation.",
  },
  {
    title: "🟣 Advanced",
    description: "Pivot Tables, Dashboards and Conditional Formatting.",
  },
  {
    title: "🟠 Expert",
    description: "VBA, Power Query and Real-World Projects.",
  },
];

export default function LearningPath() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Afroz IT Solution
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Learning Path
          </h2>

          <p className="text-gray-600 mt-4">
            Follow this roadmap to become an Excel Expert.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => (
  <InfoCard
    key={index}
    title={level.title}
    description={level.description}
  />
))}
        </div>

      </div>
    </section>
  );
}