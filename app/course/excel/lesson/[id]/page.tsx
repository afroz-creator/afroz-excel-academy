import LessonHeader from "@/components/lesson/LessonHeader";

interface Props {
  params: {
    id: string;
  };
}

export default function LessonPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <LessonHeader
        title={`Lesson ${params.id}`}
        progress={35}
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          Sidebar Coming Soon
        </div>

        <div className="lg:col-span-3 rounded-2xl border bg-white p-6 shadow-sm">
          Content Coming Soon
        </div>
      </div>
    </div>
  );
}