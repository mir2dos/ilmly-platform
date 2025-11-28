"use client";

import { Bell, LogOut, Settings } from "lucide-react";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

import { useAuthActions } from "@convex-dev/auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();
  const router = useRouter();

  if (isLoading) return <Loader />;
  if (!data) return null;

  const { name, image, email } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  const handleLogOut = async () => {
    await signOut();
    router.push("/auth");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings />
            Sozlamalar
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Bildirishnomalar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            <LogOut />
            Chiqish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
