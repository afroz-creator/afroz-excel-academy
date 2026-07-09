"use client";

import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";
import LessonProgress from "./LessonProgress";
import ContinueLearning from "./ContinueLearning";

import {
  isLessonCompleted,
  saveCompletedLesson,
  getCompletedLessons,
} from "@/lib/progress";

interface LessonProgressSectionProps {
  currentSlug: string;
  totalLessons: number;
  nextLesson?: {
    title: string;
    slug: string;
  };
}

export default function LessonProgressSection({
  currentSlug,
  totalLessons,
  nextLesson,
}: LessonProgressSectionProps) {
  const [completed, setCompleted] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCompleted(isLessonCompleted(currentSlug));
    setCompletedCount(getCompletedLessons().length);
  }, [currentSlug]);

  function handleComplete() {
    saveCompletedLesson(currentSlug);

    setCompleted(true);
    setCompletedCount(getCompletedLessons().length);
  }

  return (
    <>
      <ProgressBar
        completed={completedCount}
        total={totalLessons}
      />

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