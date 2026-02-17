"use client";
// import type { Metadata } from "next";
import { useState } from "react";
import localFont from "next/font/local";
import Nav from "@/components/organisms/Nav/Nav";
import "./globals.scss";
import "./reset.scss";

// TODO: figure out how to keep metadata!

// export const metadata: Metadata = {
//   title: "E-Commerce",
//   description: "E-Commerce Application",
// };

const montserrat = localFont({
  src: "../assets/fonts/Montserrat-Regular.ttf",
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <html lang="en" className={montserrat.className}>
      <body style={{ overflow: isNavOpen ? "hidden" : "initial" }}>
        <header>
          <Nav
            isOpen={isNavOpen}
            toggleIsOpen={() => setIsNavOpen((v) => !v)}
          />
        </header>
        <main inert={isNavOpen}>{children}</main>
      </body>
    </html>
  );
}
