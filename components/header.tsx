"use client"

import { Button } from "@/components/ui/button"
import { Github, Globe, ChevronDown } from "lucide-react"
import { TanaLogo } from "./tana-logo"
import { Sidebar } from "./sidebar"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "./language-provider"
import { useTranslation } from "@/lib/i18n"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-8">
        <div className="flex items-center gap-4 lg:hidden">
          <Sidebar />
        </div>

        <div className="hidden lg:flex items-center">
          <TanaLogo />
        </div>

        <nav className="hidden lg:flex items-center gap-6 ml-8" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.home")}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1" aria-haspopup="true" aria-expanded="false">
                {t("nav.about")} <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/vision-mission">{t("nav.visionMission")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/team">{t("nav.team")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/governance">{t("nav.governance")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="/impact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.impact")}
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.documentation")}
          </Link>
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1" aria-label="Select language" aria-haspopup="true">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{language === "sw" ? "SW" : "EN"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("sw")} className={language === "sw" ? "bg-accent" : ""}>
                Kiswahili
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/tana-token" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <Button variant="default" size="sm" asChild>
            <Link href="/projects">
              <span className="hidden sm:inline">View Projects</span>
              <span className="sm:hidden">Projects</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
