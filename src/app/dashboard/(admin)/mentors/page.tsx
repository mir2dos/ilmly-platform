import ComingSoon from "@/components/layouts/coming-soon";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default async function Feature1() {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <p>
        This is the protected admin dashboard restricted to users with the
        `admin` role.
      </p>
      <ComingSoon />
    </>
  );
}
