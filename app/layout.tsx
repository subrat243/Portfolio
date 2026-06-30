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
import { ThemeProvider } from "./providers";

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
  themeColor: "#F1F6F9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(inter.variable, cedarville.variable)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#F1F6F9" />
        <meta name="color-scheme" content="light" />

        <meta name="msapplication-TileColor" content="#F1F6F9" />
      </head>
      <body
        className={cn(
          "bg-[#F1F6F9] dark:bg-dark-100 text-[#212A3E] dark:text-white overflow-y-scroll overflow-x-hidden antialiased transition-colors duration-300",
          inter.className,
          "min-h-screen font-sans",
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ErrorBoundary>
            <div className="relative w-full">
              <Navbar />
              <StarsCanvas />
              <main className="relative w-full">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
