import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, CheckCircle, Clock, AlertCircle, Rocket } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Development Timeline
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Implementation Roadmap</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A comprehensive timeline for bringing Tana Token from concept to full ecosystem deployment.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phase 1 - Completed */}
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Phase 1: Foundation (Q1-Q2 2024)
                    </CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>Core infrastructure development and initial community building</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technical Milestones</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Smart contract development and testing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Security audits by CertiK and ConsenSys</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Ethereum mainnet deployment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Basic mobile wallet integration</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Community Milestones</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Partnership with 5 local NGOs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Initial community of 500 members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>First pilot water project completed</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Impact measurement framework established</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 - In Progress */}
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      Phase 2: Expansion (Q3-Q4 2024)
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription>Scaling infrastructure and expanding community reach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technical Development</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Polygon Layer-2 integration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>NFC tap-to-pay system deployment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>M-Pesa integration and testing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Advanced mobile app with offline capability</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Community Growth</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Expand to 10 communities in Tana River Basin</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>Launch governance DAO with 2,000+ members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>Complete 25 water infrastructure projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Plant 100,000 trees with verified tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Current Progress:</strong> 65% complete. NFC integration testing underway with 3 pilot
                      communities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 3 - Upcoming */}
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      Phase 3: Ecosystem (Q1-Q2 2025)
                    </CardTitle>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Planned
                    </Badge>
                  </div>
                  <CardDescription>Full ecosystem deployment and advanced features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Advanced Features</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>DeFi lending and savings protocols</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Carbon credit marketplace integration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Cross-chain bridge to other networks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>AI-powered impact prediction models</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Scale Targets</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>50,000+ active community members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>500+ local businesses accepting TANA</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>1 million trees planted and tracked</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          <span>Clean water access for 100,000+ people</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 4 - Future */}
              <Card className="border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-purple-500" />
                      Phase 4: Global Impact (Q3 2025+)
                    </CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Future
                    </Badge>
                  </div>
                  <CardDescription>Replication model and global expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Global Expansion</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Expand to other river basins in East Africa</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Open-source toolkit for replication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>International partnerships and funding</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Multi-language support and localization</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Innovation Goals</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Satellite-based impact verification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>IoT sensor network for real-time monitoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Machine learning for predictive impact modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-purple-500" />
                          <span>Integration with global carbon markets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
                <CardDescription>Measurable targets for each phase of development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500 mb-1">500</div>
                    <div className="text-sm text-muted-foreground">Phase 1 Members</div>
                    <div className="text-xs text-green-500">✓ Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-1">2,000</div>
                    <div className="text-sm text-muted-foreground">Phase 2 Target</div>
                    <div className="text-xs text-blue-500">65% Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">50,000</div>
                    <div className="text-sm text-muted-foreground">Phase 3 Target</div>
                    <div className="text-xs text-orange-500">Planned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500 mb-1">500,000</div>
                    <div className="text-sm text-muted-foreground">Phase 4 Vision</div>
                    <div className="text-xs text-purple-500">Future</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/team">
                  Next: Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/governance">Back to Governance</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
