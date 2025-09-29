import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TableOfContents } from "@/components/table-of-contents"
import { ResponsiveGrid } from "@/components/responsive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PieChart, TrendingUp, Users, Lock, Coins, Target } from "lucide-react"
import Link from "next/link"

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex flex-1">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 lg:pr-80">
          <div className="max-w-5xl mx-auto py-12">
            <div className="mb-12">
              <Badge variant="secondary" className="mb-4">
                Economic Model
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Tokenomics</h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
                A sustainable economic model designed to incentivize positive impact and community participation.
              </p>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    Token Fundamentals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-mono">Token Name</span>
                      <span className="font-semibold font-mono">Tana Token</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-mono">Symbol</span>
                      <span className="font-semibold font-mono">TANA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-mono">Standard</span>
                      <span className="font-semibold font-mono">ERC-20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-mono">Total Supply</span>
                      <span className="font-semibold font-mono">1,000,000,000 TANA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-mono">Decimals</span>
                      <span className="font-semibold font-mono">18</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-blue-500" />
                    Token Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">Community Rewards</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-blue-500 rounded"></div>
                        <span className="text-sm font-semibold font-mono">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">Impact Fund</span>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-2 bg-green-500 rounded"></div>
                        <span className="text-sm font-semibold font-mono">30%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">Team & Advisors</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-2 bg-orange-500 rounded"></div>
                        <span className="text-sm font-semibold font-mono">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">Treasury</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-2 bg-purple-500 rounded"></div>
                        <span className="text-sm font-semibold font-mono">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ResponsiveGrid>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Detailed Allocation Breakdown
                </CardTitle>
                <CardDescription>
                  How tokens are distributed to maximize community impact and sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
                  <div>
                    <h4 className="font-semibold mb-4 text-blue-500 font-mono">Community Rewards (400M TANA)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Environmental actions: 200M TANA</li>
                      <li>• Social impact activities: 100M TANA</li>
                      <li>• Governance participation: 50M TANA</li>
                      <li>• Early adopter incentives: 50M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-green-500 font-mono">Impact Fund (300M TANA)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Water infrastructure projects: 150M TANA</li>
                      <li>• Reforestation initiatives: 100M TANA</li>
                      <li>• Education and healthcare: 50M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-orange-500 font-mono">Team & Advisors (200M TANA)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Core development team: 120M TANA</li>
                      <li>• Strategic advisors: 50M TANA</li>
                      <li>• Community leaders: 30M TANA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-purple-500 font-mono">Treasury (100M TANA)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Emergency reserves: 50M TANA</li>
                      <li>• Future development: 30M TANA</li>
                      <li>• Partnership incentives: 20M TANA</li>
                    </ul>
                  </div>
                </ResponsiveGrid>
              </CardContent>
            </Card>

            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-red-500" />
                    Vesting Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium font-mono">Community Rewards</span>
                        <span className="text-sm text-green-500 font-mono">No Vesting</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium font-mono">Impact Fund</span>
                        <span className="text-sm text-blue-500 font-mono">Project-based Release</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium font-mono">Team & Advisors</span>
                        <span className="text-sm text-orange-500 font-mono">4-year Linear</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium font-mono">Treasury</span>
                        <span className="text-sm text-purple-500 font-mono">DAO Controlled</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Value Accrual Mechanisms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="font-mono">Impact Staking:</strong> Earn rewards by locking tokens for
                        verified impact projects
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="font-mono">Governance Rights:</strong> Vote on project funding and community
                        decisions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="font-mono">Transaction Fees:</strong> Reduced fees for TANA holders in the
                        ecosystem
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="font-mono">Buyback Program:</strong> Portion of ecosystem revenue used to buy
                        back tokens
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ResponsiveGrid>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Earning Opportunities
                </CardTitle>
                <CardDescription>
                  Multiple ways for community members to earn TANA tokens through positive impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
                  <div>
                    <h4 className="font-semibold mb-4 font-mono">Environmental Actions</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Tree planting: 5 TANA per tree</li>
                      <li>• Water conservation: 10 TANA per project</li>
                      <li>• Waste cleanup: 2 TANA per kg</li>
                      <li>• Solar installation: 100 TANA per kW</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 font-mono">Social Impact</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Education sessions: 15 TANA per hour</li>
                      <li>• Healthcare support: 25 TANA per day</li>
                      <li>• Community organizing: 50 TANA per event</li>
                      <li>• Skills training: 20 TANA per session</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 font-mono">Economic Participation</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                      <li>• Local commerce: 1% cashback in TANA</li>
                      <li>• Governance voting: 5 TANA per vote</li>
                      <li>• Impact verification: 10 TANA per report</li>
                      <li>• Referral program: 25 TANA per signup</li>
                    </ul>
                  </div>
                </ResponsiveGrid>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-12">
              <Button asChild>
                <Link href="/governance">
                  Next: Governance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/architecture">Back to Architecture</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>

      <Footer />
    </div>
  )
}
