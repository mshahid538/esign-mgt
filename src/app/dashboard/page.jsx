import DashboardSearchFilters from "@/components/sections/dashboardSearchFilters";
import TemplateCards from "@/components/sections/templateCards";

export default function page() {
  return (
    <main className="flex flex-col gap-md p-xs overflow-y-scroll">
      <DashboardSearchFilters />
      <TemplateCards />
    </main>
  );
}
