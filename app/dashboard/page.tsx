import CompleteLessonButton from "@/components/dashboard/CompleteLessonButton";
import UserMenu from "@/components/dashboard/UserMenu";
import AuthGuard from "@/components/auth/AuthGuard";

import UserWelcome from "@/components/dashboard/UserWelcome";
import DashboardHero from "@/components/dashboard/DashboardHero";
import StatisticsCards from "@/components/dashboard/StatisticsCards";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import TodayActivity from "@/components/dashboard/TodayActivity";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ProgressSummary from "@/components/dashboard/ProgressSummary";
import AchievementSystem from "@/components/dashboard/AchievementSystem";
import DownloadCenter from "@/components/dashboard/DownloadCenter";
import CircularProgress from "@/components/dashboard/CircularProgress";

import CertificateUnlock from "@/components/certificate/CertificateUnlock";
import CertificatePreview from "@/components/certificate/CertificatePreview";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        {/* Welcome */}
        <UserWelcome />

        {/* User Menu */}
        <UserMenu />

        {/* Complete Lesson Button */}
        <CompleteLessonButton />

        {/* Hero */}
        <DashboardHero />

        {/* Statistics */}
        <StatisticsCards />

        {/* Premium Dashboard */}
        <div className="grid gap-8 lg:grid-cols-2">

          <CircularProgress />

          <WeeklyProgress />

        </div>

        {/* Continue Learning */}
        <ContinueLearning />

        {/* Progress Summary */}
        <ProgressSummary />

        <TodayActivity />

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