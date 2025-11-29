"use client";

import { useEffect, useState } from "react";

import type { SignInFlow } from "../types";

import SignInCard from "@/features/auth/components/sign-in-card";
import SignUpCard from "@/features/auth/components/sign-up-card";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export default function AuthScreen() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  const [state, setState] = useState<SignInFlow>("signIn");

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
