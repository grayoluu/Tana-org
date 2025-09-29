"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TocItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const tocItems: TocItem[] = []

    headings.forEach((heading) => {
      if (heading.id) {
        tocItems.push({
          id: heading.id,
          title: heading.textContent || "",
          level: Number.parseInt(heading.tagName.charAt(1)),
        })
      }
    })

    setToc(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) return null

  return (
    <div className="hidden xl:block fixed right-8 top-24 w-64">
      <div className="bg-card border border-border rounded-lg p-4">
        <h4 className="font-semibold text-sm mb-4 text-card-foreground">On this page</h4>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <nav className="space-y-1">
            {toc.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`w-full justify-start text-left h-auto py-1 px-2 ${
                  activeId === item.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                <span className="text-xs leading-relaxed">{item.title}</span>
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}
