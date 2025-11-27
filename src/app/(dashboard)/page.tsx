"use client";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

import Loader from "@/components/ui/loader";

export default function DashboardHome() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) return <Loader />;
  if (!data) return null;

  const { name } = data;

  return <div>Hey, {name?.split(" ")[0]}!</div>;
}
