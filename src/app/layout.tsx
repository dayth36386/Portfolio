import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import { FloatingDockDemo } from "./features/homepage/allcomponents/FloatingDock";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Dechawiwatwong Detchang",
  description: "JUNIOR FRONTEND DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`select-none ${roboto} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <div className="fixed -bottom-24 right-0 z-10 mx-3 sm:hidden block">
            <FloatingDockDemo />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
