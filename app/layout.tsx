import { Inter } from "next/font/google"
import type React from "react" // Import React

import "./globals.css"
import SiteHeader from "@/app/site-header"
import { MobileHeaderMenu } from "@/components/mobile-header-menu";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <MobileHeaderMenu />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
