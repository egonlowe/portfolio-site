import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Import Navbar and Footer
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Lowe | Portfolio",
  description: "Portfolio website built with Next.js and Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar at top */}
        <Navbar />
        
        {/* ✅ Main content with top padding for sticky navbar */}
        <main className="pt-20">{children}</main>
        
        {/* ✅ Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
