import { Metadata } from "next";
import { Header } from "app/dashboard/_components/header";
import { Sidebar } from "app/dashboard/_components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">{children}</div>
      </div>
    </div>
  );
}
