"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon, SaveIcon } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

import { ThemeSwitch } from "@/components/widgets/theme-switch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { FormEvent, useEffect, useState } from "react";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function SettingsPage() {
  const updateProfile = useMutation(api.users.updateProfile);
  const { signOut } = useAuthActions();
  const { userData, isLoading } = useCurrentUser();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleLogOut = async () => {
    await signOut();
    router.push("/auth");
  };

  useEffect(() => {
    setFullName(userData?.name || "");
    setImage(userData?.image || "");
    setPhoneNumber(userData?.phone || "");
  }, [userData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Updating...");

    try {
      await updateProfile({
        ...(fullName.length > 0 && { name: fullName }),
        ...(image.length > 0 && { image: image }),
        ...(phoneNumber.length > 0 && { phone: phoneNumber }),
      });
      setStatus("Profile updated successfully!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setStatus(`Update failed: ${errorMessage}`);
    } finally {
      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
  };

  return (
    <section className="space-y-8 max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">Profil</h2>
        <hr />
        <p>{status}</p>
        <div className="grid items-center gap-x-4 gap-y-6 md:grid-cols-[1fr_3fr]">
          <Label htmlFor="fullName">Ism familiya</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Label htmlFor="picture">Surat</Label>
          <Input
            id="picture"
            type="file"
            placeholder="upload"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Label htmlFor="phoneNumber">Telefon raqam</Label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="+998 90 123 45 67"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-fit" variant="outline">
          <SaveIcon /> Saqlash
        </Button>
      </form>

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
