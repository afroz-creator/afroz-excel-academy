import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex flex-1 flex-col">

        <AdminNavbar />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}