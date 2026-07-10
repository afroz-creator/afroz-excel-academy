export interface StudentProgress {
  lessonsCompleted: number;
  totalLessons: number;
  streak: number;
  certificates: number;
  xp: number;
}

const STORAGE_KEY = "afroz_excel_progress";

export const defaultProgress: StudentProgress = {
  lessonsCompleted: 12,
  totalLessons: 52,
  streak: 14,
  certificates: 1,
  xp: 1280,
};

export function getProgress(): StudentProgress {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return defaultProgress;
  }

  try {
    return JSON.parse(data);
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: StudentProgress) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

export function resetProgress() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}