import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { AccessibilitySkipLink } from "@/components/accessibility-skip-link"
import { ThemeProvider } from "@/components/theme-provider"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
})

export const metadata: Metadata = {
  title: "Tana Impact - Transforming Communities Through Blockchain Technology",
  description:
    "A community-driven impact organization using blockchain technology to deliver measurable environmental and social outcomes in Kenya's Tana River Basin.",
  generator: "v0.app",
  keywords: ["blockchain", "impact", "sustainability", "Kenya", "Tana River", "community development", "environmental"],
  authors: [{ name: "Tana Impact Organization" }],
  openGraph: {
    title: "Tana Impact - Transforming Communities Through Blockchain Technology",
    description:
      "A community-driven impact organization using blockchain technology to deliver measurable environmental and social outcomes in Kenya's Tana River Basin.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AccessibilitySkipLink />
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
