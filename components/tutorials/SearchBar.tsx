interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto mb-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tutorials..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 pl-12 text-lg focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
        />

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>
      </div>
    </div>
  );
}