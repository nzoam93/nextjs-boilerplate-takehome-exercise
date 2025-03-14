import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noam Zimet's Take-Home Exercise",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {/* <div className="layout-header">
          <p>Digital Success Take Home Assignment</p>
          <p>By: Noam Zimet </p>
        </div> */}
        <nav>
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/question1"}>Question 1</Link></li>
            <li><Link href={"/question2"}>Question 2</Link></li>
            <li><Link href={"/question3"}>Question 3</Link></li>
            <li><Link href={"/question4"}>Question 4</Link></li>
            <li><Link href={"/question5"}>Question 5</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
