import AuthGuard from "@/components/auth/AuthGuard";

import UserWelcome from "@/components/dashboard/UserWelcome";

import DashboardHero from "@/components/dashboard/DashboardHero";
import StatisticsCards from "@/components/dashboard/StatisticsCards";
import CircularProgress from "@/components/dashboard/CircularProgress";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import ProgressSummary from "@/components/dashboard/ProgressSummary";
import TodayActivity from "@/components/dashboard/TodayActivity";
import RecentActivity from "@/components/dashboard/RecentActivity";
import AchievementSystem from "@/components/dashboard/AchievementSystem";
import DownloadCenter from "@/components/dashboard/DownloadCenter";

import CertificateUnlock from "@/components/certificate/CertificateUnlock";
import CertificatePreview from "@/components/certificate/CertificatePreview";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        {/* Welcome */}
        <div className="w-full">
          <UserWelcome />
        </div>

        {/* Hero */}
        <DashboardHero />

        {/* Statistics */}
        <StatisticsCards />

        {/* Progress */}
        <div className="grid gap-8 lg:grid-cols-2">
          <CircularProgress />
          <WeeklyProgress />
        </div>

        {/* Continue Learning */}
        <ContinueLearning />

        {/* Progress Summary */}
        <ProgressSummary />

        {/* Today's Activity */}
        <TodayActivity />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Achievement */}
        <AchievementSystem />

        {/* Downloads */}
        <DownloadCenter />

        {/* Certificate Unlock */}
        <CertificateUnlock />

        {/* Certificate Preview */}
        <CertificatePreview
          studentName="Afroz IT Solution"
        />

      </main>
    </AuthGuard>
  );
}