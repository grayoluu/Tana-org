import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  ExternalLink,
  Download,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

const financialData = {
  totalFunds: 2100000,
  fundsDeployed: 1680000,
  fundsReserved: 420000,
  projectsFunded: 47,
  activeProjects: 23,
  completedProjects: 24,
  averageProjectSize: 35000,
  adminCosts: 105000, // 5% of total funds
}

const recentTransactions = [
  {
    id: "tx_001",
    date: "2024-03-15",
    type: "Project Funding",
    project: "Tana Delta Water Kiosk Network",
    amount: 15000,
    status: "Completed",
    txHash: "0x1234...5678",
  },
  {
    id: "tx_002",
    date: "2024-03-14",
    type: "Impact Verification",
    project: "Mangrove Restoration Program",
    amount: 2500,
    status: "Completed",
    txHash: "0x2345...6789",
  },
  {
    id: "tx_003",
    date: "2024-03-13",
    type: "Community Reward",
    project: "Wildlife Corridor Protection",
    amount: 5000,
    status: "Completed",
    txHash: "0x3456...7890",
  },
  {
    id: "tx_004",
    date: "2024-03-12",
    type: "Project Funding",
    project: "Solar Irrigation System",
    amount: 8000,
    status: "Pending",
    txHash: "0x4567...8901",
  },
]

const governanceProposals = [
  {
    id: "prop_001",
    title: "Increase Water Project Funding Allocation",
    description: "Proposal to allocate 40% of funds specifically to water access projects",
    status: "Active",
    votesFor: 1247,
    votesAgainst: 234,
    totalVotes: 1481,
    endDate: "2024-03-25",
    proposer: "Community Water Coalition",
  },
  {
    id: "prop_002",
    title: "Establish Environmental Impact Standards",
    description: "Create mandatory environmental impact assessment for all projects",
    status: "Passed",
    votesFor: 1856,
    votesAgainst: 145,
    totalVotes: 2001,
    endDate: "2024-03-10",
    proposer: "Green Kenya Initiative",
  },
  {
    id: "prop_003",
    title: "Community Validator Program",
    description: "Launch program for community members to validate project outcomes",
    status: "Under Review",
    votesFor: 0,
    votesAgainst: 0,
    totalVotes: 0,
    endDate: "2024-04-01",
    proposer: "Tana Community Council",
  },
]

const auditReports = [
  {
    title: "Q4 2024 Financial Audit",
    date: "2024-01-15",
    auditor: "PwC Kenya",
    status: "Clean Opinion",
    downloadUrl: "#",
  },
  {
    title: "Impact Verification Report",
    date: "2024-01-10",
    auditor: "Impact Measurement Institute",
    status: "Verified",
    downloadUrl: "#",
  },
  {
    title: "Smart Contract Security Audit",
    date: "2023-12-20",
    auditor: "ConsenSys Diligence",
    status: "No Critical Issues",
    downloadUrl: "#",
  },
]

