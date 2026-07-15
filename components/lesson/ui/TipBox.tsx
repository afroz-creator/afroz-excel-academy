interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({
  children,
}: TipBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-blue-500 bg-blue-50 p-6">

      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl">💡</span>

        <h3 className="text-xl font-bold text-blue-700">
          Pro Tip
        </h3>
      </div>

      <div className="text-gray-700 leading-8">
        {children}
      </div>

    </div>
  );
}