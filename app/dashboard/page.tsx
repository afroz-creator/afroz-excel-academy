import AuthGuard from "@/components/auth/AuthGuard";
import UserWelcome from "@/components/dashboard/UserWelcome";
import DashboardHero from "@/components/dashboard/DashboardHero";
import StatisticsCards from "@/components/dashboard/StatisticsCards";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import ProgressSummary from "@/components/dashboard/ProgressSummary";
import AchievementSystem from "@/components/dashboard/AchievementSystem";
import DownloadCenter from "@/components/dashboard/DownloadCenter";
import CertificateUnlock from "@/components/certificate/CertificateUnlock";
import CertificatePreview from "@/components/certificate/CertificatePreview";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="mx-auto max-w-7xl px-6 py-8 space-y-8">

        <UserWelcome />

        <DashboardHero />

        <StatisticsCards />

        <WeeklyProgress />

        <ContinueLearning />

        <ProgressSummary />

        <AchievementSystem />

        <DownloadCenter />

        <CertificateUnlock />

        <CertificatePreview studentName="Afroz IT Solution" />

      </main>
    </AuthGuard>
  );
}