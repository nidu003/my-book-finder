import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Finder",
  description: "Find books using Open Library API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">{children}</body>
    </html>
  );
}
