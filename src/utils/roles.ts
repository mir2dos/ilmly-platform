import { Roles } from "@/types/globals";
import { currentUser } from "@clerk/nextjs/server";

export const checkRole = async (role: Roles) => {
  const user = await currentUser();
  return user?.publicMetadata.role === role;
};

export const getRole = async (): Promise<Roles> => {
  const user = await currentUser();
  return (user?.publicMetadata?.role as Roles) || "student";
};
