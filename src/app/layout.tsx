"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LeetClone",
  description: "Leetcode Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <Head />
        <body className={inter.className}>{children}</body>
      </html>
    </RecoilRoot>
  );
}
