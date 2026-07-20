import ProtectedDownloadButton from "@/components/ui/ProtectedDownloadButton";
import { notFound } from "next/navigation";

import LessonHeader from "@/components/lesson/LessonHeader";
import LessonHero from "@/components/lesson/LessonHero";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import LessonPlayerContent from "@/components/lesson/player/LessonPlayerContent";
import LessonCourseNavigation from "@/components/lesson/player/LessonCourseNavigation";

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

  // Sidebar Lessons
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
    currentIndex > 0 ? courseLessons[currentIndex - 1] : null;

  const nextLesson =
    currentIndex < courseLessons.length - 1
      ? courseLessons[currentIndex + 1]
      : null;

  // Lesson Data
  const lesson = allLessons[lessonId] ?? allLessons[1];

  return (
    <div className="space-y-8">

      {/* Top Header */}
      <LessonHeader
        title={currentLesson.title}
        progress={Math.round((lessonId / courseLessons.length) * 100)}
      />

      <div className="grid gap-8 lg:grid-cols-4">

        {/* Sidebar */}
        <LessonSidebar />

        {/* Main Content */}
        <div className="space-y-8 lg:col-span-3">

          {/* Hero */}
          <LessonHero
            title={lesson.title}
            module={lesson.module}
            duration={lesson.duration}
            type={lesson.type}
            image={lesson.heroImage ?? "/images/excel/lesson1/hero.png"}
          />

          

          {/* Lesson Content */}
          <LessonPlayerContent lesson={lesson} />

          {/* Downloads */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-2xl font-bold text-green-700">
              📥 Lesson Downloads
            </h2>

            <div className="flex flex-wrap gap-4">

              <ProtectedDownloadButton
                file={`/downloads/lesson${lessonId}.pdf`}
                title="📄 Download PDF"
              />

              <ProtectedDownloadButton
                file={`/downloads/lesson${lessonId}.pptx`}
                title="📽 Download PPT"
              />

              <ProtectedDownloadButton
                file={`/downloads/lesson${lessonId}.xlsx`}
                title="📊 Practice File"
              />

            </div>

          </div>

          
          {/* Navigation */}
          <LessonCourseNavigation
            previousLesson={previousLesson?.id}
            nextLesson={nextLesson?.id}
          />
        </div>

      </div>

    </div>
  );
}