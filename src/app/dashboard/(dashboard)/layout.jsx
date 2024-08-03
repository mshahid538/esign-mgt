import DashboardHeader from "@/components/layouts/dashboardHeader";
import DashboardSidebar from "@/components/layouts/dashboardSidebar";

export default function layout({ children }) {
  return (
    <div className="flex h-screen bg-dark/5">
      <DashboardSidebar />
      <div className="flex flex-col w-full overflow-x-auto">
        <DashboardHeader />
        <hr className="mx-2 md:mx-4 border-b border-dark/10" />
        {children}
      </div>
    </div>
  );
}
