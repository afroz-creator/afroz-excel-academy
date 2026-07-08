import LessonHero from "@/components/lesson/LessonHero";
import LessonContent from "@/components/lesson/LessonContent";
import LessonFeatures from "@/components/lesson/LessonFeatures";
import LessonPractice from "@/components/lesson/LessonPractice";
import LessonNavigation from "@/components/lesson/LessonNavigation";

import { tutorials } from "@/data/tutorials";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;

  const currentIndex = tutorials.findIndex(
    (tutorial) => tutorial.slug === slug
  );

  if (currentIndex === -1) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">Lesson Not Found</h1>
      </div>
    );
  }

  const lesson = tutorials[currentIndex];

  const previous =
    currentIndex > 0 ? tutorials[currentIndex - 1] : undefined;

  const next =
    currentIndex < tutorials.length - 1
      ? tutorials[currentIndex + 1]
      : undefined;

  return (
    <>
      <LessonHero
        title={lesson.title}
        level={lesson.level}
        duration={lesson.duration}
        module="Module 1"
      />

      <LessonContent />

      <LessonFeatures />

      <LessonPractice />

      <LessonNavigation
        previous={previous}
        next={next}
      />
    </>
  );
}