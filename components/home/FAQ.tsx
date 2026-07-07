const faqs = [
  {
    question: "Kya ye course beginners ke liye hai?",
    answer: "Haan, ye course bilkul basic se shuru hota hai.",
  },
  {
    question: "Practice files milengi?",
    answer: "Haan, har tutorial ke saath practice files di jayengi.",
  },
  {
    question: "Language kya hai?",
    answer: "Pure course ki language Roman Hindi hai.",
  },
  {
    question: "Certificate milega?",
    answer: "Future version me certificate feature add kiya jayega.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-bold text-green-700">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
