import DashboardCards from "@/components/admin/DashboardCards";
import RecentStudents from "@/components/admin/RecentStudents";
import ActivityCard from "@/components/admin/ActivityCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome to Afroz Excel Academy Admin Panel.
        </p>

      </div>

      {/* Stats */}

      <DashboardCards />

      {/* Bottom */}

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RecentStudents />
        </div>

        <div>
          <ActivityCard />
        </div>

      </div>

    </div>
  );
}