import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SchemaOrg from "@/components/schema-org"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

// 메타데이터 영어로 변경
export const metadata: Metadata = {
  title: "TTM LOVE AI - Dating Skills That Make You More Attractive",
  description:
    "Form meaningful connections with AI-based personalized relationship coaching. Build healthy and satisfying relationships through dating, relationship, and breakup coaching.",
  keywords: "relationship coaching, dating skills, AI relationship advice, breakup recovery, relationship psychology",
  authors: [{ name: "TTM LOVE AI" }],
  creator: "TTM LOVE AI",
  publisher: "TTM AI LLC",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://ttmloveai.com"), // 실제 도메인으로 변경하세요
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ttmloveai.com", // 실제 도메인으로 변경하세요
    siteName: "TTM LOVE AI",
    title: "TTM LOVE AI - Dating Skills That Make You More Attractive",
    description: "Form meaningful connections with AI-based personalized relationship coaching.",
    images: [
      {
        url: "/images/og-image.jpg", // 실제 OG 이미지 경로로 변경하세요
        width: 1200,
        height: 630,
        alt: "TTM LOVE AI - Relationship Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TTM LOVE AI - Dating Skills That Make You More Attractive",
    description: "Form meaningful connections with AI-based personalized relationship coaching.",
    images: ["/images/twitter-image.jpg"], // 실제 Twitter 이미지 경로로 변경하세요
    creator: "@ttmloveai", // 실제 Twitter 핸들로 변경하세요
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
    generator: 'v0.dev'
}

// 언어 설정 변경
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SchemaOrg />
      </body>
    </html>
  )
}


import './globals.css'