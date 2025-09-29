"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, TreePine, Users, Shield, MapPin, Target, DollarSign, Search, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: "water-kiosk-tana-delta",
    title: "Tana Delta Water Kiosk Network",
    category: "Water Access",
    location: "Tana Delta, Kenya",
    funding: 45000,
    target: 50000,
    backers: 127,
    timeLeft: "12 days",
    description:
      "Solar-powered water purification kiosks serving 500+ families in the Tana Delta region with clean, affordable water access.",
    impact: "Clean water access for 2,500 people",
    icon: Droplets,
    status: "Active",
    organization: "Water for Life Kenya",
    image: "/placeholder.svg?height=300&width=500&text=Water+Kiosk+Network",
    featured: true,
    urgency: "medium",
    sdgs: ["Clean Water", "Good Health"],
    startDate: "2024-01-15",
    expectedCompletion: "2024-06-30",
  },
  {
    id: "mangrove-restoration",
    title: "Mangrove Restoration Program",
    category: "Environmental",
    location: "Coastal Kenya",
    funding: 28000,
    target: 35000,
    backers: 89,
    timeLeft: "8 days",
    description:
      "Restore 50 hectares of mangrove forests for carbon sequestration and coastal protection while providing sustainable livelihoods.",
    impact: "2,000 tons CO₂ sequestered annually",
    icon: TreePine,
    status: "Active",
    organization: "Kenya Marine Conservation",
    image: "/placeholder.svg?height=300&width=500&text=Mangrove+Restoration",
    featured: true,
    urgency: "high",
    sdgs: ["Climate Action", "Life Below Water"],
    startDate: "2024-02-01",
    expectedCompletion: "2024-12-31",
  },
  {
    id: "refugee-skills-training",
    title: "Refugee Skills Training Center",
    category: "Education",
    location: "Dadaab, Kenya",
    funding: 15000,
    target: 25000,
    backers: 45,
    timeLeft: "20 days",
    description:
      "Vocational training center providing marketable skills development for 200 refugees, focusing on digital literacy and entrepreneurship.",
    impact: "200 refugees trained in marketable skills",
    icon: Users,
    status: "Active",
    organization: "Refugee Empowerment Initiative",
    image: "/placeholder.svg?height=300&width=500&text=Skills+Training+Center",
    featured: false,
    urgency: "medium",
    sdgs: ["Quality Education", "Decent Work"],
    startDate: "2024-03-01",
    expectedCompletion: "2024-09-30",
  },
  {
    id: "wildlife-corridor",
    title: "Wildlife Corridor Protection",
    category: "Conservation",
    location: "Taita Taveta, Kenya",
    funding: 32000,
    target: 40000,
    backers: 156,
    timeLeft: "5 days",
    description:
      "Establish protected wildlife corridors to reduce human-wildlife conflict while supporting community-based conservation initiatives.",
    impact: "500 km² wildlife habitat protected",
    icon: Shield,
    status: "Urgent",
    organization: "Wildlife Conservation Trust",
    image: "/placeholder.svg?height=300&width=500&text=Wildlife+Corridor",
    featured: true,
    urgency: "high",
    sdgs: ["Life on Land", "Sustainable Communities"],
    startDate: "2024-01-01",
    expectedCompletion: "2024-08-31",
  },
  {
    id: "solar-irrigation",
    title: "Solar-Powered Irrigation System",
    category: "Agriculture",
    location: "Garissa County, Kenya",
    funding: 22000,
    target: 30000,
    backers: 78,
    timeLeft: "15 days",
    description: "Install solar-powered irrigation systems to support 150 smallholder farmers in drought-prone areas.",
    impact: "150 farming families with reliable irrigation",
    icon: Target,
    status: "Active",
    organization: "Sustainable Agriculture Kenya",
    image: "/placeholder.svg?height=300&width=500&text=Solar+Irrigation",
    featured: false,
    urgency: "medium",
    sdgs: ["Zero Hunger", "Clean Energy"],
    startDate: "2024-02-15",
    expectedCompletion: "2024-07-31",
  },
  {
    id: "womens-cooperative",
    title: "Women's Beekeeping Cooperative",
    category: "Economic Empowerment",
    location: "Lamu County, Kenya",
    funding: 18000,
    target: 20000,
    backers: 92,
    timeLeft: "3 days",
    description:
      "Support 60 women in establishing sustainable beekeeping enterprises for honey production and pollination services.",
    impact: "60 women entrepreneurs with sustainable income",
    icon: Users,
    status: "Nearly Funded",
    organization: "Women's Economic Empowerment Network",
    image: "/placeholder.svg?height=300&width=500&text=Beekeeping+Cooperative",
    featured: false,
    urgency: "low",
    sdgs: ["Gender Equality", "Decent Work"],
    startDate: "2024-03-15",
    expectedCompletion: "2024-10-31",
  },
]

