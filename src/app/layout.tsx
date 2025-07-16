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
  title: "Dechawiwatwong Detchang",
  description: "JUNIOR FRONTEND DEVELOPER",
  openGraph: {
    title: "Dechawiwatwong Detchang",
    description:
      "I'm a Junior Front-End Developer passionate about building scalable web applications...",
    url: "https://porfolio-gdyo.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://porfolio-gdyo.vercel.app/img/webhomepage.png",
        width: 1200,
        height: 630,
        alt: "Dechawiwatwong Detchang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dechawiwatwong Detchang",
    description:
      "I'm a Junior Front-End Developer passionate about building scalable web applications...",
    images: ["https://porfolio-gdyo.vercel.app/img/webhomepage.png"],
  },
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
