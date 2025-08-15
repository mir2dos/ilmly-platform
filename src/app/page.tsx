// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const Home = async () => {
  // User is signed in, redirect to dashboard
  return <a href="/sign-in">Sign in</a>;
};

export default Home;
