import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simplicity Employment Agency Pte Ltd",
  description: "We help to provide reliable helpers to customers for their daily activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "relative")}>{children}</body>
    </html>
  );
}
