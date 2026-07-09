import DashboardHero from "@/components/dashboard/DashboardHero";
import ProgressSummary from "@/components/dashboard/ProgressSummary";
import ContinueCard from "@/components/dashboard/ContinueCard";
import AchievementCard from "@/components/dashboard/AchievementCard";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <DashboardHero />

      <ProgressSummary />

      <ContinueCard />

      <AchievementCard />

    </main>
  );
}