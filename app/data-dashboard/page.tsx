"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Activity,
  DollarSign,
  Users,
  Droplets,
  TreePine,
  Target,
  MapPin,
  BarChart3,
  LineChart,
  Download,
} from "lucide-react"
import {
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"

// Enhanced data for comprehensive dashboard
const fundingOverTime = [
  { month: "Jan 2023", totalFunded: 150000, projects: 3, beneficiaries: 1200 },
  { month: "Feb 2023", totalFunded: 280000, projects: 5, beneficiaries: 2400 },
  { month: "Mar 2023", totalFunded: 420000, projects: 8, beneficiaries: 3800 },
  { month: "Apr 2023", totalFunded: 580000, projects: 12, beneficiaries: 5200 },
  { month: "May 2023", totalFunded: 750000, projects: 15, beneficiaries: 6800 },
  { month: "Jun 2023", totalFunded: 920000, projects: 19, beneficiaries: 8400 },
  { month: "Jul 2023", totalFunded: 1100000, projects: 23, beneficiaries: 10200 },
  { month: "Aug 2023", totalFunded: 1300000, projects: 28, beneficiaries: 12000 },
  { month: "Sep 2023", totalFunded: 1520000, projects: 32, beneficiaries: 13800 },
  { month: "Oct 2023", totalFunded: 1750000, projects: 37, beneficiaries: 15600 },
  { month: "Nov 2023", totalFunded: 1980000, projects: 42, beneficiaries: 17400 },
  { month: "Dec 2023", totalFunded: 2100000, projects: 47, beneficiaries: 19200 },
]

const categoryBreakdown = [
  { category: "Water Access", funded: 650000, projects: 12, beneficiaries: 7200, color: "#3b82f6" },
  { category: "Environmental", funded: 480000, projects: 8, beneficiaries: 4800, color: "#10b981" },
  { category: "Education", funded: 320000, projects: 9, beneficiaries: 3600, color: "#f59e0b" },
  { category: "Conservation", funded: 280000, projects: 7, beneficiaries: 2100, color: "#ef4444" },
  { category: "Agriculture", funded: 220000, projects: 6, beneficiaries: 1200, color: "#8b5cf6" },
  { category: "Economic Empowerment", funded: 150000, projects: 5, beneficiaries: 300, color: "#06b6d4" },
]

const geographicDistribution = [
  { county: "Tana River", projects: 15, funded: 750000, population: 315943 },
  { county: "Lamu", projects: 8, funded: 420000, population: 143920 },
  { county: "Garissa", projects: 7, funded: 380000, population: 841353 },
  { county: "Taita Taveta", projects: 6, funded: 320000, population: 340671 },
  { county: "Kilifi", projects: 5, funded: 150000, population: 1453787 },
  { county: "Kwale", projects: 4, funded: 80000, population: 866820 },
  { county: "Mombasa", projects: 2, funded: 50000, population: 1208333 },
]

const impactMetrics = [
  {
    metric: "Clean Water Access",
    value: 9600,
    unit: "people",
    trend: "+18.5%",
    icon: Droplets,
    color: "text-blue-500",
  },
  { metric: "Trees Planted", value: 15230, unit: "trees", trend: "+25.7%", icon: TreePine, color: "text-green-500" },
  { metric: "Jobs Created", value: 847, unit: "jobs", trend: "+12.3%", icon: Users, color: "text-purple-500" },
  {
    metric: "CO₂ Sequestered",
    value: 2847,
    unit: "tons/year",
    trend: "+31.2%",
    icon: Target,
    color: "text-orange-500",
  },
]

const projectStatus = [
  { status: "Active", count: 28, percentage: 59.6, color: "#10b981" },
  { status: "Completed", count: 15, percentage: 31.9, color: "#3b82f6" },
  { status: "Planning", count: 4, percentage: 8.5, color: "#f59e0b" },
]

const monthlyImpact = [
  { month: "Jan", water: 800, trees: 1200, jobs: 45, carbon: 180 },
  { month: "Feb", water: 1200, trees: 1800, jobs: 67, carbon: 270 },
  { month: "Mar", water: 1600, trees: 2400, jobs: 89, carbon: 360 },
  { month: "Apr", water: 2200, trees: 3200, jobs: 123, carbon: 480 },
  { month: "May", water: 2800, trees: 4100, jobs: 156, carbon: 620 },
  { month: "Jun", water: 3600, trees: 5200, jobs: 198, carbon: 780 },
  { month: "Jul", water: 4500, trees: 6800, jobs: 245, carbon: 980 },
  { month: "Aug", water: 5400, trees: 8100, jobs: 289, carbon: 1180 },
  { month: "Sep", water: 6300, trees: 9600, jobs: 334, carbon: 1380 },
  { month: "Oct", water: 7200, trees: 11200, jobs: 378, carbon: 1580 },
  { month: "Nov", water: 8100, trees: 12800, jobs: 423, carbon: 1780 },
  { month: "Dec", water: 9600, trees: 15230, jobs: 467, carbon: 1980 },
]

export default function DataDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            Data Dashboard
          </Badge>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">[ PROJECT_DATA ]</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive analytics and insights from TANA-funded projects across Kenya.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button>
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Funded</p>
                  <p className="text-2xl font-bold">$2.1M</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">+23.5%</span>
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold">47</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">+15.2%</span>
                  </div>
                </div>
                <Activity className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lives Impacted</p>
                  <p className="text-2xl font-bold">19,200</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">+18.7%</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Counties Reached</p>
                  <p className="text-2xl font-bold">7</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">+16.7%</span>
                  </div>
                </div>
                <MapPin className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                    <Badge variant="outline" className="text-green-600">
                      {metric.trend}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">{metric.value.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.metric} ({metric.unit})
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="geographic">Geographic</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Growth Over Time</CardTitle>
                  <CardDescription>Total funding deployed and projects launched</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={fundingOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip
                        formatter={(value, name) => [
                          name === "totalFunded" ? `$${value.toLocaleString()}` : value,
                          name === "totalFunded" ? "Total Funded" : name === "projects" ? "Projects" : "Beneficiaries",
                        ]}
                      />
                      <Legend />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="totalFunded"
                        fill="#3b82f6"
                        stroke="#3b82f6"
                        name="Total Funded"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="projects"
                        stroke="#10b981"
                        strokeWidth={3}
                        name="Projects"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Status Distribution</CardTitle>
                  <CardDescription>Current status of all funded projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={projectStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ status, percentage }) => `${status}: ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                      >
                        {projectStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Impact Trends</CardTitle>
                <CardDescription>Key impact metrics tracked over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="water" stroke="#3b82f6" name="Water Access (People)" />
                    <Line type="monotone" dataKey="trees" stroke="#10b981" name="Trees Planted" />
                    <Line type="monotone" dataKey="jobs" stroke="#f59e0b" name="Jobs Created" />
                    <Line type="monotone" dataKey="carbon" stroke="#ef4444" name="CO₂ Sequestered (Tons)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding by Category</CardTitle>
                  <CardDescription>Total funding allocation across project categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Funding"]} />
                      <Bar dataKey="funded" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Performance</CardTitle>
                  <CardDescription>Projects and beneficiaries by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categoryBreakdown.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.category}</span>
                        <span className="text-sm text-muted-foreground">${category.funded.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Projects: {category.projects}</div>
                        <div>Beneficiaries: {category.beneficiaries.toLocaleString()}</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            backgroundColor: category.color,
                            width: `${(category.funded / 650000) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <Icon className={`h-8 w-8 ${metric.color} mx-auto mb-2`} />
                      <div className="text-2xl font-bold">{metric.value.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                      <Badge variant="outline" className="text-green-600">
                        {metric.trend}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cumulative Impact Over Time</CardTitle>
                <CardDescription>Growth in key impact metrics since program launch</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={monthlyImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="water"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      name="Water Access"
                    />
                    <Area
                      type="monotone"
                      dataKey="trees"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      name="Trees Planted"
                    />
                    <Area
                      type="monotone"
                      dataKey="jobs"
                      stackId="3"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      name="Jobs Created"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Project funding and reach across Kenyan counties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicDistribution.map((county, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{county.county} County</h4>
                          <Badge variant="outline">{county.projects} projects</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>Funding: ${county.funded.toLocaleString()}</div>
                          <div>Population: {county.population.toLocaleString()}</div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(county.funded / 750000) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Category Funding Distribution</CardTitle>
                  <CardDescription>Percentage of total funding by project category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={categoryBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, funded }) => `${category}: $${(funded / 1000).toFixed(0)}K`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="funded"
                      >
                        {categoryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Funding"]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projects by Category</CardTitle>
                  <CardDescription>Number of active projects in each category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryBreakdown} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="category" type="category" width={120} />
                      <Tooltip />
                      <Bar dataKey="projects" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryBreakdown.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{category.category}</h4>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Funding:</span>
                        <span className="font-medium">${category.funded.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Projects:</span>
                        <span className="font-medium">{category.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Beneficiaries:</span>
                        <span className="font-medium">{category.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg per Project:</span>
                        <span className="font-medium">
                          ${Math.round(category.funded / category.projects).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
