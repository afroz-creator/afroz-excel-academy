interface Shortcut {
  key: string;
  action: string;
}

interface ShortcutTableProps {
  shortcuts: Shortcut[];
}

export default function ShortcutTable({
  shortcuts,
}: ShortcutTableProps) {
  return (
    <div className="rounded-3xl border border-purple-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-purple-700">
        Important Excel Shortcut Keys
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse overflow-hidden rounded-2xl">

          <thead>

            <tr className="bg-purple-600 text-white">

              <th className="border px-5 py-4 text-left">
                Shortcut
              </th>

              <th className="border px-5 py-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {shortcuts.map((item, index) => (

              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-white hover:bg-purple-50"
              >

                <td className="border px-5 py-4 font-bold text-purple-700">
                  {item.key}
                </td>

                <td className="border px-5 py-4">
                  {item.action}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}