"use client"

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
import { Providers } from "./providers";
import icon from './favicon.ico';
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { html } from "framer-motion/client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <html lang="en">
        <body>
        <Spinner />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased fade-in`}>
        <Providers>
          <Wrapper >
            <Header />
              <div>
                {children}
              </div>
            <Footer />
          </Wrapper>
        </Providers>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}