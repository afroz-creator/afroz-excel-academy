import { lesson1 } from "./lesson1";
import { lesson2 } from "./lesson2";

import type { Lesson } from "@/types/lesson";

export const allLessons: Record<number, Lesson> = {
  1: lesson1,
  2: lesson2,
};