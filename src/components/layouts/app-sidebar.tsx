"use client";

import {
  CalendarCheck,
  FileCheck,
  Home,
  MessageCircle,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";

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
} from "@/components/ui/sidebar";
import Logo from "@/components/ui/logo";

const mentorSidebarItems = [
  { name: "Dashboard", url: "/", icon: Home },
  { name: "Xabarlar", url: "/messages", icon: MessageCircle },
  { name: "Guruhlar", url: "/groups", icon: Users },
  { name: "O'quvchilar", url: "/students", icon: UserCircle },
  { name: "Davomat", url: "/attendance", icon: CalendarCheck },
  { name: "Testlar", url: "/tests", icon: FileCheck },
  { name: "To'lovlar", url: "/payments", icon: Wallet },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4">
        <Logo size="sm" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-2">
          {mentorSidebarItems.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenu key={item.name}>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="py-2 px-4 h-auto">
                    <Link href={item.url} data-active={isActive}>
                      <item.icon />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
