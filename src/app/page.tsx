import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    // User is not signed in, redirect to sign-in
    redirect("/sign-in");
  }

  // User is signed in, redirect to dashboard
  redirect("/dashboard");
};

export default Home;
