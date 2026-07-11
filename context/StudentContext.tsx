"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  StudentProfile,
  listenStudentProfile,
} from "@/lib/student";

interface StudentContextType {
  student: StudentProfile | null;
  loading: boolean;
}

const StudentContext = createContext<StudentContextType>({
  student: null,
  loading: true,
});

export function StudentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [student, setStudent] =
    useState<StudentProfile | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenStudentProfile((data) => {
      setStudent(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        student,
        loading,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}