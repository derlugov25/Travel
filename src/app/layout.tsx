import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expi - AI-Powered Travel Experiences",
  description: "Revolutionary AI travel experiences. Launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
