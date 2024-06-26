"use client";

import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { cn } from "lib/utils";

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        {/* <Link
          href="/dashboard"
          className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base"
        >
          <Package2 className="size-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Home</span>
        </Link> */}
        <SidebarItem label="Dashboard" href="/dashboard">
          <Home className="size-5" />
        </SidebarItem>
        <SidebarItem label="Orders" href="/dashboard/orders">
          <ShoppingCart className="size-5" />
        </SidebarItem>
        <SidebarItem label="Products" href="/dashboard/products">
          <Package className="size-5" />
        </SidebarItem>
        <SidebarItem label="Customers" href="/dashboard/customers">
          <Users2 className="size-5" />
        </SidebarItem>
        <SidebarItem label="Analytics" href="/dashboard/analytics">
          <LineChart className="size-5" />
        </SidebarItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <SidebarItem label="Settings" href="/dashboard/settings">
          <Settings className="size-5" />
        </SidebarItem>
      </nav>
    </aside>
  );
};

const SidebarItem = ({ children, label, href }: { children: React.ReactNode; label: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8",
            isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          )}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};
