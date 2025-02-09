import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/theme-provider"
import type React from "react" // Added import for React

export const metadata: Metadata = {
  title: "High Security Prison",
  description: "Official website of the High Security Prison",
};

export default function RootLayout({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <>
      <html lang="ru" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
