import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N56 Beach House — Grand World Phu Quoc",
  description: "A Gen Z beach stay at Grand World Phu Quoc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}