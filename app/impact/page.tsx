"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import {
  Droplets,
  TreePine,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  Target,
  Award,
  Zap,
  Globe,
  Heart,
  Shield,
} from "lucide-react"
import Link from "next/link"

const impactData = {
  totalProjects: 47,
  activeProjects: 23,
  completedProjects: 24,
  totalBeneficiaries: 12847,
  waterAccess: 2847,
  treesPlanted: 15230,
  carbonOffset: 1250,
  fundsDeployed: 1680000,
  communitiesServed: 18,
}

const monthlyImpactData = [
  { month: "Jan", beneficiaries: 800, projects: 3, funding: 120000 },
  { month: "Feb", beneficiaries: 1200, projects: 5, funding: 180000 },
  { month: "Mar", beneficiaries: 950, projects: 4, funding: 150000 },
  { month: "Apr", beneficiaries: 1400, projects: 6, funding: 220000 },
  { month: "May", beneficiaries: 1100, projects: 4, funding: 170000 },
  { month: "Jun", beneficiaries: 1600, projects: 7, funding: 280000 },
  { month: "Jul", beneficiaries: 1350, projects: 5, funding: 200000 },
  { month: "Aug", beneficiaries: 1800, projects: 8, funding: 320000 },
  { month: "Sep", beneficiaries: 1250, projects: 6, funding: 190000 },
  { month: "Oct", beneficiaries: 1700, projects: 7, funding: 290000 },
  { month: "Nov", beneficiaries: 1450, projects: 6, funding: 230000 },
  { month: "Dec", beneficiaries: 1342, projects: 5, funding: 210000 },
]

const projectTypeData = [
  { name: "Water Access", value: 35, color: "#3b82f6" },
  { name: "Reforestation", value: 28, color: "#10b981" },
  { name: "Education", value: 20, color: "#f59e0b" },
  { name: "Healthcare", value: 12, color: "#ef4444" },
  { name: "Infrastructure", value: 5, color: "#8b5cf6" },
]

const sdgData = [
  { goal: "SDG 6: Clean Water", progress: 78, projects: 16 },
  { goal: "SDG 13: Climate Action", progress: 65, projects: 12 },
  { goal: "SDG 15: Life on Land", progress: 82, projects: 8 },
  { goal: "SDG 3: Good Health", progress: 45, projects: 6 },
  { goal: "SDG 4: Quality Education", progress: 58, projects: 5 },
]

