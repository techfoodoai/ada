import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Inter,
  Birthstone,
  Open_Sans,
  Poppins,
  Merriweather,
  Fira_Code,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Ada",
  description: "Ada",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Ada",
};

const stone = Birthstone({
  subsets: ["latin"],
  variable: "--font-stone",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const opens = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
  weight: ["400"],
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter text-[#FBEAD2] antialiased",
          stone.variable,
          inter.variable,
          opens.variable,
          poppins.variable,
          merriweather.variable,
          fira.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
