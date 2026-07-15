interface WarningBoxProps {
  children: React.ReactNode;
}

export default function WarningBox({
  children,
}: WarningBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-red-500 bg-red-50 p-6">

      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl">⚠️</span>

        <h3 className="text-xl font-bold text-red-700">
          Common Mistake
        </h3>
      </div>

      <div className="leading-8 text-gray-700">
        {children}
      </div>

    </div>
  );
}