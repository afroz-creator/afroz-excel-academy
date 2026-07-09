import TutorialCard from "@/components/ui/TutorialCard";

const tutorials = [
  {
    title: "Excel Basics",
    slug: "excel-basics",
    description: "Start learning Microsoft Excel from scratch.",
  },
  {
    title: "Formulas",
    slug: "formulas",
    description: "Learn basic and advanced Excel formulas.",
  },
  {
    title: "Functions",
    slug: "functions",
    description: "Master SUM, IF, XLOOKUP, VLOOKUP and more.",
  },
  {
    title: "Charts",
    slug: "charts",
    description: "Create beautiful charts and graphs.",
  },
  {
    title: "Pivot Table",
    slug: "pivot-table",
    description: "Analyze large datasets easily.",
  },
  {
    title: "Dashboard",
    slug: "dashboard",
    description: "Build professional interactive dashboards.",
  },
];

export default function TutorialGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Afroz IT Solution
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Popular Tutorials
          </h2>

          <p className="text-gray-600 mt-4">
            Learn Microsoft Excel step by step with practical examples.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tutorials.map((tutorial) => (
  <TutorialCard
    key={tutorial.slug}
    title={tutorial.title}
    description={tutorial.description}
    slug={tutorial.slug}
  />
))}

        </div>

      </div>
    </section>
  );
}