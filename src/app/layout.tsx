import type { Metadata } from "next";
import { IBM_Plex_Sans as Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abubakar Muktar",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-32`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
