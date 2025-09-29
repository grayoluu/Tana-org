import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Target, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Our Purpose
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Vision & Mission</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transforming impact funding through blockchain innovation and community empowerment.
              </p>
            </div>

            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a world where every economic transaction contributes to environmental restoration and
                  community prosperity, establishing the Tana River Basin as a global model for blockchain-powered
                  sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize impact funding by creating a self-sustaining digital economy that directly correlates
                  financial transactions with measurable environmental and social outcomes, empowering local communities
                  through transparent, blockchain-based governance and economic participation.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Transparency:</strong> Every transaction and impact is recorded immutably on the
                        blockchain
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Community Ownership:</strong> Local communities control their economic destiny
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Sustainability:</strong> Long-term environmental and economic health over short-term
                        gains
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Innovation:</strong> Leveraging cutting-edge technology for social good
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    Strategic Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Water Security:</strong> Provide clean water access to 2M+ people by 2030
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Reforestation:</strong> Plant 10M+ trees and restore 50,000 hectares
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Economic Empowerment:</strong> Lift 500,000+ people above poverty line
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Carbon Impact:</strong> Sequester 5M+ tons of CO2 equivalent
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Theory of Change</CardTitle>
                <CardDescription>How Tana Token creates sustainable impact through economic incentives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <strong>Economic Incentives:</strong> TANA tokens reward positive environmental and social actions
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <strong>Behavioral Change:</strong> Communities adopt sustainable practices to earn tokens
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <strong>Measurable Impact:</strong> Environmental and social outcomes are tracked and verified
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <strong>Self-Sustaining Cycle:</strong> Success attracts more investment and participation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/use-cases">
                  Next: Use Cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/problem-statement">Back to Problem Statement</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
