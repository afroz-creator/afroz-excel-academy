import EditCourseForm from "@/components/admin/EditCourseForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCoursePage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            ✏ Edit Course
          </h1>

          <p className="mt-2 text-gray-500">
            Update course information.
          </p>
        </div>

        <EditCourseForm courseId={id} />

      </div>
    </main>
  );
}