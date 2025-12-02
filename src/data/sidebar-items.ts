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

export const ADMIN_SIDEBAR_ITEMS = [
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

export const MENTOR_SIDEBAR_ITEMS = [
  { name: "Dashboard", url: "/", icon: HomeIcon },
  { name: "Guruhlar", url: "/groups", icon: UsersIcon },
  { name: "O'quvchilar", url: "/students", icon: UserCircleIcon },
  { name: "Davomat", url: "/attendance", icon: CalendarCheckIcon },
  { name: "Testlar", url: "/tests", icon: FileCheckIcon, separate: true },
  { name: "Xabarlar", url: "/messages", icon: MessageCircleIcon },
  { name: "Sozlamalar", url: "/settings", icon: SettingsIcon },
];
