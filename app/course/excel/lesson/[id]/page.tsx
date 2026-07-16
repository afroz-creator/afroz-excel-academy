import { notFound } from "next/navigation";

import LessonHeader from "@/components/lesson/LessonHeader";
import LessonHero from "@/components/lesson/LessonHero";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import LessonPlayerContent from "@/components/lesson/player/LessonPlayerContent";
import LessonNavigation from "@/components/lesson/player/LessonNavigation";

import { allLessons } from "@/data/lessons/allLessons";
import { excelCourse } from "@/data/excelCourse";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonPage({
  params,
}: PageProps) {
  const { id } = await params;

  const lessonId = Number(id);

  // Sidebar lessons
  const courseLessons = excelCourse.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleTitle: module.title,
    }))
  );

  const currentIndex = courseLessons.findIndex(
    (lesson) => lesson.id === lessonId
  );

  if (currentIndex === -1) {
    notFound();
  }

  const currentLesson = courseLessons[currentIndex];

  const previousLesson =
    currentIndex > 0
      ? courseLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex < courseLessons.length - 1
      ? courseLessons[currentIndex + 1]
      : null;

  // Lesson Data
  const lesson = allLessons[lessonId] ?? allLessons[1];

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Top Header */}
      <LessonHeader
        title={currentLesson.title}
        progress={Math.round((lessonId / courseLessons.length) * 100)}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-4">

        {/* Sidebar */}
        <LessonSidebar />

        {/* Main */}
        <div className="space-y-8 lg:col-span-3">

          {/* Hero */}
          <LessonHero
            title={lesson.title}
            module={lesson.module}
            duration={lesson.duration}
            type={lesson.type}
            image={lesson.heroImage}
          />

          {/* Lesson Content */}
          <LessonPlayerContent
            lesson={lesson}
          />

          {/* Navigation */}
          <LessonNavigation
            previousLesson={previousLesson?.id}
            nextLesson={nextLesson?.id}
          />

        </div>

      </div>

    </div>
  );
}