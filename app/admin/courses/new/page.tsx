import AddCourseForm from "@/components/admin/AddCourseForm";

export default function NewCoursePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            ➕ Add New Course
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new course for your students.
          </p>
        </div>

        <AddCourseForm />

      </div>
    </main>
  );
}