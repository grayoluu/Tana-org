import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Leadership & Expertise
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Team & Advisors</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A diverse team of blockchain experts, environmental scientists, and community leaders driving
                sustainable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      AK
                    </div>
                    <div>
                      <CardTitle>Dr. Amina Kone</CardTitle>
                      <CardDescription>Founder & CEO</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Environmental economist with 15+ years experience in sustainable development across East Africa.
                    Former World Bank consultant specializing in climate finance and community-based natural resource
                    management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">PhD Environmental Economics</Badge>
                    <Badge variant="outline">World Bank</Badge>
                    <Badge variant="outline">Climate Finance</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      JM
                    </div>
                    <div>
                      <CardTitle>James Mwangi</CardTitle>
                      <CardDescription>CTO & Co-founder</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Blockchain architect with deep expertise in Ethereum development and DeFi protocols. Previously led
                    technical teams at ConsenSys and built scalable blockchain solutions for emerging markets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Blockchain Architecture</Badge>
                    <Badge variant="outline">ConsenSys</Badge>
                    <Badge variant="outline">DeFi</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      SM
                    </div>
                    <div>
                      <CardTitle>Sarah Mutua</CardTitle>
                      <CardDescription>Head of Community Relations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Community organizer and social entrepreneur with extensive experience in grassroots mobilization
                    across rural Kenya. Founded three successful community-based organizations focused on water access
                    and women's empowerment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Community Organizing</Badge>
                    <Badge variant="outline">Social Enterprise</Badge>
                    <Badge variant="outline">Women's Empowerment</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      DL
                    </div>
                    <div>
                      <CardTitle>Dr. David Limo</CardTitle>
                      <CardDescription>Head of Impact Measurement</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Environmental scientist specializing in remote sensing and GIS applications for environmental
                    monitoring. Published researcher in carbon sequestration measurement and biodiversity conservation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Environmental Science</Badge>
                    <Badge variant="outline">Remote Sensing</Badge>
                    <Badge variant="outline">Carbon Measurement</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      RO
                    </div>
                    <div>
                      <CardTitle>Rachel Ochieng</CardTitle>
                      <CardDescription>Head of Partnerships</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Former program manager at USAID with expertise in public-private partnerships and international
                    development. Specialized in mobile money integration and financial inclusion initiatives across
                    Sub-Saharan Africa.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">USAID</Badge>
                    <Badge variant="outline">Mobile Money</Badge>
                    <Badge variant="outline">Financial Inclusion</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      MK
                    </div>
                    <div>
                      <CardTitle>Michael Kiprotich</CardTitle>
                      <CardDescription>Lead Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Full-stack developer with expertise in React, Node.js, and smart contract development. Previously
                    worked on mobile payment solutions for M-Pesa and has deep understanding of East African fintech
                    landscape.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Full-stack Development</Badge>
                    <Badge variant="outline">Smart Contracts</Badge>
                    <Badge variant="outline">M-Pesa Integration</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Advisory Board
                </CardTitle>
                <CardDescription>
                  Strategic advisors providing guidance on technology, policy, and impact measurement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Prof. Catherine Ngila</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Director, Africa Centre of Excellence in Water and Environmental Research, University of Nairobi
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Water Research
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Environmental Policy
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dr. Bitange Ndemo</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Former Permanent Secretary, Ministry of ICT, Kenya; Blockchain expert and policy advisor
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        ICT Policy
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Blockchain
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maria Santos</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Former Head of Impact Investing, IFC; Expert in sustainable finance and ESG metrics
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Impact Investing
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ESG
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Joseph Lubin</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Co-founder of Ethereum, Founder of ConsenSys; Blockchain technology and ecosystem development
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Ethereum
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ConsenSys
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    Team Diversity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Gender Balance</span>
                      <span className="text-sm font-semibold">50% Women</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Local Representation</span>
                      <span className="text-sm font-semibold">80% Kenyan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Average Experience</span>
                      <span className="text-sm font-semibold">12+ Years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Countries Represented</span>
                      <span className="text-sm font-semibold">8 Countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Languages Spoken</span>
                      <span className="text-sm font-semibold">12 Languages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Time Zones</span>
                      <span className="text-sm font-semibold">5 Zones</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    Expertise Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Blockchain Development</span>
                      <span className="text-sm font-semibold">4 Experts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Environmental Science</span>
                      <span className="text-sm font-semibold">3 Experts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Community Development</span>
                      <span className="text-sm font-semibold">5 Experts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>We're always looking for passionate individuals to join our mission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tana Token is growing rapidly and we're seeking talented individuals who share our vision of
                  blockchain-powered sustainable development. We offer competitive compensation, equity participation,
                  and the opportunity to make a meaningful impact on communities across East Africa.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Current Openings</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Senior Smart Contract Developer</li>
                      <li>• Mobile App Developer (React Native)</li>
                      <li>• Community Engagement Coordinator</li>
                      <li>• Impact Measurement Specialist</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What We Offer</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Competitive salary + equity</li>
                      <li>• Remote-first culture</li>
                      <li>• Professional development budget</li>
                      <li>• Direct impact on communities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/legal">
                  Next: Legal & Compliance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/roadmap">Back to Roadmap</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
