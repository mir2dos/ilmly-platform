import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCurrentUser = () => {
  const userData = useQuery(api.users.current);
  const isLoading = userData === undefined;

  return { userData, isLoading };
};
