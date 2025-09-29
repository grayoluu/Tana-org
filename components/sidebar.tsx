"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { TanaLogo } from "./tana-logo"
import Link from "next/link"

const navigation = [
  {
    title: "About",
    items: [
      { title: "Home", href: "/" },
      { title: "Vision & Mission", href: "/vision-mission" },
      { title: "Our Team", href: "/team" },
      { title: "Governance", href: "/governance" },
    ],
  },
  {
    title: "Projects",
    items: [
      { title: "All Projects", href: "/projects" },
      { title: "Water Access", href: "/projects/water" },
      { title: "Reforestation", href: "/projects/trees" },
      { title: "Community Support", href: "/projects/community" },
    ],
  },
  {
    title: "Impact",
    items: [
      { title: "Impact Dashboard", href: "/impact" },
      { title: "Environmental", href: "/impact/environmental" },
      { title: "Social", href: "/impact/social" },
      { title: "Economic", href: "/impact/economic" },
    ],
  },
  {
    title: "Documentation",
    items: [
      { title: "Getting Started", href: "/docs" },
      { title: "White Paper", href: "/docs/whitepaper" },
      { title: "Technical Specs", href: "/docs/technical" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
  {
    title: "Technology",
    items: [
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Tokenomics", href: "/docs/tokenomics" },
      { title: "Blockchain", href: "/docs/blockchain" },
      { title: "Security", href: "/docs/security" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Get Involved", href: "/community" },
      { title: "Transparency", href: "/transparency" },
      { title: "Reports", href: "/reports" },
      { title: "Contact", href: "/contact" },
    ],
  },
]

function NavigationContent() {
  const [openSections, setOpenSections] = useState<string[]>(["About"])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2">
          <TanaLogo />
          <span className="text-lg font-semibold text-sidebar-foreground">Tana Impact</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="space-y-2">
          {navigation.map((section) => (
            <div key={section.title}>
              <Button
                variant="ghost"
                className="w-full justify-between p-2 h-auto text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                onClick={() => toggleSection(section.title)}
              >
                <span className="font-medium">{section.title}</span>
                {openSections.includes(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>

              {openSections.includes(section.title) && (
                <div className="ml-4 mt-2 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-sidebar border-r border-sidebar-border">
        <NavigationContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0 bg-sidebar">
          <NavigationContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
