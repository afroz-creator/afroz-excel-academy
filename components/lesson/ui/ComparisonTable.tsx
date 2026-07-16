interface ComparisonRow {
  workbook: string;
  worksheet: string;
}

interface ComparisonTableProps {
  title: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  title,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-blue-700">
        {title}
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse overflow-hidden rounded-2xl">

          <thead>

            <tr className="bg-blue-600 text-white">

              <th className="border border-blue-300 px-6 py-4 text-left">
                📘 Workbook
              </th>

              <th className="border border-blue-300 px-6 py-4 text-left">
                📄 Worksheet
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row, index) => (

              <tr
                key={index}
                className="hover:bg-blue-50"
              >

                <td className="border px-6 py-4">
                  {row.workbook}
                </td>

                <td className="border px-6 py-4">
                  {row.worksheet}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}