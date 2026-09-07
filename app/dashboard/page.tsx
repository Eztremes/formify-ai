import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <WelcomeHeader />

          {/* Dashboard content will be added here */}
          <div className="mt-10 rounded-3xl border border-dashed border-border/70 p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Your documents will appear here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}