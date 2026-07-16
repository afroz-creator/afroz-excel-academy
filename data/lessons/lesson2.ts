import type { Lesson } from "@/types/lesson";

export const lesson2: Lesson = {
  id: 2,

  title: "Excel Interface",

  module: "Module 1 - Basics",

  duration: "15 Minutes",

  type: "Video",

  description:
    "Is lesson me aap Microsoft Excel Interface ke sabhi important parts ko detail me samjhenge.",

  // 🖼 Hero Banner
  heroImage: "/images/excel/lesson2/hero.png",

  // 🎯 Learning Objectives
  learningObjectives: [
    "Excel Interface ko pehchanna.",
    "Ribbon ka use samajhna.",
    "Formula Bar aur Name Box ka difference samajhna.",
    "Rows aur Columns ko identify karna.",
    "Worksheet me kaam karna."
  ],

  // 📖 Explanation
  explanation: [
    "Title Bar workbook ka naam dikhati hai.",
    "Quick Access Toolbar me Save, Undo aur Redo buttons hote hain.",
    "Ribbon me Home, Insert, Page Layout, Formulas jaise tabs hote hain.",
    "Formula Bar me formulas likhe aur edit kiye jaate hain.",
    "Rows numbers se aur Columns letters se identify hote hain.",
    "Worksheet wahi area hai jahan hum data enter karte hain."
  ],

  // 💡 Tip
  tip:
    "Ribbon ke har tab ko ek baar khol kar dekhiye. Isse Excel ko samajhna bahut aasaan ho jayega.",

  // 🌍 Did You Know
  didYouKnow:
    "Microsoft Excel me 400 se bhi zyada built-in functions available hote hain.",

  // ❌ Common Mistake
  commonMistake:
    "Bahut se beginners Formula Bar aur Name Box ko ek hi samajhte hain.",

  // ⚠ Warning
  warning:
    "Formula likhte waqt Formula Bar ka use karein aur hamesha '=' se shuru karein.",

  // ➕ Formula
  formula: {
    title: "Basic Formula",
    code: "=10+20",
    explanation:
      "Ye formula 10 aur 20 ko add karke 30 return karta hai."
  },

  // 💻 Practice
  practice: [
    "Excel Open kijiye.",
    "Title Bar identify kijiye.",
    "Ribbon ke sabhi Tabs dekhiye.",
    "Formula Bar par click kijiye.",
    "Cell A1 me apna naam likhiye."
  ],

  // 📚 Summary
  summary: [
    "Title Bar workbook ka naam dikhati hai.",
    "Ribbon me sabhi commands hoti hain.",
    "Formula Bar formulas ke liye hoti hai.",
    "Rows numbers se aur Columns letters se pehchane jaate hain.",
    "Worksheet me data enter kiya jata hai."
  ],

  // 📝 Assignment
  assignment: [
    "Excel Open kijiye.",
    "Ribbon ke sabhi Tabs ka naam notebook me likhiye.",
    "Worksheet me apna naam aur city enter kijiye."
  ],

  // 🖼 Lesson Image
  image: {
    src: "/images/excel/lesson2/excel-interface.png",
    alt: "Excel Interface",
    caption: "Microsoft Excel Interface"
  },

  // 📥 Downloads
  downloads: [
    {
      title: "Interface Notes",
      fileName: "ExcelInterface.pdf",
      href: "/downloads/excel/ExcelInterface.pdf"
    }
  ],

  // ❓ Quiz
  quiz: {
    question:
      "Excel me Home, Insert aur Formulas kis jagah hote hain?",
    options: [
      "Ribbon",
      "Status Bar",
      "Worksheet",
      "Name Box"
    ],
    correctAnswer: 0
  }
};