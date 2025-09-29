import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Droplets, TreePine, Users, ShoppingCart, Coins } from "lucide-react"
import Link from "next/link"

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Real-World Applications
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Use Cases</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Discover how Tana Token creates value through practical applications in daily life and community
                development.
              </p>
            </div>

            <div className="grid gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-blue-500" />
                    Mobile Payments & NFC Integration
                  </CardTitle>
                  <CardDescription>Seamless integration with existing mobile money infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      TANA tokens integrate with M-Pesa and other mobile money platforms, allowing users to:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Tap-to-Pay:</strong> Use NFC-enabled devices for instant transactions
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Mobile Conversion:</strong> Convert between TANA and local currency seamlessly
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Offline Capability:</strong> Process transactions without internet connectivity
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-cyan-500" />
                    Clean Water Access Program
                  </CardTitle>
                  <CardDescription>Earn tokens by contributing to water infrastructure projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Community members earn TANA tokens through water-related activities:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Earning Opportunities</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Well construction participation</li>
                          <li>• Water quality monitoring</li>
                          <li>• Infrastructure maintenance</li>
                          <li>• Community education programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Token Rewards</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• 50 TANA per day of construction work</li>
                          <li>• 10 TANA per water quality report</li>
                          <li>• 25 TANA per maintenance task</li>
                          <li>• 15 TANA per education session</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-green-500" />
                    Reforestation & Carbon Sequestration
                  </CardTitle>
                  <CardDescription>Generate income through environmental restoration activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Environmental stewardship becomes economically rewarding:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Activities</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Tree planting and nurturing</li>
                          <li>• Soil conservation projects</li>
                          <li>• Wildlife habitat restoration</li>
                          <li>• Carbon measurement and reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Token Rewards</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• 5 TANA per tree planted and verified</li>
                          <li>• 100 TANA per hectare restored</li>
                          <li>• 2 TANA per ton CO2 sequestered</li>
                          <li>• 20 TANA per biodiversity report</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    Community Governance & Decision Making
                  </CardTitle>
                  <CardDescription>Participate in democratic governance of community resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      TANA holders participate in transparent, blockchain-based governance:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Project Voting:</strong> Vote on which community projects receive funding
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Resource Allocation:</strong> Decide how community resources are distributed
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Policy Proposals:</strong> Submit and vote on community policies
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Impact Verification:</strong> Validate and approve impact measurements
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-purple-500" />
                    Local Commerce & Marketplace
                  </CardTitle>
                  <CardDescription>Support local economy through TANA-powered transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      TANA creates a thriving local economy with built-in impact incentives:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Merchant Benefits</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Lower transaction fees than traditional payment methods</li>
                          <li>• Instant settlement without banking delays</li>
                          <li>• Access to impact-conscious consumers</li>
                          <li>• Bonus tokens for sustainable business practices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Consumer Advantages</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Earn tokens through everyday purchases</li>
                          <li>• Support businesses with verified impact</li>
                          <li>• Transparent supply chain information</li>
                          <li>• Rewards for choosing sustainable options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    Microfinance & Savings
                  </CardTitle>
                  <CardDescription>Access financial services through blockchain-based lending</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      TANA enables financial inclusion through innovative DeFi mechanisms:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Collateral-Free Loans:</strong> Borrow based on community reputation and impact
                          history
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Savings Circles:</strong> Participate in rotating credit associations with smart
                          contracts
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Impact Bonds:</strong> Invest in community projects with returns tied to outcomes
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Insurance Pools:</strong> Community-funded insurance against climate risks
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/architecture">
                  Next: Technical Architecture <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/vision-mission">Back to Vision & Mission</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
