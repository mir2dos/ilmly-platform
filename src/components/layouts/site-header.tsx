"use client";

import { SearchIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import UserButton from "@/features/auth/components/user-button";

export default function SiteHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="py-2 px-4 flex items-center justify-between gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-10">
      <div className="flex items-center gap-2">
        {isMobile && (
          <>
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
          </>
        )}
        <p>Dasboard</p>
      </div>
      <div className="flex items-center gap-2">
        <InputGroup className="w-xs">
          <InputGroupInput placeholder="Qidiring..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <UserButton />
      </div>
    </header>
  );
}
