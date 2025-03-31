import React from "react";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const viewport: Viewport = {
  themeColor: "black",
  initialScale: 1,
  minimumScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Modern Design Tool Landing Page",
  description:
    "Created using NextJs and Framer-Motion with the help of Frontend Tribe's assets",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-neutral-950 font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
