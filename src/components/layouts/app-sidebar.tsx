"use client";

import {
  Activity,
  BarChart3,
  CalendarCheck,
  CreditCard,
  FileCheck,
  Home,
  Inbox,
  Puzzle,
  Users,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import UserButton from "@/components/auth/user-button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/ui/logo";

const sidebarItems = [
  {
    label: "General",
    items: [
      { name: "Dashboard", url: "/", icon: Home },
      { name: "Inbox", url: "/inbox", icon: Inbox },
    ],
  },
  {
    label: "Student Management",
    items: [
      { name: "Students", url: "/students", icon: Users },
      { name: "Attendance", url: "/attendance", icon: CalendarCheck },
      { name: "Tests", url: "/tests", icon: FileCheck, new: true },
    ],
  },
  {
    label: "Finance & Analytics",
    items: [
      { name: "Payments", url: "/payments", icon: CreditCard },
      { name: "Reports", url: "/reports", icon: BarChart3 },
    ],
  },
  {
    label: "System",
    items: [
      { name: "Integrations", url: "/integrations", icon: Puzzle },
      { name: "Activity", url: "/activity", icon: Activity },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-primary text-primary-foreground">
      <SidebarHeader className="px-4 pt-4">
        <Logo variant="8" size="sm" />
      </SidebarHeader>
      <SidebarContent>
        {sidebarItems.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} data-active={isActive}>
                          <item.icon />
                          <span>{item.name}</span>
                          {item.new && <Badge variant="secondary">New</Badge>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
