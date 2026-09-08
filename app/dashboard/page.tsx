import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentDocuments from "@/components/dashboard/RecentDocuments";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="p-6 md:p-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <WelcomeHeader />

          <StatsCards />

          <RecentDocuments />
        </div>
      </div>
    </>
  );
}