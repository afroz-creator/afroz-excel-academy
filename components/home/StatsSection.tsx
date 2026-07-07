const stats = [
  {
    number: "100+",
    title: "Excel Tutorials",
  },
  {
    number: "50+",
    title: "Practice Files",
  },
  {
    number: "20+",
    title: "Real Projects",
  },
  {
    number: "10K+",
    title: "Happy Students",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-green-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-4 text-green-100">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}