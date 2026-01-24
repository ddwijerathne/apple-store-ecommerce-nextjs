import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Apple Clone Store",
  description: "A clone of the Apple Store navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}