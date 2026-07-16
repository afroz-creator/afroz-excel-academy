export interface Formula {
  title: string;
  code: string;
  explanation: string;
}

export interface DownloadFile {
  title: string;
  fileName: string;
  href: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  // Basic Information
  id: number;

  title: string;

  module: string;

  duration: string;

  type: "Video" | "PDF" | "Quiz";

  description: string;

  // 🖼️ Hero Banner Image
  heroImage: string;

  // 🎯 Learning Objectives
  learningObjectives: string[];

  // 📖 Main Lesson Content
  explanation: string[];

  // 💡 Pro Tip
  tip: string;

  // 🌍 Did You Know
  didYouKnow: string;

  // ❌ Common Mistake
  commonMistake: string;

  // ⚠️ Warning
  warning: string;

  // ➕ Formula
  formula: Formula;

  // 💻 Practice
  practice: string[];

  // 📚 Lesson Summary
  summary: string[];

  // 📝 Assignment
  assignment: string[];

  // 🖼️ Lesson Content Image
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