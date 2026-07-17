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

  // 📜 History Timeline
  history: [
    {
      year: "1985",
      title: "Excel Ka Janm",
      description:
        "Microsoft ne sabse pehla Excel Version Apple Macintosh ke liye launch kiya.",
    },
    {
      year: "1987",
      title: "Windows Version",
      description:
        "Microsoft Excel pehli baar Windows Operating System ke liye release hua.",
    },
    {
      year: "1993",
      title: "Excel 5.0",
      description:
        "Is version me Workbook support aur bahut saare naye features add kiye gaye.",
    },
    {
      year: "2007",
      title: "Ribbon Interface",
      description:
        "Microsoft ne Ribbon Interface introduce kiya jisse Excel use karna aur bhi aasaan ho gaya.",
    },
    {
      year: "2019 - Present",
      title: "Modern Excel",
      description:
        "Aaj Excel me Charts, Pivot Table, Power Query, AI Features aur bahut advanced tools available hain.",
    },
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

  // 📊 Workbook vs Worksheet Comparison
  comparison: [
    {
      workbook: "Workbook ek poori Excel File hoti hai.",
      worksheet: "Worksheet Workbook ke andar ek Sheet hoti hai.",
    },
    {
      workbook: "Ek Workbook me bahut saari Worksheets ho sakti hain.",
      worksheet: "Worksheet sirf ek single sheet hoti hai.",
    },
    {
      workbook: "Workbook ka Extension .xlsx hota hai.",
      worksheet: "Worksheet ka koi alag file extension nahi hota.",
    },
    {
      workbook: "Workbook ko Save aur Open kiya ja sakta hai.",
      worksheet: "Worksheet ko Workbook ke andar hi use kiya jata hai.",
    },
    {
      workbook: "Example: StudentData.xlsx",
      worksheet: "Example: Sheet1, Sheet2, Sheet3",
    },
  ],

  // 🖼 Workbook vs Worksheet Image
  comparisonImage: {
    src: "/images/excel/lesson1/workbook-vs-worksheet.png",
    alt: "Workbook vs Worksheet",
    caption: "Workbook aur Worksheet ka Difference",
  },

  // interface
  excelInterface: [
  {
    name: "Title Bar",
    description:
      "Yahan Workbook ka naam aur Microsoft Excel ka naam dikhai deta hai."
  },
  {
    name: "Quick Access Toolbar",
    description:
      "Yahan Save, Undo aur Redo jaise important buttons hote hain."
  },
  {
    name: "Ribbon",
    description:
      "Ribbon me Excel ke saare tools aur commands hote hain."
  },
  {
    name: "Name Box",
    description:
      "Ye currently selected Cell ka address batata hai."
  },
  {
    name: "Formula Bar",
    description:
      "Formula likhne aur edit karne ke liye use hota hai."
  },
  {
    name: "Worksheet Area",
    description:
      "Yahi main area hai jahan data enter kiya jata hai."
  },
  {
    name: "Sheet Tabs",
    description:
      "Ek Workbook ke andar alag-alag Worksheets yahan hoti hain."
  },
  {
    name: "Status Bar",
    description:
      "Neeche Status Bar me Zoom aur calculation information hoti hai."
  }
  ],

  // Shortcuts
  // ⌨ Excel Shortcut Keys
shortcuts: [
  {
    key: "Ctrl + N",
    action: "Nayi Workbook Banana",
  },
  {
    key: "Ctrl + O",
    action: "Existing Workbook Open Karna",
  },
  {
    key: "Ctrl + S",
    action: "Workbook Save Karna",
  },
  {
    key: "Ctrl + C",
    action: "Selected Data Copy Karna",
  },
  {
    key: "Ctrl + V",
    action: "Copied Data Paste Karna",
  },
  {
    key: "Ctrl + X",
    action: "Selected Data Cut Karna",
  },
  {
    key: "Ctrl + Z",
    action: "Last Action Undo Karna",
  },
  {
    key: "Ctrl + Y",
    action: "Undo Ko Redo Karna",
  },
  {
    key: "Ctrl + B",
    action: "Text Bold Karna",
  },
  {
    key: "Ctrl + P",
    action: "Print Window Open Karna",
  },
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
    title: "Lesson Notes",
    fileName: "lesson-notes.pdf",
    href: "/downloads/excel/lesson1/lesson-notes.pdf",
    type: "PDF",
    size: "2.3 MB",
    description: "Complete lesson notes with explanations.",
  },
  {
    title: "Practice Workbook",
    fileName: "practice.xlsx",
    href: "/downloads/excel/lesson1/practice.xlsx",
    type: "Excel",
    size: "180 KB",
    description: "Practice file for this lesson.",
  },
  {
    title: "Assignment",
    fileName: "assignment.pdf",
    href: "/downloads/excel/lesson1/assignment.pdf",
    type: "PDF",
    size: "450 KB",
    description: "Homework assignment for students.",
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