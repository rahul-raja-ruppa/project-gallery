import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Labeling Solutions | High-Performance Labels, Tags & Stickers",
  description: "Leading provider of high-performance labeling solutions for industry leaders. Custom labels, printed tags, and stickers with unmatched quality and compliance.",
  keywords: "labels, printed tags, stickers, corporate labeling, industrial labels, custom labels",
  authors: [{ name: "Premium Labeling Solutions" }],
  openGraph: {
    title: "Premium Labeling Solutions | High-Performance Labels, Tags & Stickers",
    description: "Leading provider of high-performance labeling solutions for industry leaders.",
    type: "website",
  },
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
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
