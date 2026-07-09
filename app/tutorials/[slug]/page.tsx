import LessonHero from "@/components/lesson/LessonHero";
import LessonContent from "@/components/lesson/LessonContent";
import LessonImage from "@/components/lesson/LessonImage";
import LessonFeatures from "@/components/lesson/LessonFeatures";
import LessonPractice from "@/components/lesson/LessonPractice";
import LessonQuiz from "@/components/lesson/LessonQuiz";
import LessonNavigation from "@/components/lesson/LessonNavigation";

import LessonProgressSection from "@/components/progress/LessonProgressSection";

import { tutorials } from "@/data/tutorials";
import { lessons } from "@/data/lessons";

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

  const tutorial = tutorials[currentIndex];

  const lessonData = lessons.find(
    (lesson) => lesson.slug === slug
  );

  const previous =
    currentIndex > 0 ? tutorials[currentIndex - 1] : undefined;

  const next =
    currentIndex < tutorials.length - 1
      ? tutorials[currentIndex + 1]
      : undefined;

  return (
    <>
      <LessonHero
        title={tutorial.title}
        level={tutorial.level}
        duration={tutorial.duration}
        module={lessonData?.hero.module ?? "Module 1"}
      />

      <LessonContent
        title={lessonData?.content.title ?? ""}
        description={lessonData?.content.description ?? ""}
        realLifeUses={lessonData?.realLifeUses ?? []}
      />

      <LessonImage />

      <LessonFeatures />

      <LessonPractice />

      <LessonQuiz />

      <LessonProgressSection
        currentSlug={tutorial.slug}
        totalLessons={tutorials.length}
        nextLesson={
          next
          ? {
              title: next.title,
              slug: next.slug,
            }
          : undefined
        }
      />

      <LessonNavigation
        previous={previous}
        next={next}
      />
    </>
  );
}