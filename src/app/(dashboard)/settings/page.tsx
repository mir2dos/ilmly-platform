"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon, SaveIcon } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

import { ThemeSwitch } from "@/components/widgets/theme-switch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentsPage() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut();
    router.push("/auth");
  };

  return (
    <section className="space-y-8 max-w-lg">
      <article className="space-y-4">
        <h2 className="text-2xl font-bold">Profil</h2>
        <hr />
        <div className="grid items-center gap-x-4 gap-y-6 md:grid-cols-[1fr_3fr]">
          <Label htmlFor="fullName">Ism familiya</Label>
          <Input id="fullName" type="text" placeholder="John Doe" />
          <Label htmlFor="email">Elektron pochta</Label>
          <Input id="email" type="email" placeholder="john@gmail.com" />
          <Label htmlFor="phoneNumber">Telefon raqam</Label>
          <Input id="phoneNumber" type="tel" placeholder="+998 90 123 45 67" />
        </div>
        <Button className="w-fit" variant="outline">
          <SaveIcon /> Saqlash
        </Button>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold">Ko'rinish</h2>
        <hr />
        <div className="grid items-center gap-x-4 gap-y-6 md:grid-cols-[1fr_3fr]">
          <p>Mavzu</p>
          <ThemeSwitch />
        </div>
      </article>
      <article className="space-y-4">
        <h2 className="text-2xl font-bold">Hisob</h2>
        <hr />
        <Button variant="destructive" className="w-fit" onClick={handleLogOut}>
          <LogOutIcon />
          <span>Chiqish</span>
        </Button>
      </article>
    </section>
  );
}
