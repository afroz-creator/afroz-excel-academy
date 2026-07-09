interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border">
      <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}