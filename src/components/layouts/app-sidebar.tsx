"use client";

import {
  BarChart2Icon,
  CalendarCheckIcon,
  FileCheckIcon,
  HomeIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserCircleIcon,
  UsersIcon,
  WalletIcon,
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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Logo from "@/components/ui/logo";

const mentorSidebarItems = [
  { name: "Dashboard", url: "/", icon: HomeIcon },
  { name: "Guruhlar", url: "/groups", icon: UsersIcon },
  { name: "O'quvchilar", url: "/students", icon: UserCircleIcon },
  { name: "Davomat", url: "/attendance", icon: CalendarCheckIcon },
  { name: "Testlar", url: "/tests", icon: FileCheckIcon, separate: true },
  { name: "Xabarlar", url: "/messages", icon: MessageCircleIcon },
  { name: "Sozlamalar", url: "/settings", icon: SettingsIcon },
];

const adminSidebarItems = [
  { name: "Dashboard", url: "/", icon: HomeIcon },
  { name: "Mentorlar", url: "/mentors", icon: UsersIcon },
  { name: "Guruhlar", url: "/groups", icon: UsersIcon },
  { name: "O'quvchilar", url: "/students", icon: UserCircleIcon },
  { name: "Davomat", url: "/attendance", icon: CalendarCheckIcon },
  { name: "Darslar", url: "/lessons", icon: FileCheckIcon },
  { name: "Testlar", url: "/tests", icon: FileCheckIcon, separate: true },
  { name: "Xabarlar", url: "/messages", icon: MessageCircleIcon },
  { name: "To'lovlar", url: "/payments", icon: WalletIcon },
  {
    name: "Statistika",
    url: "/analytics",
    icon: BarChart2Icon,
    separate: true,
  },
  { name: "Sozlamalar", url: "/settings", icon: SettingsIcon },
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
                {item.separate && <SidebarSeparator />}
              </SidebarMenu>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
