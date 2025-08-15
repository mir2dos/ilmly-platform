import { SIDEBAR_LINKS } from "@/data/sidebar-links";
import { Roles } from "@/types/globals";
import { getRole } from "@/utils/roles";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Link from "next/link";

export default async function Sidebar() {
  const role = await getRole();

  return (
    <div className="bg-muted/40 hidden border-r lg:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-[70px] items-center pl-6">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {SIDEBAR_LINKS[role as Roles].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-primary hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
