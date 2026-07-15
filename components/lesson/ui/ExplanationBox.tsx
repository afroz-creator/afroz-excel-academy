interface ExplanationBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function ExplanationBox({
  title,
  children,
}: ExplanationBoxProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-gray-800">
        {title}
      </h2>

      <div className="space-y-5 text-lg leading-8 text-gray-700">
        {children}
      </div>

    </section>
  );
}