import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./Providers";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0xN4NA's Portfolio",
  description: "dev. Emmanuel Nana Acheampong"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning
      className={cn("h-full", "antialiased", montserrat.variable, "font-sans", inter.variable)}>
      <body className="min-h-screen bg-black text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
