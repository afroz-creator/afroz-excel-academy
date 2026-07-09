export function getCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("completedLessons");

  return data ? JSON.parse(data) : [];
}

export function saveCompletedLesson(slug: string) {
  const lessons = getCompletedLessons();

  if (!lessons.includes(slug)) {
    lessons.push(slug);

    localStorage.setItem(
      "completedLessons",
      JSON.stringify(lessons)
    );
  }
}

export function isLessonCompleted(slug: string) {
  return getCompletedLessons().includes(slug);
}