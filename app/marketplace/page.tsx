"use client"

import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, TreePine, Users, Shield, MapPin, Calendar, Target, DollarSign } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Tana Delta Water Kiosk Network",
    category: "Water Access",
    location: "Tana Delta, Kenya",
    funding: 45000,
    target: 50000,
    backers: 127,
    timeLeft: "12 days",
    description: "Solar-powered water purification kiosks serving 500+ families in the Tana Delta region.",
    impact: "Clean water access for 2,500 people",
    icon: Droplets,
    status: "Active",
    ngo: "Water for Life Kenya",
  },
  {
    id: 2,
    title: "Mangrove Restoration Program",
    category: "Carbon Offsetting",
    location: "Coastal Kenya",
    funding: 28000,
    target: 35000,
    backers: 89,
    timeLeft: "8 days",
    description: "Restore 50 hectares of mangrove forests for carbon sequestration and coastal protection.",
    impact: "2,000 tons CO₂ sequestered annually",
    icon: TreePine,
    status: "Active",
    ngo: "Kenya Marine Conservation",
  },
  {
    id: 3,
    title: "Refugee Skills Training Center",
    category: "Refugee Support",
    location: "Dadaab, Kenya",
    funding: 15000,
    target: 25000,
    backers: 45,
    timeLeft: "20 days",
    description: "Vocational training center providing skills development for 200 refugees.",
    impact: "200 refugees trained in marketable skills",
    icon: Users,
    status: "Active",
    ngo: "Refugee Empowerment Initiative",
  },
  {
    id: 4,
    title: "Wildlife Corridor Protection",
    category: "Conservation",
    location: "Taita Taveta, Kenya",
    funding: 32000,
    target: 40000,
    backers: 156,
    timeLeft: "5 days",
    description: "Establish protected wildlife corridors to reduce human-wildlife conflict.",
    impact: "500 km² wildlife habitat protected",
    icon: Shield,
    status: "Urgent",
    ngo: "Wildlife Conservation Trust",
  },
]

const completedProjects = [
  {
    title: "Solar Water Pumps Installation",
    location: "Garissa County",
    funded: 30000,
    impact: "1,200 people with reliable water access",
    completion: "March 2024",
  },
  {
    title: "Tree Planting Initiative",
    location: "Tana River Basin",
    funded: 18000,
    impact: "5,000 trees planted, 150 tons CO₂ offset",
    completion: "February 2024",
  },
  {
    title: "Women's Cooperative Support",
    location: "Lamu County",
    funded: 12000,
    impact: "50 women entrepreneurs supported",
    completion: "January 2024",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Impact Marketplace</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Fund verified impact projects in Kenya's most vulnerable communities. Every TANA token represents real,
                measurable change.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">$2.1M</div>
                    <div className="text-sm text-muted-foreground">Total Funded</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">Active Projects</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">15,000</div>
                    <div className="text-sm text-muted-foreground">Lives Impacted</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">850</div>
                    <div className="text-sm text-muted-foreground">Community Backers</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Tabs defaultValue="active" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">Active Projects</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-6">
                <div className="grid gap-6">
                  {projects.map((project) => {
                    const Icon = project.icon
                    const progress = (project.funding / project.target) * 100

                    return (
                      <Card key={project.id} className="overflow-hidden">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription className="flex items-center gap-4 mt-1">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {project.location}
                                  </span>
                                  <Badge variant={project.status === "Urgent" ? "destructive" : "secondary"}>
                                    {project.status}
                                  </Badge>
                                </CardDescription>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">by {project.ngo}</div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{project.description}</p>

                          <div className="bg-muted/50 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-1">
                              <Target className="h-4 w-4" />
                              Expected Impact
                            </div>
                            <p className="text-sm">{project.impact}</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">
                                ${project.funding.toLocaleString()} / ${project.target.toLocaleString()}
                              </span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>{project.backers} backers</span>
                              <span>{project.timeLeft} left</span>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1">
                              <DollarSign className="h-4 w-4 mr-2" />
                              Fund Project
                            </Button>
                            <Button variant="outline">Learn More</Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <div className="grid gap-4">
                  {completedProjects.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Completed
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Location: </span>
                            <span>{project.location}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Funded: </span>
                            <span className="font-medium">${project.funded.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Completed: </span>
                            <span>{project.completion}</span>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">
                            Impact Achieved
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">{project.impact}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="categories" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Droplets className="h-8 w-8 text-blue-500 mb-2" />
                      <CardTitle>Water Access</CardTitle>
                      <CardDescription>Clean water infrastructure and purification systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">12 Projects</div>
                      <div className="text-sm text-muted-foreground">$450K total funding</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <TreePine className="h-8 w-8 text-green-500 mb-2" />
                      <CardTitle>Carbon Offsetting</CardTitle>
                      <CardDescription>Tree planting and ecosystem restoration projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">8 Projects</div>
                      <div className="text-sm text-muted-foreground">$320K total funding</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Users className="h-8 w-8 text-purple-500 mb-2" />
                      <CardTitle>Refugee Support</CardTitle>
                      <CardDescription>Integration and empowerment programs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">6 Projects</div>
                      <div className="text-sm text-muted-foreground">$180K total funding</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-orange-500 mb-2" />
                      <CardTitle>Wildlife Protection</CardTitle>
                      <CardDescription>Conservation and conflict resolution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">9 Projects</div>
                      <div className="text-sm text-muted-foreground">$280K total funding</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Target className="h-8 w-8 text-red-500 mb-2" />
                      <CardTitle>Poverty Alleviation</CardTitle>
                      <CardDescription>Economic empowerment and skills training</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">7 Projects</div>
                      <div className="text-sm text-muted-foreground">$210K total funding</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Calendar className="h-8 w-8 text-indigo-500 mb-2" />
                      <CardTitle>Climate Adaptation</CardTitle>
                      <CardDescription>Resilience and adaptation programs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">5 Projects</div>
                      <div className="text-sm text-muted-foreground">$150K total funding</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our community of impact investors and help transform lives in Kenya's most vulnerable communities.
                Every TANA token you invest creates measurable, verifiable change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Funding Projects</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/tokenomics">Learn About TANA</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
