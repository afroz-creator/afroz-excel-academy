import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getCountFromServer,
} from "firebase/firestore";

import { db } from "./firebase";

/* ===============================
   Dashboard Statistics
================================ */

export async function getDashboardStats() {
  const students = await getCountFromServer(
    collection(db, "students")
  );

  const courses = await getCountFromServer(
    collection(db, "courses")
  );

  const lessons = await getCountFromServer(
    collection(db, "lessons")
  );

  return {
    students: students.data().count,
    courses: courses.data().count,
    lessons: lessons.data().count,
  };
}

/* ===============================
   Students
================================ */

export async function getStudents() {
  const snapshot = await getDocs(
    collection(db, "students")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteStudent(id: string) {
  return await deleteDoc(
    doc(db, "students", id)
  );
}

export async function resetStudentProgress(id: string) {
  const ref = doc(db, "students", id);

  await updateDoc(ref, {
    progress: 0,
    lessonsCompleted: 0,
    currentLesson: 1,
    certificates: 0,
    streak: 0,
  });
}
/* ===============================
   Courses
================================ */

export async function getCourses() {
  const snapshot = await getDocs(
    collection(db, "courses")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addCourse(data: any) {
  return await addDoc(
    collection(db, "courses"),
    data
  );
}

export async function updateCourse(
  id: string,
  data: any
) {
  return await updateDoc(
    doc(db, "courses", id),
    data
  );
}

export async function deleteCourse(id: string) {
  return await deleteDoc(
    doc(db, "courses", id)
  );
}

/* ===============================
   Lessons
================================ */

export async function getLessons() {
  const snapshot = await getDocs(
    collection(db, "lessons")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addLesson(data: any) {
  return await addDoc(
    collection(db, "lessons"),
    data
  );
}

export async function updateLesson(
  id: string,
  data: any
) {
  return await updateDoc(
    doc(db, "lessons", id),
    data
  );
}

export async function deleteLesson(id: string) {
  return await deleteDoc(
    doc(db, "lessons", id)
  );
}