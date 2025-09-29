import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Globe, Coins } from "lucide-react"
import Link from "next/link"

export default function AbstractPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Executive Summary
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Abstract</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Tana Token (TANA) represents a groundbreaking approach to impact funding through blockchain technology.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tana Token (TANA) is a pioneering digital currency engineered to transform impact funding into a
                    living, circulating economy rooted in Kenya's Tana River Basin. By integrating blockchain technology
                    with NFC tap-to-pay and mobile money systems, TANA creates a seamless bridge between digital
                    innovation and tangible social and environmental outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Regional Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The Tana River Basin, spanning 95,000 square kilometers across Kenya, faces critical challenges
                    including water scarcity, deforestation, and poverty. TANA addresses these interconnected issues
                    through a comprehensive ecosystem that rewards positive environmental and social actions with
                    tangible economic value.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5" />
                    Innovation Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unlike traditional impact funding models that rely on one-time donations, TANA creates a
                    self-sustaining economic ecosystem. Every transaction correlates with measurable outcomes: clean
                    water delivered, trees planted, carbon sequestered, and poverty reduced. This creates a direct link
                    between economic activity and positive impact.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Blockchain Foundation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Built on Ethereum's proven infrastructure with ERC-20 standards for maximum compatibility and
                      security.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Local Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration with existing mobile money systems and NFC technology for widespread
                      adoption.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Measurable Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Every transaction creates verifiable environmental and social outcomes tracked on the blockchain.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/problem-statement">
                    Next: Problem Statement <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tokenomics">View Tokenomics</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
