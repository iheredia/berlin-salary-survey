import type { Metadata } from "next";
import { lora } from "@/components/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
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
      <body className={lora.className}>
        <script
          defer
          data-domain="berlin-salary-survey.iheredia.com"
          src="https://patti.iheredia.com/js/script.js"
        ></script>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script src="/iframeResizer.contentWindow.js" type="text/javascript" />
      </body>
    </html>
  );
}
