import LessonHero from "@/components/lesson/LessonHero";
import LessonContent from "@/components/lesson/LessonContent";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <LessonHero
        title={title}
        level="Beginner"
        duration="10 Minutes"
        module="Module 1"
      />

      <LessonContent />
    </>
  );
}