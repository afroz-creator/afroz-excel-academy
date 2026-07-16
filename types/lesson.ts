export interface Formula {
  title: string;
  code: string;
  explanation: string;
}

export interface DownloadFile {
  title: string;
  fileName: string;
  href: string;

  type: string;

  size: string;

  description: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  workbook: string;
  worksheet: string;
}

export interface ExcelInterfaceItem {
  name: string;
  description: string;
}

export interface ShortcutItem {
  key: string;
  action: string;
}

export interface Lesson {
  id: number;

  title: string;

  module: string;

  duration: string;

  type: "Video" | "PDF" | "Quiz";

  description: string;

  // 🖼 Hero Banner
  heroImage?: string;

  // 🎯 Learning Objectives
  learningObjectives: string[];

  // 📜 History Timeline
  history: HistoryItem[];

  // 📖 Lesson Explanation
  explanation: string[];

  // 📊 Workbook vs Worksheet
  comparison: ComparisonRow[];

  // 🖼 Comparison Image
  comparisonImage?: {
    src: string;
    alt: string;
    caption?: string;
  };

  // 🖥 Excel Interface Parts
  excelInterface: ExcelInterfaceItem[];

  // ⌨ Shortcut Keys
  shortcuts: ShortcutItem[];

  // 💡 Tip
  tip: string;

  // 🌍 Did You Know
  didYouKnow: string;

  // ❌ Common Mistake
  commonMistake: string;

  // ⚠ Warning
  warning: string;

  // ➕ Formula
  formula: Formula;

  // 💻 Practice
  practice: string[];

  // 📚 Summary
  summary: string[];

  // 📝 Assignment
  assignment: string[];

  // 🖼 Lesson Image
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };

  // 📥 Downloads
  downloads: DownloadFile[];

  // ❓ Quiz
  quiz: Quiz;
}