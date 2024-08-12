import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function layout({ children }) {
  const tabs = [
    { name: "Profile", link: "" },
    { name: "Notification", link: "notification" },
    { name: "Brand", link: "brand" },
    { name: "Proposal", link: "proposal" },
    { name: "Integration", link: "integration" },
    { name: "Clients", link: "clients" },
    { name: "Billing", link: "billing" },
  ];
  return (
    <>
      <Breadcrumb title={"Settings"} description={"Manage your account"} />
      <section className="px-xs">
        <nav className="gap-xs p-xs flex justify-between rounded bg-light text-dark/50">
          {tabs.map((tab, i) => (
            <Link className="" href={"/dashboard/settings/" + tab.link} key={i}>
              {tab.name}
            </Link>
          ))}
        </nav>
      </section>
      {children}
    </>
  );
}
