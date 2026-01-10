import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";
import { Footer } from "@/components/site-footer";
import { Navbar } from "@/components/site-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
