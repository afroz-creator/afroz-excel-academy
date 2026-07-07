export default function Newsletter() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Become an Excel Expert?
        </h2>

        <p className="mt-6 text-green-100 text-lg">
          Join Afroz IT Solution and start learning Microsoft Excel with
          practical projects, notes and quizzes.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl text-gray-800 w-full md:w-96 outline-none"
          />

          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}