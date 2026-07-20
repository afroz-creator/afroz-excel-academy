"use client";

import { useEffect, useState } from "react";

import {
  Users,
  BookOpen,
  PlayCircle,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { getDashboardStats } from "@/lib/admin";

export default function DashboardCards() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    lessons: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const data = await getDashboardStats();
      setStats(data);
    }

    loadStats();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-3">

      <StatsCard
        title="Total Students"
        value={String(stats.students)}
        icon={<Users className="h-8 w-8 text-white" />}
        color="bg-blue-600"
      />

      <StatsCard
        title="Total Courses"
        value={String(stats.courses)}
        icon={<BookOpen className="h-8 w-8 text-white" />}
        color="bg-green-600"
      />

      <StatsCard
        title="Total Lessons"
        value={String(stats.lessons)}
        icon={<PlayCircle className="h-8 w-8 text-white" />}
        color="bg-purple-600"
      />

    </div>
  );
}