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
  id: number;

  title: string;

  module: string;

  duration: string;

  type: "Video" | "PDF" | "Quiz";

  description: string;

  explanation: string[];

  tip: string;

  warning: string;

  formula: Formula;

  practice: string[];

  image?: {
    src: string;
    alt: string;
    caption?: string;
  };

  downloads: DownloadFile[];

  quiz: Quiz;
}