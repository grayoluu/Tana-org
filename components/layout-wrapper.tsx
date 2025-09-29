"use client"

import type { ReactNode } from "react"

interface LayoutWrapperProps {
  children: ReactNode
  hasTableOfContents?: boolean
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl" | "full"
}

export function LayoutWrapper({ children, hasTableOfContents = false, maxWidth = "6xl" }: LayoutWrapperProps) {
  const maxWidthClass = {
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  }[maxWidth]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <main className={`flex-1 ${hasTableOfContents ? "xl:pr-72" : ""}`}>
          <div className={`${maxWidthClass} mx-auto px-6 lg:px-8 py-12`}>{children}</div>
        </main>
      </div>
    </div>
  )
}
