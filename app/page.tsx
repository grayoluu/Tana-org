"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Droplets, TreePine, Users, Shield, Globe, TrendingUp, Heart, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useTranslation } from "@/lib/i18n"
import { ResponsiveGrid } from "@/components/responsive-grid"

export default function HomePage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative" id="main-content">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          <div className="absolute inset-0 bg-[url('/abstract-water-ripples-pattern.jpg')] opacity-5 bg-cover bg-center" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in-up">
              Blockchain • Impact • Community • Sustainability
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance animate-fade-in-up">
              {t("home.hero.title")}
              <br />
              <span className="text-primary">Through Impact</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 text-pretty max-w-4xl mx-auto animate-fade-in-up">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/projects">
                  {t("home.hero.cta")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                <Link href="/impact">View Impact Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Impact So Far</h2>
              <p className="text-xl text-muted-foreground">
                Measurable outcomes delivered through community-driven initiatives
              </p>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
              <Card className="text-center p-8">
                <CardHeader>
                  <Droplets className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold text-primary">2,847</CardTitle>
                  <CardDescription className="text-lg">People with clean water access</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center p-8">
                <CardHeader>
                  <TreePine className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold text-primary">15,230</CardTitle>
                  <CardDescription className="text-lg">Trees planted for reforestation</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center p-8">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-3xl font-bold text-primary">1,256</CardTitle>
                  <CardDescription className="text-lg">Community members supported</CardDescription>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t("home.mission.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{t("home.mission.description")}</p>
            </div>

            <ResponsiveGrid cols={{ default: 1, lg: 3 }} gap="lg">
              <Card className="p-8 text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>{t("home.mission.transparency")}</CardTitle>
                  <CardDescription>{t("home.mission.transparencyDesc")}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-8 text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>{t("home.mission.community")}</CardTitle>
                  <CardDescription>{t("home.mission.communityDesc")}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-8 text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>{t("home.mission.measurable")}</CardTitle>
                  <CardDescription>{t("home.mission.measurableDesc")}</CardDescription>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine cutting-edge blockchain technology with community-driven initiatives to create lasting,
                measurable impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community-First Design</h3>
                    <p className="text-muted-foreground">
                      Every project starts with community needs assessment and local leadership involvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Technology</h3>
                    <p className="text-muted-foreground">
                      Blockchain ensures every transaction and impact metric is verifiable and transparent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Measurable Outcomes</h3>
                    <p className="text-muted-foreground">
                      Real-time tracking of environmental and social impact through data-driven metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/community-meeting-kenya-tana-river.jpg"
                  alt="Community meeting in Tana River Basin"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Tana Impact</h2>
              <p className="text-xl text-muted-foreground">Combining innovation with proven impact delivery</p>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              <Card className="p-6">
                <CardHeader>
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Transparent Governance</CardTitle>
                  <CardDescription>
                    Community-driven decision making with full transparency through blockchain governance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <Globe className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Global Standards</CardTitle>
                  <CardDescription>
                    Following international best practices for impact measurement and reporting
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Scalable Solutions</CardTitle>
                  <CardDescription>
                    Technology-enabled approaches that can scale across communities and regions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <Heart className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Community Ownership</CardTitle>
                  <CardDescription>
                    Local communities own and operate projects, ensuring long-term sustainability
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <Zap className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Rapid Deployment</CardTitle>
                  <CardDescription>Efficient project implementation with immediate impact measurement</CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <Users className="h-10 w-10 text-accent mb-4" />
                  <CardTitle>Inclusive Access</CardTitle>
                  <CardDescription>
                    Mobile-first design ensuring accessibility across all community members
                  </CardDescription>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community-driven mission to transform lives through sustainable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">View Active Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
