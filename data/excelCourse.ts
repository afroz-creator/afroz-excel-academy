export type LessonType = "Video" | "PDF" | "Quiz";

export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: LessonType;
  completed: boolean;
  locked: boolean;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface ExcelCourse {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  modules: Module[];
}

export const excelCourse: ExcelCourse = {
  id: "excel-masterclass",
  title: "Advanced Excel Masterclass",
  instructor: "Afroz IT Solution",
  progress: 35,

  modules: [
    {
      id: 1,
      title: "Module 1 - Basics",

      lessons: [
        {
          id: 1,
          title: "Introduction",
          description:
            "Welcome to the Advanced Excel Masterclass. In this lesson you will understand what Excel is and where it is used in real life.",
          duration: "5 min",
          type: "Video",
          completed: true,
          locked: false,
        },

        {
          id: 2,
          title: "Excel Interface",
          description:
            "Learn about the Ribbon, Quick Access Toolbar, Formula Bar, Name Box, Status Bar and Worksheet area.",
          duration: "8 min",
          type: "Video",
          completed: true,
          locked: false,
        },

        {
          id: 3,
          title: "Basic Formula",
          description:
            "Learn how to create basic Excel formulas, understand automatic calculations, and solve real-world problems using formulas.",
          duration: "12 min",
          type: "Video",
          completed: false,
          locked: false,
        },

        {
          id: 4,
          title: "SUM Function",
          description:
            "Master the SUM function to quickly add numbers across rows, columns, and multiple ranges.",
          duration: "15 min",
          type: "Video",
          completed: false,
          locked: true,
        },

        {
          id: 5,
          title: "AVERAGE Function",
          description:
            "Learn how to calculate averages efficiently using the AVERAGE function.",
          duration: "10 min",
          type: "Video",
          completed: false,
          locked: true,
        },
      ],
    },

    {
      id: 2,
      title: "Module 2 - Advanced",

      lessons: [
        {
          id: 6,
          title: "Charts",
          description:
            "Learn to create professional Excel charts and visualize your data.",
          duration: "20 min",
          type: "Video",
          completed: false,
          locked: true,
        },

        {
          id: 7,
          title: "Pivot Table",
          description:
            "Understand Pivot Tables and analyze large datasets easily.",
          duration: "25 min",
          type: "Video",
          completed: false,
          locked: true,
        },

        {
          id: 8,
          title: "Dashboard",
          description:
            "Build an interactive Excel dashboard using charts, slicers, and KPIs.",
          duration: "30 min",
          type: "Video",
          completed: false,
          locked: true,
        },
      ],
    },
  ],
};