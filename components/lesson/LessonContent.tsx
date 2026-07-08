export default function LessonContent() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* What is Excel */}

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          📖 What is Microsoft Excel?
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          Microsoft Excel is one of the world's most popular spreadsheet
          software developed by Microsoft.

          It helps you organize data, perform calculations,
          create charts, analyze information, and prepare professional reports.

          Excel is widely used in offices, schools, banks,
          hospitals, businesses, and industries.
        </p>

      </div>

      {/* Key Features */}

      <div className="mt-12 bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          ⭐ Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              📊 Spreadsheet
            </h3>

            <p className="mt-3 text-gray-600">
              Organize data in rows and columns.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              🧮 Formulas
            </h3>

            <p className="mt-3 text-gray-600">
              Perform automatic calculations.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              📈 Charts
            </h3>

            <p className="mt-3 text-gray-600">
              Create beautiful charts and graphs.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              ⚙ Functions
            </h3>

            <p className="mt-3 text-gray-600">
              Use SUM, IF, COUNTIF and many more.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              📋 Pivot Tables
            </h3>

            <p className="mt-3 text-gray-600">
              Analyze large amounts of data easily.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              📉 Dashboards
            </h3>

            <p className="mt-3 text-gray-600">
              Build professional reports.
            </p>
          </div>

        </div>

      </div>

      {/* Real Life Uses */}

      <div className="mt-12 bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          🌍 Real Life Uses
        </h2>

        <ul className="mt-8 space-y-4 text-lg text-gray-600">
          <li>🏢 Office Management</li>
          <li>🏫 Student Result</li>
          <li>🏦 Banking Reports</li>
          <li>🏥 Hospital Records</li>
          <li>🏪 Shop Billing</li>
          <li>🏭 Business Reports</li>
        </ul>

      </div>

    </section>
  );
}