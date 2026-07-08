import Link from "next/link";

const tutorials = [
  {
    title: "Excel Basics",
    description: "Learn Excel Interface, Rows, Columns and Formatting.",
  },
  {
    title: "Formulas",
    description: "Master Excel formulas with practical examples.",
  },
  {
    title: "Functions",
    description: "Learn SUM, IF, VLOOKUP, XLOOKUP and more.",
  },
  {
    title: "Charts",
    description: "Create beautiful charts and graphs.",
  },
  {
    title: "Pivot Table",
    description: "Analyze large data using Pivot Tables.",
  },
  {
    title: "Dashboard",
    description: "Build professional interactive dashboards.",
  },
];

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700">
            Microsoft Excel Tutorials
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Learn Excel from Basic to Advanced with Practical Examples.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {tutorial.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {tutorial.description}
              </p>

              <Link
                href={`/tutorials/${tutorial.title
  .toLowerCase()
  .replace(/\s+/g, "-")}`}
                className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
              >
                Start Learning →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}