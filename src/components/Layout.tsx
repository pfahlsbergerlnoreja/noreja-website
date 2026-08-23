import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}


export function Layout({ children }: LayoutProps) {

  return (
    <div className="min-h-screen flex flex-col relative w-full max-w-full overflow-x-clip">
      {/* Global grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--noreja-main)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-main)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      
      <Header />
      <main className="flex-1 relative z-10 w-full max-w-full overflow-x-clip" role="main">
        {children}
      </main>
      <Footer />

    </div>
  );
}