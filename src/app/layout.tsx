import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const defaultFont = Plus_Jakarta_Sans({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solutions Architect & Technical Strategist | Mubbashir Mustafa",
  description:
    "I am a technical strategist and architect. With more than 9 years of experience in full stack development, I have built solutions for Venture Beat, Deloitte and United Nations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
