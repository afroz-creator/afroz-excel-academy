interface Props {
  params: {
    id: string;
  };
}

export default function LessonPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">
        Lesson {params.id}
      </h1>
    </div>
  );
}