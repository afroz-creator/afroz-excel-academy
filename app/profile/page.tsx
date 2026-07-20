import AuthGuard from "@/components/auth/AuthGuard";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInformation from "@/components/profile/ProfileInformation";
import LearningStatistics from "@/components/profile/LearningStatistics";
import AccountSettings from "@/components/profile/AccountSettings";

export default function ProfilePage() {
  return (
    <AuthGuard>

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-10">

        {/* Header */}
        <ProfileHeader />

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left Side */}
          <div className="lg:col-span-2">
            <ProfileInformation />
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <LearningStatistics />
            <AccountSettings />
          </div>

        </div>

      </main>

    </AuthGuard>
  );
}