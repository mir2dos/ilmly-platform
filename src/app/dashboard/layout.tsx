import { PropsWithChildren } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Sidebar from "@/components/layouts/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="fixed right-6 flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <UserButton />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
