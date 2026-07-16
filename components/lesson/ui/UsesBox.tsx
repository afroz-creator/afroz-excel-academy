interface FeatureBoxProps {
  features: string[];
}

export default function FeatureBox({
  features,
}: FeatureBoxProps) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-blue-700">
        ⭐ Excel Features
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {features.map((feature, index) => (

          <div
            key={index}
            className="rounded-xl bg-white p-4 shadow"
          >
            {feature}
          </div>

        ))}

      </div>

    </div>
  );
}