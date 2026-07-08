const features = [
  {
    icon: "📊",
    title: "Spreadsheet",
    description: "Organize data in rows and columns quickly and efficiently.",
  },
  {
    icon: "🧮",
    title: "Formulas",
    description: "Perform automatic calculations using Excel formulas.",
  },
  {
    icon: "⚙️",
    title: "Functions",
    description: "Use powerful functions like SUM, IF, COUNTIF and XLOOKUP.",
  },
  {
    icon: "📈",
    title: "Charts",
    description: "Visualize your data using beautiful charts and graphs.",
  },
  {
    icon: "📋",
    title: "Pivot Tables",
    description: "Analyze large datasets in just a few clicks.",
  },
  {
    icon: "📉",
    title: "Dashboards",
    description: "Create professional interactive dashboards for reports.",
  },
];

export default function LessonFeatures() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="text-center">

        <span className="text-green-600 font-semibold uppercase tracking-widest">
          Learn Better
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-800">
          Excel Features You'll Learn
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Master the most important tools of Microsoft Excel.
        </p>

      </div>

      <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-green-700 transition">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}