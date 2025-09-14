import { Search } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

export default function SiteHeader() {
  return (
    <header className="py-2 flex items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-10">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="ml-auto relative">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Search size={16} />
          </div>
          <Input
            placeholder="Search anything ..."
            type="search"
            className="pl-8 w-[20rem]"
          />
        </div>
      </div>
    </header>
  );
}
