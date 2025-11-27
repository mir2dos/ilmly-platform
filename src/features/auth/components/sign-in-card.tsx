"use client";

import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TriangleAlert } from "lucide-react";

import { useAuthActions } from "@convex-dev/auth/react";

import Image from "next/image";

import { SignInFlow } from "../types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignInCard({ setState }: SignInCardProps) {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onPasswordSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);
    signIn("password", { email, password, flow: "signIn" })
      .catch(() => {
        setError("Invalid email or password");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const onProviderSignIn = (value: "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={onPasswordSignIn} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your Ilmly account
                </p>
              </div>
              {!!error && (
                <div className="bg-destructive/10 px-4 py-2 flex items-center gap-4 rounded-md text-destructive/80 text-sm">
                  <TriangleAlert />
                  <p>{error}</p>
                </div>
              )}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  disabled={pending}
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                {/* <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div> */}
                <Input
                  id="password"
                  type="password"
                  disabled={pending}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full"
                disabled={pending}
                onClick={() => onProviderSignIn("google")}
              >
                <FcGoogle />
                {pending ? "Logging in..." : "Login with Google"}
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Button
                  variant="link"
                  disabled={pending}
                  onClick={() => setState("signUp")}
                  className="underline underline-offset-4 px-0 py-0 cursor-pointer"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/assets/images/working-on-laptop.jpg"
              alt="Working on laptop"
              fill
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
