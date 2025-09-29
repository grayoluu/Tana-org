import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TableOfContents } from "@/components/table-of-contents"
import { ResponsiveGrid } from "@/components/responsive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Vote, Users, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <main className="flex-1 xl:pr-72">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Community Decision Making
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Governance</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Democratic, transparent, and community-driven governance ensuring local ownership and sustainable
                impact.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="h-5 w-5 text-primary" />
                  Governance Overview
                </CardTitle>
                <CardDescription>
                  A hybrid governance model combining blockchain technology with traditional community structures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tana Token's governance system empowers local communities to make decisions about their resources
                  while leveraging blockchain technology for transparency and accountability. The system balances
                  democratic participation with efficient decision-making.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Community DAO</h4>
                    <p className="text-sm text-muted-foreground">Local decision-making body</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold">Impact Council</h4>
                    <p className="text-sm text-muted-foreground">Technical oversight and verification</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Vote className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold">Token Holders</h4>
                    <p className="text-sm text-muted-foreground">Ecosystem-wide governance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg" className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    Community DAO Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Membership Requirements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Minimum 100 TANA tokens</li>
                        <li>• Verified community member status</li>
                        <li>• Completed impact contribution</li>
                        <li>• Local residency verification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Voting Power</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Base vote: 1 per verified member</li>
                        <li>• Token weight: 1 vote per 1000 TANA</li>
                        <li>• Impact multiplier: Up to 2x for contributions</li>
                        <li>• Maximum individual power: 5% of total</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Impact Council
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Composition</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 5 technical experts</li>
                        <li>• 3 community representatives</li>
                        <li>• 2 environmental scientists</li>
                        <li>• 2 social impact specialists</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Verify impact measurements</li>
                        <li>• Review project proposals</li>
                        <li>• Ensure technical standards</li>
                        <li>• Resolve disputes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ResponsiveGrid>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Proposal Process
                </CardTitle>
                <CardDescription>Step-by-step process for community proposals and decision-making</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Proposal Submission</h4>
                      <p className="text-sm text-muted-foreground">
                        Any community member with 50+ TANA can submit a proposal with detailed impact projections
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Technical Review (7 days)</h4>
                      <p className="text-sm text-muted-foreground">
                        Impact Council reviews feasibility, environmental impact, and technical requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Community Discussion (14 days)</h4>
                      <p className="text-sm text-muted-foreground">
                        Open forum for community feedback, questions, and proposal refinements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Voting Period (7 days)</h4>
                      <p className="text-sm text-muted-foreground">
                        Community DAO votes with 60% approval threshold and 25% participation minimum
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Implementation</h4>
                      <p className="text-sm text-muted-foreground">
                        Approved proposals receive funding and begin implementation with milestone tracking
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg" className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Governance Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Project Funding:</strong> Vote on which community projects receive TANA funding
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Resource Allocation:</strong> Decide how community resources are distributed
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Policy Changes:</strong> Modify governance rules and community guidelines
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Impact Standards:</strong> Set criteria for measuring and verifying impact
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Partnership Approval:</strong> Approve strategic partnerships and integrations
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    Safeguards & Checks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Veto Power:</strong> Impact Council can veto proposals that violate environmental
                        standards
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Quorum Requirements:</strong> Minimum participation thresholds for valid votes
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Time Delays:</strong> 48-hour delay before major changes take effect
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Emergency Pause:</strong> Multi-signature emergency stop for critical issues
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Appeal Process:</strong> Formal process for challenging governance decisions
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ResponsiveGrid>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Current Governance Metrics</CardTitle>
                <CardDescription>Live statistics from the Tana Token governance system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Voters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">23</div>
                    <div className="text-sm text-muted-foreground">Active Proposals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">89%</div>
                    <div className="text-sm text-muted-foreground">Average Participation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">156</div>
                    <div className="text-sm text-muted-foreground">Implemented Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/roadmap">
                  Next: Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/tokenomics">Back to Tokenomics</Link>
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
