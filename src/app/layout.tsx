import type { Metadata } from "next";
import "./globals.css";
import { Share_Tech_Mono } from "next/font/google";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Agent Portfolio",
  description: "Matrix-style developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${terminalFont.className} bg-black text-[#b4ff39]`}
      >
        {children}
      </body>
    </html>
  );
}
