"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Logo from "@/components/ui/logo";
import { MENTOR_SIDEBAR_ITEMS } from "@/data/sidebar-items";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4">
        <Logo size="sm" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-2">
          {MENTOR_SIDEBAR_ITEMS.map((item) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;

            return (
              <SidebarMenu key={item.name}>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="py-2 px-4 h-auto">
                    <Link href={item.url} data-active={isActive}>
                      <Icon />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {item.separate && <SidebarSeparator />}
              </SidebarMenu>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
