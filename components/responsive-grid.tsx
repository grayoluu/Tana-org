"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children: ReactNode
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ResponsiveGrid({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = "md",
  className,
}: ResponsiveGridProps) {
  const gapClass = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  }[gap]

  const gridCols = [
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ]
    .filter(Boolean)
    .join(" ")

  return <div className={cn("grid", gridCols, gapClass, className)}>{children}</div>
}
