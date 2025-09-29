import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsiveGrid } from "@/components/responsive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Code, BookOpen, Shield, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Documentation Hub
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Comprehensive Documentation</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto">
              Everything you need to understand our impact methodology, technology stack, and community governance
              model.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">White Paper</CardTitle>
                  <CardDescription className="mb-4">
                    Our comprehensive vision for blockchain-enabled community impact
                  </CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/docs/whitepaper">
                      Read White Paper <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>

              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Vision & Mission</CardTitle>
                  <CardDescription className="mb-4">
                    Understanding our core values and long-term community goals
                  </CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/vision-mission">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>

              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Impact Methodology</CardTitle>
                  <CardDescription className="mb-4">
                    How we measure and track environmental and social outcomes
                  </CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/docs/impact-methodology">
                      Explore Methods <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Documentation</h2>
            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
              <Card className="p-8 h-full">
                <CardHeader className="p-0">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Architecture Overview</CardTitle>
                  <CardDescription className="mb-6">
                    Technical architecture of our blockchain infrastructure and mobile integration
                  </CardDescription>
                  <div className="flex gap-3 mt-auto">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/architecture">System Design</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/docs/api">API Reference</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <Card className="p-8 h-full">
                <CardHeader className="p-0">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Security & Compliance</CardTitle>
                  <CardDescription className="mb-6">
                    Security protocols, audit reports, and regulatory compliance documentation
                  </CardDescription>
                  <div className="flex gap-3 mt-auto">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/docs/security">Security Model</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/legal">Legal Framework</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Governance & Economics</h2>
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Tokenomics</CardTitle>
                  <CardDescription className="mb-4">
                    Token distribution, economic model, and incentive structures
                  </CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/tokenomics">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>

              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Governance Model</CardTitle>
                  <CardDescription className="mb-4">
                    Community decision-making processes and voting mechanisms
                  </CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/governance">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>

              <Card className="p-6 h-full">
                <CardHeader className="p-0">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="mb-3">Roadmap</CardTitle>
                  <CardDescription className="mb-4">Development timeline and future milestones</CardDescription>
                  <Button variant="ghost" className="mt-auto p-0 h-auto justify-start" asChild>
                    <Link href="/roadmap">
                      View Timeline <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Resources & Reports</h2>
            <Card className="p-8 lg:p-12">
              <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="xl">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Impact Reports</h3>
                  <div className="space-y-6">
                    <div>
                      <Link href="/reports/q4-2024" className="text-primary hover:underline font-medium">
                        Q4 2024 Impact Report
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quarterly environmental and social impact metrics
                      </p>
                    </div>
                    <div>
                      <Link href="/reports/annual-2024" className="text-primary hover:underline font-medium">
                        2024 Annual Report
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Comprehensive yearly impact assessment</p>
                    </div>
                    <div>
                      <Link href="/reports/community-feedback" className="text-primary hover:underline font-medium">
                        Community Feedback Summary
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Insights from community stakeholders</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Technical Resources</h3>
                  <div className="space-y-6">
                    <div>
                      <Link href="/docs/api" className="text-primary hover:underline font-medium">
                        API Documentation
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Complete API reference and integration guides
                      </p>
                    </div>
                    <div>
                      <Link href="/docs/sdk" className="text-primary hover:underline font-medium">
                        Developer SDK
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Tools for building on our platform</p>
                    </div>
                    <div>
                      <Link href="/docs/mobile-integration" className="text-primary hover:underline font-medium">
                        Mobile Integration Guide
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        NFC and mobile money integration documentation
                      </p>
                    </div>
                  </div>
                </div>
              </ResponsiveGrid>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
