interface HistoryBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function HistoryBox({
  title,
  children,
}: HistoryBoxProps) {
  return (
    <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm">

      <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-indigo-700">
        📜 {title}
      </h2>

      <div className="space-y-4 leading-8 text-gray-700">
        {children}
      </div>

    </div>
  );
}