import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  headerVariant?: "light" | "dark";
}

export function PageLayout({ children, headerVariant = "light" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header variant={headerVariant} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
