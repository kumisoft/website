import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { company } from "@/lib/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Designing the digital future: experts in web creation and custom software development.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: "Kumisoft | Web & Software Development",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: company.legalName,
    title: "Kumisoft | Web & Software Development",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
