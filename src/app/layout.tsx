import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/header";

const manrop = Manrope({ subsets: ["latin"], variable: "--font-manrop" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-manrope antialiased",
          manrop.variable
        )}
      >
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
