interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function CategoryFilter({
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            value === category
              ? "bg-green-700 text-white"
              : "bg-white border border-gray-300 hover:border-green-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}