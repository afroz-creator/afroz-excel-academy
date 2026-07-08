import Image from "next/image";

export default function LessonImage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="text-center mb-8">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Visual Learning
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Microsoft Excel Interface
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Get familiar with the Excel workspace before you start working.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src="/images/lessons/excel-interface.png"
            alt="Microsoft Excel Interface"
            width={1200}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <div className="rounded-xl bg-green-50 p-4 text-center">
            <h3 className="font-bold text-green-700">Ribbon</h3>
            <p className="text-sm text-gray-600 mt-2">
              Access all Excel tools and commands.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-4 text-center">
            <h3 className="font-bold text-blue-700">Formula Bar</h3>
            <p className="text-sm text-gray-600 mt-2">
              View and edit formulas easily.
            </p>
          </div>

          <div className="rounded-xl bg-yellow-50 p-4 text-center">
            <h3 className="font-bold text-yellow-700">Rows & Columns</h3>
            <p className="text-sm text-gray-600 mt-2">
              Organize information in cells.
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-4 text-center">
            <h3 className="font-bold text-purple-700">Worksheet</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your main working area in Excel.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}