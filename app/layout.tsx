import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "#MerdekaBuku - Logos ID | 1000 Buku Gratis untuk Indonesia",
  description:
    "Inisiatif #MerdekaBuku oleh Logos ID untuk menerjemahkan 1000 buku pendidikan gratis ke Bahasa Indonesia dan mendistribusikannya ke daerah terpencil.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
