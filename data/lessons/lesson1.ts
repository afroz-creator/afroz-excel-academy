import type { Lesson } from "@/types/lesson";

export const lesson1: Lesson = {
  id: 1,

  title: "Introduction to Microsoft Excel",

  module: "Module 1 - Basics",

  duration: "12 Minutes",

  type: "Video",

  description:
    "In this lesson you will learn what Microsoft Excel is, why it is used, and where it is used in real life.",

  explanation: [
    "Microsoft Excel is a spreadsheet software developed by Microsoft.",
    "It helps you organize, calculate, analyze and visualize data.",
    "Excel is widely used in schools, offices, businesses and personal finance."
  ],

  tip:
    "Practice every example yourself instead of only reading. Practical learning helps you remember Excel much faster.",

  warning:
    "Do not type formulas without the '=' sign. Excel will treat them as normal text.",

  formula: {
    title: "SUM Function",
    code: "=SUM(A1:A10)",
    explanation:
      "This formula adds all values from cell A1 to A10."
  },

  practice: [
    "Open Microsoft Excel.",
    "Create a new workbook.",
    "Enter numbers from 1 to 10.",
    "Use the SUM formula.",
    "Save the workbook as Practice1.xlsx."
  ],

  image: {
    src: "/images/excel/excel-interface.png",
    alt: "Microsoft Excel Interface",
    caption: "Microsoft Excel Home Screen"
  },

  downloads: [
    {
      title: "Practice Workbook",
      fileName: "Practice1.xlsx",
      href: "/downloads/excel/Practice1.xlsx"
    },
    {
      title: "Lesson Notes",
      fileName: "Introduction.pdf",
      href: "/downloads/excel/Introduction.pdf"
    }
  ],

  quiz: {
    question: "Microsoft Excel is a ________ software.",
    options: [
      "Spreadsheet",
      "Video Editor",
      "Operating System",
      "Web Browser"
    ],
    correctAnswer: 0
  }
};