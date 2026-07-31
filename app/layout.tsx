import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EV Care Bangladesh",
  description: "Smart Electric Vehicle Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}