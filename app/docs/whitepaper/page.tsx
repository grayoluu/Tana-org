import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsiveGrid } from "@/components/responsive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/docs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Documentation
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              White Paper v2.1
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Tana Impact White Paper</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-4xl mx-auto">
              A Community-Driven Digital Currency for Impact, Inclusion & Sustainability in the Tana River Basin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/tana-token/whitepaper" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="md">
                <div className="space-y-3">
                  <Link href="#abstract" className="block text-primary hover:underline font-mono">
                    1. Abstract
                  </Link>
                  <Link href="#problem-statement" className="block text-primary hover:underline font-mono">
                    2. Problem Statement
                  </Link>
                  <Link href="#vision-mission" className="block text-primary hover:underline font-mono">
                    3. Vision & Mission
                  </Link>
                  <Link href="#use-cases" className="block text-primary hover:underline font-mono">
                    4. Use Cases
                  </Link>
                  <Link href="#architecture" className="block text-primary hover:underline font-mono">
                    5. Technical Architecture
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link href="#tokenomics" className="block text-primary hover:underline font-mono">
                    6. Tokenomics
                  </Link>
                  <Link href="#governance" className="block text-primary hover:underline font-mono">
                    7. Governance Model
                  </Link>
                  <Link href="#roadmap" className="block text-primary hover:underline font-mono">
                    8. Implementation Roadmap
                  </Link>
                  <Link href="#team" className="block text-primary hover:underline font-mono">
                    9. Team & Advisors
                  </Link>
                  <Link href="#legal" className="block text-primary hover:underline font-mono">
                    10. Legal Framework
                  </Link>
                </div>
              </ResponsiveGrid>
            </CardContent>
          </Card>

          <section id="abstract" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Abstract</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  The Tana Token represents a pioneering approach to impact funding, designed as a community-driven
                  digital currency that transforms traditional aid models into sustainable, locally-owned economic
                  systems. Built on Ethereum's robust blockchain infrastructure, Tana Token creates a transparent,
                  accountable framework for delivering measurable environmental and social outcomes in Kenya's Tana
                  River Basin.
                </p>

                <p className="text-lg leading-relaxed">
                  Our innovative approach combines blockchain technology with mobile money integration and NFC-enabled
                  accessibility, ensuring that digital financial tools reach even the most remote communities. Every
                  transaction within the Tana ecosystem directly correlates with verified impact metrics, creating an
                  immutable record of positive change while empowering local communities to own and operate their
                  development initiatives.
                </p>

                <p className="text-lg leading-relaxed">
                  Through democratic governance mechanisms and transparent fund allocation, Tana Token establishes a new
                  paradigm for impact investment—one where communities are not merely beneficiaries but active
                  stakeholders in their own transformation. This white paper outlines our technical architecture,
                  economic model, and implementation strategy for creating lasting, measurable impact through
                  blockchain-enabled community empowerment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Highlights</h2>
            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
              <Card className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">Community Ownership</CardTitle>
                  <CardDescription>
                    Local communities own and operate projects, ensuring long-term sustainability and cultural alignment
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">Transparent Impact</CardTitle>
                  <CardDescription>
                    Every transaction creates immutable records of environmental and social outcomes
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">Mobile-First Design</CardTitle>
                  <CardDescription>
                    NFC and mobile money integration ensures accessibility across all community members
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">Democratic Governance</CardTitle>
                  <CardDescription>
                    Community-driven decision making through transparent blockchain governance mechanisms
                  </CardDescription>
                </CardHeader>
              </Card>
            </ResponsiveGrid>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Explore More</h2>
            <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
              <Button
                variant="outline"
                className="h-auto p-6 flex flex-col items-start bg-transparent text-left"
                asChild
              >
                <Link href="/problem-statement">
                  <span className="font-semibold mb-2">Problem Statement</span>
                  <span className="text-sm text-muted-foreground">
                    Understanding the challenges we're addressing in the Tana River Basin
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 flex flex-col items-start bg-transparent text-left"
                asChild
              >
                <Link href="/architecture">
                  <span className="font-semibold mb-2">Technical Architecture</span>
                  <span className="text-sm text-muted-foreground">
                    Deep dive into our blockchain and mobile integration technology
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 flex flex-col items-start bg-transparent text-left"
                asChild
              >
                <Link href="/tokenomics">
                  <span className="font-semibold mb-2">Tokenomics</span>
                  <span className="text-sm text-muted-foreground">Economic model and token distribution strategy</span>
                </Link>
              </Button>
            </ResponsiveGrid>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
