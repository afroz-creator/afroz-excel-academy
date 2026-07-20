import StudentTable from "@/components/admin/StudentTable";

export default function StudentsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Students
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all registered students.
        </p>

      </div>

      <StudentTable />

    </div>
  );
}