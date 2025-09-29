"use client"

import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Activity, DollarSign, Users, Droplets, TreePine, Target } from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for charts
const priceData = [
  { date: "Jan", price: 0.95, volume: 45000 },
  { date: "Feb", price: 1.02, volume: 52000 },
  { date: "Mar", price: 1.15, volume: 68000 },
  { date: "Apr", price: 1.08, volume: 71000 },
  { date: "May", price: 1.22, volume: 89000 },
  { date: "Jun", price: 1.18, volume: 95000 },
  { date: "Jul", price: 1.35, volume: 112000 },
  { date: "Aug", price: 1.28, volume: 108000 },
  { date: "Sep", price: 1.42, volume: 125000 },
]

const impactData = [
  { month: "Jan", water: 1200, trees: 850, beneficiaries: 2400 },
  { month: "Feb", water: 1800, trees: 1200, beneficiaries: 3600 },
  { month: "Mar", water: 2400, trees: 1650, beneficiaries: 4800 },
  { month: "Apr", water: 3200, trees: 2100, beneficiaries: 6400 },
  { month: "May", water: 4100, trees: 2800, beneficiaries: 8200 },
  { month: "Jun", water: 5200, trees: 3600, beneficiaries: 10400 },
  { month: "Jul", water: 6800, trees: 4500, beneficiaries: 13600 },
  { month: "Aug", water: 8100, trees: 5400, beneficiaries: 16200 },
  { month: "Sep", water: 9600, trees: 6300, beneficiaries: 19200 },
]

const tokenDistribution = [
  { name: "Community Airdrops", value: 25, color: "#3b82f6" },
  { name: "Merchant Incentives", value: 20, color: "#10b981" },
  { name: "Reserve Pool", value: 20, color: "#f59e0b" },
  { name: "Investor Allocation", value: 20, color: "#ef4444" },
  { name: "Team & Advisors", value: 10, color: "#8b5cf6" },
  { name: "DAO Treasury", value: 5, color: "#06b6d4" },
]

const projectFunding = [
  { category: "Water Access", funded: 450000, projects: 12 },
  { category: "Carbon Offsetting", funded: 320000, projects: 8 },
  { category: "Wildlife Protection", funded: 280000, projects: 9 },
  { category: "Poverty Alleviation", funded: 210000, projects: 7 },
  { category: "Refugee Support", funded: 180000, projects: 6 },
  { category: "Climate Adaptation", funded: 150000, projects: 5 },
]

export default function ChartsPage() {
  const currentPrice = 1.42
  const priceChange = 0.14
  const priceChangePercent = 10.9

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">TANA Analytics Dashboard</h1>
              <p className="text-xl text-muted-foreground">
                Real-time data and insights into TANA token performance and impact metrics.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">TANA Price</p>
                      <p className="text-2xl font-bold">${currentPrice}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">+{priceChangePercent}%</span>
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
                      <p className="text-sm text-muted-foreground">Total Holders</p>
                      <p className="text-2xl font-bold">2,847</p>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">+12.3%</span>
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
                      <p className="text-sm text-muted-foreground">Lives Impacted</p>
                      <p className="text-2xl font-bold">19,200</p>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">+18.5%</span>
                      </div>
                    </div>
                    <Target className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Impact</p>
                      <p className="text-2xl font-bold">$2.1M</p>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">+25.7%</span>
                      </div>
                    </div>
                    <Activity className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="price" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="price">Price & Volume</TabsTrigger>
                <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
                <TabsTrigger value="distribution">Token Distribution</TabsTrigger>
                <TabsTrigger value="projects">Project Funding</TabsTrigger>
              </TabsList>

              <TabsContent value="price" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>TANA Price History</CardTitle>
                      <CardDescription>Token price over the last 9 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={priceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`$${value}`, "Price"]} />
                          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Trading Volume</CardTitle>
                      <CardDescription>Monthly trading volume in TANA tokens</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={priceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip formatter={(value) => [value.toLocaleString(), "Volume"]} />
                          <Bar dataKey="volume" fill="#10b981" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="impact" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Impact Growth</CardTitle>
                      <CardDescription>Cumulative impact metrics over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={impactData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="beneficiaries"
                            stackId="1"
                            stroke="#3b82f6"
                            fill="#3b82f6"
                            name="Beneficiaries"
                          />
                          <Area
                            type="monotone"
                            dataKey="water"
                            stackId="2"
                            stroke="#10b981"
                            fill="#10b981"
                            name="Water (Liters)"
                          />
                          <Area
                            type="monotone"
                            dataKey="trees"
                            stackId="3"
                            stroke="#f59e0b"
                            fill="#f59e0b"
                            name="Trees Planted"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Impact Breakdown</CardTitle>
                      <CardDescription>Detailed impact metrics by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={impactData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="water" fill="#3b82f6" name="Water Access" />
                          <Bar dataKey="trees" fill="#10b981" name="Trees Planted" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Impact Summary Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">9.6M</div>
                      <div className="text-sm text-muted-foreground">Liters of Clean Water</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <TreePine className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">6,300</div>
                      <div className="text-sm text-muted-foreground">Trees Planted</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">19,200</div>
                      <div className="text-sm text-muted-foreground">Lives Impacted</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="distribution" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Token Allocation</CardTitle>
                      <CardDescription>Distribution of 1 billion TANA tokens</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={tokenDistribution}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {tokenDistribution.map((entry, index) => (
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
                      <CardTitle>Allocation Details</CardTitle>
                      <CardDescription>Breakdown of token distribution</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tokenDistribution.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{item.value}%</div>
                            <div className="text-xs text-muted-foreground">
                              {(item.value * 10).toLocaleString()}M TANA
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Funding by Category</CardTitle>
                    <CardDescription>Total funding and project count by impact category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={projectFunding} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="category" type="category" width={120} />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Funding"]} />
                        <Bar dataKey="funded" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectFunding.map((category, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="text-lg font-semibold mb-2">{category.category}</div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Total Funding:</span>
                            <span className="font-medium">${category.funded.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Active Projects:</span>
                            <span className="font-medium">{category.projects}</span>
                          </div>
                          <div className="flex justify-between text-sm">
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
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
