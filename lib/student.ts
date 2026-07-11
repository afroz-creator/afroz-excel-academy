import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

export interface StudentProfile {
  uid: string;
  name: string;
  email: string;
  mobile: string;
  role: string;

  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  currentLesson: number;

  streak: number;
  certificates: number;

  isActive: boolean;

  createdAt: any;
  updatedAt: any;
  lastLogin: any;
}

/**
 * Get Student Profile
 */
export async function getStudentProfile(): Promise<StudentProfile | null> {
  const user = auth.currentUser;

  if (!user) return null;

  const docRef = doc(db, "students", user.uid);

  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as StudentProfile;
}

/**
 * Update Progress
 */
export async function updateStudentProgress(
  lessonsCompleted: number,
  progress: number
) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "students", user.uid), {
    lessonsCompleted,
    progress,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update Daily Streak
 */
export async function updateStudentStreak(streak: number) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "students", user.uid), {
    streak,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Unlock Certificate
 */
export async function unlockCertificate(count: number) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "students", user.uid), {
    certificates: count,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update Achievement Count
 */
export async function updateCertificates(certificates: number) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "students", user.uid), {
    certificates,
    updatedAt: serverTimestamp(),
  });
}