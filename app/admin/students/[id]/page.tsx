import StudentProfile from "@/components/admin/StudentProfile";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function StudentDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <StudentProfile
      studentId={id}
    />
  );
}