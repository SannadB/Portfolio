import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import 'devicon/devicon.min.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sannad Bilal",
  description:
    "Professional portfolio and CV of Sannad Bilal, showcasing expertise in AI engineering, embedded systems, and modern technologies.",
  keywords: "AI engineer, embedded systems, machine learning, IoT, ARM Cortex, FPGA, portfolio, CV",
  authors: [{ name: "Sannad Bilal" }],
  openGraph: {
    title: "Sannad Bilal",
    description: "Professional portfolio and CV showcasing expertise in AI and embedded systems development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
