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