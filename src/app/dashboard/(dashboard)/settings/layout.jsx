import SettingsNavbar from "@/components/layouts/settingsNavbar";
import Breadcrumb from "@/components/ui/breadcrumb";

export default function layout({ children }) {
  return (
    <>
      <Breadcrumb title={"Settings"} description={"Manage your account"} />
      <SettingsNavbar />
      {children}
    </>
  );
}
