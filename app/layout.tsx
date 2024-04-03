import type { Metadata } from "next";
import { lora } from "@/components/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berlin Salary Survey",
  description: "Analysis of the 2023 Berlin Salary Surver responses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
