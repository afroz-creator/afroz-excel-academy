import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";

/**
 * Register User
 */
export async function registerUser(
  name: string,
  email: string,
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