import { Roles } from "@/types/globals";

export const SIDEBAR_LINKS: Record<Roles, { label: string; href: string }[]> = {
  admin: [
    { label: "Mentors", href: "/dashboard/mentors" },
    { label: "Students", href: "/dashboard/students" },
    { label: "Analytics", href: "/dashboard/analytics" },
  ],
  mentor: [
    { label: "Students", href: "/dashboard/students" },
    { label: "Tests", href: "/dashboard/tests" },
    { label: "Attendance", href: "/dashboard/attendance" },
  ],
  student: [
    { label: "Courses", href: "/dashboard/courses" },
    { label: "Assignments", href: "/dashboard/assignments" },
    { label: "Grades", href: "/dashboard/grades" },
  ],
};
