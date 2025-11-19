import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Head from "next/head";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Juan Perez",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