const completedProjects = [
  {
    id: "solar-water-pumps",
    title: "Solar Water Pumps Installation",
    location: "Garissa County",
    funded: 30000,
    impact: "1,200 people with reliable water access",
    completion: "March 2024",
    organization: "Clean Water Initiative",
    image: "/placeholder.svg?height=200&width=400&text=Solar+Water+Pumps",
  },
  {
    id: "tree-planting-initiative",
    title: "Tree Planting Initiative",
    location: "Tana River Basin",
    funded: 18000,
    impact: "5,000 trees planted, 150 tons CO₂ offset",
    completion: "February 2024",
    organization: "Green Kenya Foundation",
    image: "/placeholder.svg?height=200&width=400&text=Tree+Planting",
  },
  {
    id: "womens-cooperative-support",
    title: "Women's Cooperative Support",
    location: "Lamu County",
    funded: 12000,
    impact: "50 women entrepreneurs supported",
    completion: "January 2024",
    organization: "Women's Empowerment Network",
    image: "/placeholder.svg?height=200&width=400&text=Women+Cooperative",
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesStatus = statusFilter === "all" || project.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Project Platform
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Transforming Communities</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Discover and support verified impact projects across Kenya's Tana River Basin. Every project delivers
            measurable outcomes for communities and the environment.
          </p>

          {/* Impact Stats */}
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

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => {
              const Icon = project.icon
              const progress = (project.funding / project.target) * 100

              return (
                <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <Badge
                      variant={project.status === "Urgent" ? "destructive" : "secondary"}
                      className="absolute top-4 right-4"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

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

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/projects/${project.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        <DollarSign className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* All Projects with Filters */}
        <section>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Water Access">Water Access</SelectItem>
                  <SelectItem value="Environmental">Environmental</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Conservation">Conservation</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Economic Empowerment">Economic Empowerment</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Urgent">Urgent</SelectItem>
                  <SelectItem value="Nearly Funded">Nearly Funded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">Active Projects ({filteredProjects.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed Projects ({completedProjects.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              <div className="grid gap-6">
                {filteredProjects.map((project) => {
                  const Icon = project.icon
                  const progress = (project.funding / project.target) * 100

                  return (
                    <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>

                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {project.location}
                                  </span>
                                  <span>by {project.organization}</span>
                                </div>
                              </div>
                            </div>
                            <Badge variant={project.status === "Urgent" ? "destructive" : "secondary"}>
                              {project.status}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {project.timeLeft} left
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button asChild>
                              <Link href={`/projects/${project.id}`}>View Project Details</Link>
                            </Button>
                            <Button variant="outline">
                              <DollarSign className="h-4 w-4 mr-2" />
                              Fund Project
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span>{project.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Funded:</span>
                          <span className="font-medium">${project.funded.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Completed:</span>
                          <span>{project.completion}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
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
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Start Your Own Project</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have an impact project in the Tana River Basin? Join our platform and connect with community funders who
            believe in measurable change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Submit Project Proposal</Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Learn About Our Process</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
