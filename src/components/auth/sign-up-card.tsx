"use client";

import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TriangleAlert } from "lucide-react";

import { useAuthActions } from "@convex-dev/auth/react";

import Image from "next/image";

import { SignInFlow } from "@/types/auth";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignUpCard({ setState }: SignUpCardProps) {
  const { signIn } = useAuthActions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onPasswordSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setPending(true);
    signIn("password", { name, email, password, flow: "signUp" })
      .catch(() => {
        setError("Something went wrong.");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const onProviderSignUp = (value: "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={onPasswordSignUp} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Hey, there! 👋</h1>
                <p className="text-muted-foreground text-balance">
                  Let's create your Ilmly account
                </p>
              </div>
              {!!error && (
                <div className="bg-destructive/10 px-4 py-2 flex items-center gap-4 rounded-md text-destructive/80 text-sm">
                  <TriangleAlert />
                  <p>{error}</p>
                </div>
              )}
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  disabled={pending}
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
                <Input
                  id="password"
                  type="password"
                  disabled={pending}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  disabled={pending}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign up
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
                onClick={() => onProviderSignUp("google")}
              >
                <FcGoogle />
                Sign up with Google
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Button
                  variant="link"
                  disabled={pending}
                  onClick={() => setState("signIn")}
                  className="underline underline-offset-4 px-0 py-0 cursor-pointer"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/images/working-on-laptop.jpg"
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
