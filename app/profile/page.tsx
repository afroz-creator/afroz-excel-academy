import AuthGuard from "@/components/auth/AuthGuard";

import ProfileHeader from "@/components/profile/ProfileHeader";

import LearningStats from "@/components/profile/LearningStats";
import AccountSettings from "@/components/profile/AccountSettings";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        <ProfileHeader />

        <div className="grid gap-8 lg:grid-cols-2">

          

          <LearningStats />

        </div>

        <AccountSettings />

      </main>
    </AuthGuard>
  );
}