export default function TransparencyPage() {
  const deploymentRate = (financialData.fundsDeployed / financialData.totalFunds) * 100

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Transparency & Accountability
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Open by Design</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Complete transparency in our operations, funding, and impact measurement. Every transaction, decision, and
            outcome is publicly verifiable on the blockchain.
          </p>
        </div>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Financial Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">${(financialData.totalFunds / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-muted-foreground">Total Funds Raised</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">${(financialData.fundsDeployed / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-muted-foreground">Funds Deployed</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{financialData.projectsFunded}</div>
                <div className="text-sm text-muted-foreground">Projects Funded</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">5%</div>
                <div className="text-sm text-muted-foreground">Admin Costs</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Fund Deployment Progress</CardTitle>
              <CardDescription>
                ${financialData.fundsDeployed.toLocaleString()} deployed of ${financialData.totalFunds.toLocaleString()}{" "}
                total funds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={deploymentRate} className="h-3 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{Math.round(deploymentRate)}% deployed</span>
                <span>${financialData.fundsReserved.toLocaleString()} reserved for future projects</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <Tabs defaultValue="transactions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
            <TabsTrigger value="audits">Audits</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Blockchain Transactions</CardTitle>
                <CardDescription>All fund movements are recorded on the Ethereum blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{tx.type}</div>
                          <div className="text-sm text-muted-foreground">{tx.project}</div>
                          <div className="text-xs text-muted-foreground">{tx.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${tx.amount.toLocaleString()}</div>
                        <div className="flex items-center gap-2">
                          <Badge variant={tx.status === "Completed" ? "default" : "secondary"}>{tx.status}</Badge>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={`https://etherscan.io/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <a href="https://etherscan.io/address/0x..." target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View All Transactions on Etherscan
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Governance Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Token Holders</span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Voters</span>
                      <span className="font-semibold">1,923</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Participation Rate</span>
                      <span className="font-semibold">67.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Proposals This Quarter</span>
                      <span className="font-semibold">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How Governance Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        1
                      </div>
                      <span>Community members submit proposals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        2
                      </div>
                      <span>7-day discussion period for feedback</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        3
                      </div>
                      <span>Token holders vote (1 token = 1 vote)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        4
                      </div>
                      <span>Proposals need 51% majority to pass</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Active Proposals</h3>
              {governanceProposals.map((proposal) => (
                <Card key={proposal.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{proposal.title}</CardTitle>
                        <CardDescription>Proposed by {proposal.proposer}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          proposal.status === "Active"
                            ? "default"
                            : proposal.status === "Passed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {proposal.status === "Active" && <Clock className="mr-1 h-3 w-3" />}
                        {proposal.status === "Passed" && <CheckCircle className="mr-1 h-3 w-3" />}
                        {proposal.status === "Under Review" && <AlertCircle className="mr-1 h-3 w-3" />}
                        {proposal.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{proposal.description}</p>

                    {proposal.status !== "Under Review" && (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Voting Results</span>
                          <span>Ends: {proposal.endDate}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-green-600">For: {proposal.votesFor.toLocaleString()}</span>
                            <span className="text-red-600">Against: {proposal.votesAgainst.toLocaleString()}</span>
                          </div>
                          <Progress
                            value={proposal.totalVotes > 0 ? (proposal.votesFor / proposal.totalVotes) * 100 : 0}
                            className="h-2"
                          />
                          <div className="text-xs text-muted-foreground">
                            {proposal.totalVotes.toLocaleString()} total votes
                          </div>
                        </div>
                      </div>
                    )}

                    {proposal.status === "Active" && (
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline" className="text-green-600 border-green-600 bg-transparent">
                          Vote For
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 bg-transparent">
                          Vote Against
                        </Button>
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audits" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Independent Audits</CardTitle>
                <CardDescription>
                  Regular third-party audits ensure financial integrity and smart contract security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditReports.map((audit, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{audit.title}</div>
                          <div className="text-sm text-muted-foreground">by {audit.auditor}</div>
                          <div className="text-xs text-muted-foreground">{audit.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          {audit.status}
                        </Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={audit.downloadUrl}>
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Measures</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Multi-signature wallet protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Smart contract audits by ConsenSys</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Time-locked governance changes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Regular penetration testing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Kenya Financial Reporting Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">International NGO Accountability Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">UN Global Compact Principles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">GDPR Data Protection Compliance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Annual Report 2024</CardTitle>
                  <CardDescription>Comprehensive yearly impact and financial report</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: January 2024</div>
                    <div>Pages: 48</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Q4 Impact Report</CardTitle>
                  <CardDescription>Quarterly environmental and social impact metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: January 2024</div>
                    <div>Pages: 24</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>Community Feedback</CardTitle>
                  <CardDescription>Insights and feedback from community stakeholders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: December 2023</div>
                    <div>Pages: 16</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle>Financial Statements</CardTitle>
                  <CardDescription>Audited financial statements and fund allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: February 2024</div>
                    <div>Pages: 32</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>Governance Report</CardTitle>
                  <CardDescription>Community governance activities and voting results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: January 2024</div>
                    <div>Pages: 20</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Compliance Report</CardTitle>
                  <CardDescription>Regulatory compliance and certification status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>Published: March 2024</div>
                    <div>Pages: 12</div>
                    <div>Format: PDF</div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Operations?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We believe in complete transparency. If you have questions about our finances, governance, or impact
            measurement, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/governance">Join Governance</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
