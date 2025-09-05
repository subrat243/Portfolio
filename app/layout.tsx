import type { Metadata, Viewport } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";

import ErrorBoundary from "@/components/error-boundary";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-cedarville",
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(inter.variable, cedarville.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#030014" />
        <meta name="color-scheme" content="dark" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Luffy.jpeg" />
        <link rel="icon" type="image/jpeg" href="/Luffy.jpeg" />
        <meta name="msapplication-TileColor" content="#030014" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased",
          inter.className,
          "min-h-screen font-sans",
        )}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <div className="relative w-full">
            <div className="fixed inset-0 z-stars">
              <StarsCanvas />
            </div>
            <div className="relative z-content">
              <Navbar />
              <main className="relative z-content">{children}</main>
              <Footer />
            </div>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
