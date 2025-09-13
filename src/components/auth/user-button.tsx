"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useAuthActions } from "@convex-dev/auth/react";
import { Loader, LogOut } from "lucide-react";

export default function UserButton() {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <Loader className="size-4 animate-spin" />;
  }

  if (!data) return null;

  const { name, email, image } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
