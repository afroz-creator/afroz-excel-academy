export const excelCourse = {
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
          duration: "5 min",
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Excel Interface",
          duration: "8 min",
          completed: true,
          locked: false,
        },
        {
          id: 3,
          title: "Basic Formula",
          duration: "12 min",
          completed: false,
          locked: false,
        },
        {
          id: 4,
          title: "SUM Function",
          duration: "15 min",
          completed: false,
          locked: true,
        },
        {
          id: 5,
          title: "AVERAGE Function",
          duration: "10 min",
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
          duration: "20 min",
          completed: false,
          locked: true,
        },
        {
          id: 7,
          title: "Pivot Table",
          duration: "25 min",
          completed: false,
          locked: true,
        },
        {
          id: 8,
          title: "Dashboard",
          duration: "30 min",
          completed: false,
          locked: true,
        },
      ],
    },
  ],
};