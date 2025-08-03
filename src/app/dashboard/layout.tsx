import { PropsWithChildren } from "react";
import Link from "next/link";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="bg-muted/40 hidden border-r lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[70px] items-center pl-6">
            <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/dashboard"
                className="text-primary hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                Apps{" "}
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                Activity
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                prefetch={false}
              >
                Settings
              </Link>

              <Link
                href="/"
                className="text-muted-foreground hover:text-primary mt-12 flex items-center gap-3 rounded-lg px-3 py-2 font-mono text-xs transition-all"
              >
                &larr; Back to homepage
              </Link>
            </nav>
          </div>
        </div>
      </div>
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
