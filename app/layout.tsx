import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css"; // Assuming you have global styles

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
        {/* The Navbar sits at the top of the body */}
        <Navbar />
        
        {/* The page content renders here */}
        <main>{children}</main>
      </body>
    </html>
  );
}