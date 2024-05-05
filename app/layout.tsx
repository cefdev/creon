import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creon",
  description:
    "The world's first platform for Tokenizing AI blockchain projects",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-satoshi-regular">
        {children}
      </body>
    </html>
  );
}
