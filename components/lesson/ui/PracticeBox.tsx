interface PracticeBoxProps {
  title?: string;
  tasks: string[];
}

export default function PracticeBox({
  title = "Practice Exercise",
  tasks,
}: PracticeBoxProps) {
  return (
    <div className="rounded-3xl border border-purple-200 bg-purple-50 p-6">

      <div className="mb-5 flex items-center gap-2">
        <span className="text-2xl">💻</span>

        <h3 className="text-2xl font-bold text-purple-700">
          {title}
        </h3>
      </div>

      <ol className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="rounded-xl bg-white p-4 shadow-sm"
          >
            <span className="font-semibold">
              Task {index + 1}:
            </span>{" "}
            {task}
          </li>
        ))}
      </ol>

    </div>
  );
}