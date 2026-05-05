import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dev Portfolio | Senior Full-Stack Web Developer",
  description: "Portfolio of a Senior Full-Stack Developer specializing in React, Next.js, AI Solutions, and IoT Systems.",
  openGraph: {
    title: "Dev Portfolio | Senior Full-Stack Web Developer",
    description: "Portfolio of a Senior Full-Stack Developer specializing in React, Next.js, AI Solutions, and IoT Systems.",
    url: "https://yourportfolio.com",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
