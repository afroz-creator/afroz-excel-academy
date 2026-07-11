import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

/**
 * Register User
 */
export async function registerUser(
  name: string,
  email: string,
  mobile: string,
  password: string
) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
  }

  await setDoc(doc(db, "students", userCredential.user.uid), {
    uid: userCredential.user.uid,
    name,
    email,
    mobile,
    role: "student",
    progress: 0,
    certificates: 0,
    streak: 0,
    createdAt: serverTimestamp(),
  });

  return userCredential.user;
}

/**
 * Login User
 */
export async function loginUser(
  email: string,
  password: string
) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

/**
 * Logout User
 */
export async function logoutUser() {
  await signOut(auth);
}