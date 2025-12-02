"use client";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

import Loader from "@/components/ui/loader";

export default function DashboardHome() {
  const { userData, isLoading } = useCurrentUser();

  if (isLoading) return <Loader />;
  if (!userData) return null;

  const { name } = userData;

  return <div>Hey, {name?.split(" ")[0]}!</div>;
}
