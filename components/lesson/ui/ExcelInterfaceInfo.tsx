interface ExcelInterfaceInfoProps {
  items: {
    name: string;
    description: string;
  }[];
}

export default function ExcelInterfaceInfo({
  items,
}: ExcelInterfaceInfoProps) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold text-blue-700">
        Excel Interface Parts
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:bg-blue-50"
          >
            <h3 className="text-xl font-bold text-gray-900">
              {index + 1}. {item.name}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}