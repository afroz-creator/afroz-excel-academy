export default function LessonPractice() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-green-600 to-green-700 p-10 text-white shadow-xl">

        <h2 className="text-4xl font-bold">
          📝 Practice Activity
        </h2>

        <p className="mt-4 text-lg text-green-100">
          Complete the following activity to strengthen your understanding of Microsoft Excel.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">
              🎯 Task
            </h3>

            <ul className="mt-4 space-y-3 text-green-100">
              <li>✅ Open Microsoft Excel.</li>
              <li>✅ Create a new blank workbook.</li>
              <li>✅ Enter your Name, Class and Roll Number.</li>
              <li>✅ Save the file as <strong>My First Excel File.xlsx</strong>.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">
              💡 Tip
            </h3>

            <p className="mt-4 text-green-100 leading-8">
              Practice daily for at least 15 minutes.
              The more you use Excel, the faster and more confident you'll become.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}