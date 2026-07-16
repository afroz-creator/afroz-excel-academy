interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

interface HistoryTimelineProps {
  items: HistoryItem[];
}

export default function HistoryTimeline({
  items,
}: HistoryTimelineProps) {
  return (
    <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-indigo-700">
        📜 Microsoft Excel Ka Itihas
      </h2>

      <div className="space-y-6">

        {items.map((item, index) => (

          <div
            key={index}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                {item.year}
              </div>

              {index !== items.length - 1 && (
                <div className="mt-2 h-full w-1 bg-indigo-300" />
              )}

            </div>

            <div className="flex-1 rounded-2xl bg-white p-5 shadow">

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}