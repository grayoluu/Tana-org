"use client"

import Link from "next/link"
import { TanaLogo } from "./tana-logo"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"
import { useTranslation } from "@/lib/i18n"
import { ResponsiveGrid } from "@/components/responsive-grid"

export function Footer() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }} gap="lg">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <TanaLogo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-mono">{t("footer.description")}</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/tana-token" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com/tanaimpact" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/company/tana-impact"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Organization Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.organization")}</h3>
            <nav className="space-y-2">
              <Link
                href="/vision-mission"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.visionMission")}
              </Link>
              <Link
                href="/team"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.team")}
              </Link>
              <Link
                href="/governance"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.governance")}
              </Link>
              <Link
                href="/transparency"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.transparency")}
              </Link>
            </nav>
          </div>

          {/* Projects & Impact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.projectsImpact")}</h3>
            <nav className="space-y-2">
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.projects")}
              </Link>
              <Link
                href="/impact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.impact")}
              </Link>
              <Link
                href="/docs"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.documentation")}
              </Link>
              <Link
                href="/docs/whitepaper"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.whitepaper")}
              </Link>
            </nav>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Tana River Basin, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hello@tanaimpact.org" className="hover:text-foreground transition-colors">
                  hello@tanaimpact.org
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </div>
            </div>
            <nav className="space-y-2 pt-2">
              <Link
                href="/legal"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.legal")}
              </Link>
            </nav>
          </div>
        </ResponsiveGrid>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">© 2025 Tana. {t("footer.rights")}</p>
          <p className="text-sm text-muted-foreground font-mono">
            {t("footer.poweredBy")} <span className="text-primary">BLOCKCHAIN_TECH</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
