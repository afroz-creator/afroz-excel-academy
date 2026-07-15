interface FormulaBoxProps {
  title: string;
  formula: string;
  explanation?: string;
}

export default function FormulaBox({
  title,
  formula,
  explanation,
}: FormulaBoxProps) {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-6">

      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">📊</span>

        <h3 className="text-xl font-bold text-green-700">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto rounded-xl bg-gray-900 p-5">
        <code className="font-mono text-lg text-green-400">
          {formula}
        </code>
      </div>

      {explanation && (
        <p className="mt-4 leading-8 text-gray-700">
          {explanation}
        </p>
      )}

    </div>
  );
}