const recentMilestones = [
  {
    date: "2024-03-15",
    title: "Tana Delta Water Kiosk Network Completed",
    description: "Successfully installed 12 solar-powered water kiosks serving 2,400 people",
    impact: "+2,400 people with clean water access",
    type: "Water Access",
  },
  {
    date: "2024-03-10",
    title: "Mangrove Restoration Milestone",
    description: "Planted 5,000 mangrove seedlings across 50 hectares",
    impact: "+125 tons CO₂ offset potential",
    type: "Environmental",
  },
  {
    date: "2024-03-05",
    title: "Community Health Program Launch",
    description: "Trained 25 community health workers in 5 villages",
    impact: "+1,250 people with healthcare access",
    type: "Healthcare",
  },
  {
    date: "2024-02-28",
    title: "Solar Irrigation System Operational",
    description: "Completed solar-powered irrigation for 200 smallholder farmers",
    impact: "+800 people with improved food security",
    type: "Agriculture",
  },
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12" id="main-content">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Real-Time Impact Dashboard
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Measuring Our <span className="text-primary">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Transparent, real-time tracking of our environmental and social outcomes across Kenya's Tana River Basin.
            Every metric is verified and recorded on the blockchain.
          </p>
        </div>

        {/* Key Impact Metrics */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {impactData.totalBeneficiaries.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Beneficiaries</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-500 mb-2">{impactData.waterAccess.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">People with Clean Water</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <TreePine className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-500 mb-2">{impactData.treesPlanted.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  {impactData.carbonOffset.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Tons CO₂ Offset</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Project Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Active Projects</span>
                      <span>{impactData.activeProjects}</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Completed Projects</span>
                      <span>{impactData.completedProjects}</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Geographic Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Communities Served</span>
                    <span className="font-semibold">{impactData.communitiesServed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Counties</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Coverage Area</span>
                    <span className="font-semibold">2,400 km²</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Financial Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Funds Deployed</span>
                    <span className="font-semibold">${(impactData.fundsDeployed / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cost per Beneficiary</span>
                    <span className="font-semibold">
                      ${Math.round(impactData.fundsDeployed / impactData.totalBeneficiaries)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ROI (Social)</span>
                    <span className="font-semibold text-green-600">4.2x</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Tabs defaultValue="trends" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="sdgs">SDGs</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Beneficiaries</CardTitle>
                  <CardDescription>People impacted by our projects each month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="beneficiaries" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Funding Trends</CardTitle>
                  <CardDescription>Monthly funding deployment across projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, "Funding"]} />
                      <Line type="monotone" dataKey="funding" stroke="#10b981" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Impact Growth Over Time</CardTitle>
                <CardDescription>Cumulative impact metrics showing our growing influence</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="beneficiaries" fill="#3b82f6" name="Beneficiaries" />
                    <Bar dataKey="projects" fill="#10b981" name="Projects" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Distribution by Type</CardTitle>
                  <CardDescription>Breakdown of our project portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={projectTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {projectTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Success Metrics</CardTitle>
                  <CardDescription>Key performance indicators across project types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectTypeData.map((type, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{type.name}</span>
                          <span>{type.value}% of portfolio</span>
                        </div>
                        <Progress value={type.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Success Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                  <p className="text-sm text-muted-foreground">
                    Projects completed successfully within timeline and budget
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    Avg. Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.2</div>
                  <p className="text-sm text-muted-foreground">Months average project implementation time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Community Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
                  <p className="text-sm text-muted-foreground">Average community satisfaction rating</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sdgs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UN Sustainable Development Goals Progress</CardTitle>
                <CardDescription>Our contribution to achieving the UN SDGs by 2030</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {sdgData.map((sdg, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{sdg.goal}</div>
                          <div className="text-sm text-muted-foreground">{sdg.projects} active projects</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{sdg.progress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>
                      </div>
                      <Progress value={sdg.progress} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SDG Impact Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Droplets className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Clean Water Access</div>
                        <div className="text-sm text-muted-foreground">
                          2,847 people now have reliable access to clean water
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TreePine className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Climate Action</div>
                        <div className="text-sm text-muted-foreground">
                          1,250 tons of CO₂ offset through reforestation
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Community Development</div>
                        <div className="text-sm text-muted-foreground">
                          18 communities actively participating in governance
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2030 Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Universal Water Access</span>
                        <span>28% complete</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Carbon Neutrality</span>
                        <span>15% complete</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Education Access</span>
                        <span>42% complete</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Impact Milestones</CardTitle>
                <CardDescription>Major achievements and project completions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentMilestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{milestone.title}</h3>
                            <p className="text-sm text-muted-foreground">{milestone.date}</p>
                          </div>
                          <Badge variant="outline">{milestone.type}</Badge>
                        </div>
                        <p className="text-sm mb-2">{milestone.description}</p>
                        <div className="text-sm font-medium text-green-600">{milestone.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Blockchain Verification
                  </CardTitle>
                  <CardDescription>All impact data is recorded on-chain for transparency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Transactions</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Verified Metrics</span>
                      <span className="font-semibold">3,892</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Last Verification</span>
                      <span className="font-semibold">2 hours ago</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">
                        View on Blockchain
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Third-Party Audits</CardTitle>
                  <CardDescription>Independent verification of our impact claims</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">PwC Kenya - Financial Audit (Q4 2024)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Impact Measurement Institute - Impact Verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">ConsenSys - Smart Contract Security</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/transparency">View All Reports</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Sources & Methodology</CardTitle>
                <CardDescription>How we collect and verify impact data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Community Reporting</h3>
                    <p className="text-sm text-muted-foreground">
                      Local community members report outcomes through mobile app
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Satellite Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Environmental metrics verified through satellite imagery
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Third-Party Audits</h3>
                    <p className="text-sm text-muted-foreground">
                      Independent verification by certified auditing firms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Want to Track Your Impact?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community and see how your contributions create measurable change in Kenya's Tana River Basin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">Fund a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/api">Access Impact API</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
