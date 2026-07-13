import LessonHeader from "@/components/lesson/LessonHeader";
import LessonSidebar from "@/components/lesson/LessonSidebar";
import LessonPlayerContent from "@/components/lesson/player/LessonPlayerContent";
import LessonNavigation from "@/components/lesson/player/LessonNavigation";
interface Props {
  params: {
    id: string;
  };
}

export default function LessonPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-7xl p-6">

      {/* Header */}
      <LessonHeader
        title={`Lesson ${params.id}`}
        progress={35}
      />

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-4">

        {/* Sidebar */}
        <LessonSidebar />

        {/* Lesson Content */}
        <div className="space-y-6 lg:col-span-3">

          <LessonPlayerContent
            title="Basic Formula"
            description="In this lesson you will learn how to create basic Excel formulas, understand how Excel calculates values automatically, and use formulas to solve real-world problems. This lesson builds the foundation for all advanced Excel functions."
            duration="12 Minutes"
            type="Video"
            module="Module 1 - Basics"
          />

          <LessonNavigation
            previousLesson={2}
            nextLesson={4}
          />

        </div>

      </div>

    </div>
  );
}