import Card from "@/components/ui/Card";

const tutorials = [
  {
    title: "Excel Basics",
    description: "Start learning Microsoft Excel from scratch.",
  },
  {
    title: "Formulas",
    description: "Learn basic and advanced Excel formulas.",
  },
  {
    title: "Functions",
    description: "Master SUM, IF, XLOOKUP, VLOOKUP and more.",
  },
  {
    title: "Charts",
    description: "Create beautiful charts and graphs.",
  },
  {
    title: "Pivot Table",
    description: "Analyze large datasets easily.",
  },
  {
    title: "Dashboard",
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

          {tutorials.map((tutorial, index) => (
            <Card
              key={index}
              title={tutorial.title}
              description={tutorial.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}