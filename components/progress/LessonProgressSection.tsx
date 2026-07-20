"use client";

import { useState } from "react";

import LessonProgress from "./LessonProgress";
import ContinueLearning from "./ContinueLearning";

interface LessonProgressSectionProps {
  currentSlug: string;
  totalLessons: number;
  nextLesson?: {
    title: string;
    slug: string;
  };
}

export default function LessonProgressSection({
  nextLesson,
}: LessonProgressSectionProps) {

  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(true);
  }

  return (
    <>
      <LessonProgress
        completed={completed}
        onComplete={handleComplete}
      />

      {nextLesson && (
        <ContinueLearning
          nextLesson={nextLesson}
        />
      )}
    </>
  );
}