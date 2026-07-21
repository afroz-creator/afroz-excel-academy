import CourseTable from "@/components/admin/CourseTable";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            📚 Course Management
          </h1>

          <p className="mt-2 text-gray-500">
            Create, edit and manage all courses.
          </p>
        </div>

        <CourseTable />

      </div>
    </main>
  );
}