import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GEN 002 | Poverty",
  description: "A comprehensive analysis of poverty in the Philippines, exploring root causes, current challenges, and actionable recommendations for sustainable change.",
  generator: "v0.app",
  openGraph: {
    title: "GEN 002 | Poverty - Breaking the Cycle",
    description: "A comprehensive analysis of poverty in the Philippines, exploring root causes, current challenges, and actionable recommendations for sustainable change.",
    url: "https://poverty-gen002.vercel.app",
    siteName: "GEN 002 | Poverty",
    images: [
      {
        url: "https://poverty-gen002.vercel.app/poverty-situation-philippines-families.jpg",
        width: 1200,
        height: 630,
        alt: "Poverty in the Philippines - Breaking the Cycle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEN 002 | Poverty - Breaking the Cycle",
    description: "A comprehensive analysis of poverty in the Philippines, exploring root causes, current challenges, and actionable recommendations for sustainable change.",
    images: ["https://poverty-gen002.vercel.app/poverty-situation-philippines-families.jpg"],
  },
  metadataBase: new URL("https://poverty-gen002.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
