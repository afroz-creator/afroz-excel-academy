import {
  doc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

/**
 * Get Student Progress
 */
export async function getStudentProgress(uid: string) {
  const ref = doc(db, "students", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}

/**
 * Mark Lesson Complete
 */
export async function markLessonComplete(
  uid: string,
  lessonId: number
) {
  const ref = doc(db, "students", uid);

  await updateDoc(ref, {
    lessonsCompleted: increment(1),
    currentLesson: lessonId + 1,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update Progress Percentage
 */
export async function updateProgress(
  uid: string,
  totalLessons: number
) {
  const ref = doc(db, "students", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return;

  const data = snapshot.data();

  const completed = data.lessonsCompleted ?? 0;

  const progress = Math.round(
    (completed / totalLessons) * 100
  );

  await updateDoc(ref, {
    progress,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Get Completed Lessons Count
 */
export async function getCompletedLessons(uid: string) {
  const ref = doc(db, "students", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return 0;
  }

  const data = snapshot.data();

  return data.lessonsCompleted ?? 0;
}