import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

import {
  onAuthStateChanged,
} from "firebase/auth";

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
 * Get Student Profile (One Time)
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
 * Listen Student Profile (Realtime)
 */
export function listenStudentProfile(
  callback: (student: StudentProfile | null) => void
) {
  let unsubscribeSnapshot: (() => void) | null = null;

  const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    if (!user) {
      callback(null);

      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }

      return;
    }

    unsubscribeSnapshot = onSnapshot(
      doc(db, "students", user.uid),
      (docSnap) => {
        if (docSnap.exists()) {
          callback(docSnap.data() as StudentProfile);
        } else {
          callback(null);
        }
      },
      (error) => {
        console.error("Firestore Error:", error);
        callback(null);
      }
    );
  });

  return () => {
    unsubscribeAuth();

    if (unsubscribeSnapshot) {
      unsubscribeSnapshot();
    }
  };
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
 * Update Certificates
 */
export async function updateCertificates(certificates: number) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "students", user.uid), {
    certificates,
    updatedAt: serverTimestamp(),
  });
}