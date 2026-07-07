const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Student",
    review:
      "Roman Hindi me Excel seekhna bahut easy ho gaya. Practical examples bahut helpful hain.",
  },
  {
    name: "Ayesha Khan",
    role: "College Student",
    review:
      "Projects aur practice files ki wajah se mera confidence kaafi improve hua.",
  },
  {
    name: "Imran Ali",
    role: "Office Executive",
    review:
      "Interview questions aur dashboards section ne meri job preparation me help ki.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Student Reviews
          </span>

          <h2 className="text-4xl font-bold mt-3">
            What Our Students Say
          </h2>

          <p className="mt-4 text-gray-600">
            Thousands of learners trust Afroz IT Solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-green-600">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}