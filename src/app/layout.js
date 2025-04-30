import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "@/lib/ThemeContext";
import Topbar from "@/components/Topbar";

import SessionWrapper from "@/lib/Providers";
import { CartProvider } from "@/context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aghadi Infotech Proposals",
  description: "Web Design and Development Proposal...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <CartProvider>
            <ThemeProvider>
              <Topbar />
              {children}
              <Toaster position="top-center" />
            </ThemeProvider>
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
