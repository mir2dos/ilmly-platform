"use client";

import { Search } from "lucide-react";

import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function SiteHeader() {
  const pathname = usePathname();

  // Split the path into parts: "/tests/123" => ["tests", "123"]
  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="py-2 flex items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-10">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {segments.length !== 0 ? <BreadcrumbSeparator /> : null}

            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/");
              const isLastItem = index === segments.length - 1;

              return (
                <>
                  {isLastItem ? (
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {segment}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  ) : (
                    <>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link href={href} className="capitalize">
                            {segment}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>

                      <BreadcrumbSeparator />
                    </>
                  )}
                </>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
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
