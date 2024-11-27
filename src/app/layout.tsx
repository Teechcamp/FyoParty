import React, { ReactNode } from "react";
import { Playfair_Display, The_Nautigal } from "next/font/google"
import './styles/globals.scss';

const playfairDisplay = Playfair_Display({
  weight: ["400","500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const nautigal = The_Nautigal({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nautigal",
});



export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${nautigal.variable}`}>
      <body>{children}</body>
    </html>
  );
}
