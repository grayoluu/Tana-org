import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers, Shield, Zap, Database, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Technical Implementation
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Technical Architecture</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A robust, scalable blockchain infrastructure designed for real-world impact and accessibility.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  System Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tana Token's architecture combines Ethereum's security with innovative layer-2 solutions and
                  real-world integration points to create a seamless user experience.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Blockchain Layer</h4>
                    <p className="text-sm text-muted-foreground">Ethereum mainnet for security</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                    <h4 className="font-semibold">Scaling Layer</h4>
                    <p className="text-sm text-muted-foreground">Polygon for fast transactions</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold">Access Layer</h4>
                    <p className="text-sm text-muted-foreground">Mobile & NFC integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Smart Contract Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>TANA Token Contract:</strong> ERC-20 compliant with additional governance features
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Impact Verification:</strong> Oracle-based system for validating real-world outcomes
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Governance DAO:</strong> Decentralized decision-making for community projects
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Staking Rewards:</strong> Automated distribution based on impact contributions
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-purple-500" />
                    Data Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>IPFS Storage:</strong> Decentralized storage for impact documentation and media
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>The Graph Protocol:</strong> Efficient querying of blockchain data
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Ceramic Network:</strong> Decentralized identity and reputation management
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Chainlink Oracles:</strong> Real-world data integration for impact verification
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-500" />
                    Mobile Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>NFC Technology:</strong> Tap-to-pay functionality for instant transactions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>USSD Integration:</strong> Basic phone compatibility for feature phones
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>M-Pesa Bridge:</strong> Seamless conversion between TANA and mobile money
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Offline Capability:</strong> Transaction queuing for areas with poor connectivity
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-orange-500" />
                    Scalability Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Polygon Network:</strong> Layer-2 scaling for high-frequency transactions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>State Channels:</strong> Instant micropayments for small transactions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Optimistic Rollups:</strong> Future-ready scaling for mass adoption
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Cross-chain Bridges:</strong> Interoperability with other blockchain networks
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>Enterprise-grade security measures and regulatory compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Security Measures</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Multi-signature wallet requirements for large transactions</li>
                      <li>• Time-locked smart contracts for governance changes</li>
                      <li>• Regular security audits by leading blockchain security firms</li>
                      <li>• Bug bounty program for continuous security testing</li>
                      <li>• Hardware security modules for key management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Compliance Framework</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• KYC/AML compliance for large transactions</li>
                      <li>• GDPR compliance for user data protection</li>
                      <li>• Local regulatory compliance in Kenya</li>
                      <li>• Environmental impact reporting standards</li>
                      <li>• Financial transparency and audit trails</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance Specifications</CardTitle>
                <CardDescription>Technical performance metrics and capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                    <div className="text-sm text-muted-foreground">Transactions per second</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$0.001</div>
                    <div className="text-sm text-muted-foreground">Average transaction cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">2 seconds</div>
                    <div className="text-sm text-muted-foreground">Transaction finality</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/tokenomics">
                  Next: Tokenomics <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/use-cases">Back to Use Cases</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
