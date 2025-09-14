import AppSidebar from "@/components/layouts/app-sidebar";
import SiteHeader from "@/components/layouts/site-header";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SiteHeader />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
