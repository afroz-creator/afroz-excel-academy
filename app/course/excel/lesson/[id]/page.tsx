import { notFound } from "next/navigation";

import LessonHeader from "@/components/lesson/LessonHeader";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import LessonPlayerContent from "@/components/lesson/player/LessonPlayerContent";
import LessonNavigation from "@/components/lesson/player/LessonNavigation";

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

  const allLessons = excelCourse.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleTitle: module.title,
    }))
  );

  const currentIndex = allLessons.findIndex(
    (lesson) => lesson.id === lessonId
  );

  if (currentIndex === -1) {
    notFound();
  }

  const currentLesson = allLessons[currentIndex];

  const previousLesson =
    currentIndex > 0
      ? allLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">

      <LessonHeader
        title={currentLesson.title}
        progress={excelCourse.progress}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-4">

        {/* Sidebar */}
        <LessonSidebar />

        {/* Main Content */}
        <div className="space-y-6 lg:col-span-3">

          <LessonPlayerContent
            title={currentLesson.title}
            description={currentLesson.description}
            duration={currentLesson.duration}
            type={currentLesson.type}
            module={currentLesson.moduleTitle}
          />

          <LessonNavigation
            previousLesson={previousLesson?.id}
            nextLesson={nextLesson?.id}
          />

        </div>

      </div>

    </div>
  );
}