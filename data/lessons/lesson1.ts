import type { Lesson } from "@/types/lesson";

export const lesson1: Lesson = {
  id: 1,

  title: "Introduction to Microsoft Excel",

  module: "Module 1 - Basics",

  duration: "12 Minutes",

  type: "Video",

  description:
    "Is lesson me aap Microsoft Excel kya hai, iska use kahan hota hai aur Excel ki basic jankari seekhenge.",

  // 🖼 Hero Banner Image
  heroImage: "/images/excel/lesson1/hero.png",

  // 🎯 Learning Objectives
  learningObjectives: [
    "Microsoft Excel kya hai samajhna.",
    "Spreadsheet ka matlab samajhna.",
    "Excel ka use kahan hota hai ye jaanana.",
    "Workbook aur Worksheet ka basic concept samajhna.",
    "Apni pehli Excel Workbook banana.",
  ],

  // 📖 Lesson Explanation
  explanation: [
    "Microsoft Excel ek Spreadsheet Software hai jo Microsoft ne develop kiya hai.",
    "Excel ka use data ko Store, Organize, Calculate aur Analyze karne ke liye kiya jata hai.",
    "Excel me data Rows aur Columns me likha jata hai.",
    "Har chhota box Cell kehlata hai jisme hum data enter karte hain.",
    "Excel ka istemal School, Office, Shop, Bank aur Business me bahut zyada hota hai.",
    "Excel ki madad se hum seconds me Total, Average aur Reports bana sakte hain.",
  ],

  // 💡 Tip
  tip:
    "Sirf padhne se Excel nahi aayega. Har example ko khud computer par practice kijiye.",

  // 🌍 Did You Know
  didYouKnow:
    "Microsoft Excel duniya ke sabse popular Spreadsheet Software me se ek hai aur lakhon companies roz iska use karti hain.",

  // ❌ Common Mistake
  commonMistake:
    "Bahut se students Workbook aur Worksheet ko ek hi cheez samajhte hain. Dono alag hote hain.",

  // ⚠ Warning
  warning:
    "Formula likhte waqt hamesha '=' (Equal) sign se shuru karein, warna Excel usse normal text samjhega.",

  // ➕ Formula
  formula: {
    title: "SUM Function",
    code: "=SUM(A1:A10)",
    explanation:
      "Ye Formula A1 se A10 tak ke sabhi numbers ka Total nikalta hai.",
  },

  // 💻 Practice
  practice: [
    "Microsoft Excel Open kijiye.",
    "Blank Workbook select kijiye.",
    "Cell A1 me apna Naam likhiye.",
    "Cell B1 me apni City likhiye.",
    "Cell A2 se A11 tak 1 se 10 tak numbers likhiye.",
    "SUM Formula ka use karke Total nikaliye.",
    "File ko Practice1.xlsx naam se Save kijiye.",
  ],

  // 📚 Summary
  summary: [
    "Microsoft Excel ek Spreadsheet Software hai.",
    "Excel me data Rows aur Columns me hota hai.",
    "Har box ko Cell kehte hain.",
    "Excel School, Office aur Business me use hota hai.",
    "Formulas calculations ko bahut aasan bana dete hain.",
  ],

  // 📝 Assignment
  assignment: [
    "Ek nayi Workbook banaiye.",
    "Name, Age aur City enter kijiye.",
    "File ko Student_Profile.xlsx naam se Save kijiye.",
  ],

  // 🖼 Lesson Content Image
  image: {
    src: "/images/excel/lesson1/excel-interface.png",
    alt: "Microsoft Excel Interface",
    caption: "Microsoft Excel Home Screen",
  },

  // 📥 Downloads
  downloads: [
    {
      title: "Practice Workbook",
      fileName: "Practice1.xlsx",
      href: "/downloads/excel/Practice1.xlsx",
    },
    {
      title: "Lesson Notes",
      fileName: "Introduction.pdf",
      href: "/downloads/excel/Introduction.pdf",
    },
  ],

  // ❓ Quiz
  quiz: {
    question: "Microsoft Excel kis type ka Software hai?",
    options: [
      "Spreadsheet Software",
      "Video Editing Software",
      "Web Browser",
      "Operating System",
    ],
    correctAnswer: 0,
  },
};