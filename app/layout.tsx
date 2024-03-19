import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import SessionWrapper from "@/components/auth/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aries Beta",
  description: "Your personal PaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
      </SessionWrapper>
  );
}
