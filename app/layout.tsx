import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

import "@/styles/reset.scss"
import "@/styles/global.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI-Powered",
  description: "Created by create Selim Güney",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
