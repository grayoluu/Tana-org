"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Droplets,
  MapPin,
  Calendar,
  Target,
  DollarSign,
  CheckCircle,
  Clock,
  Share2,
  Heart,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

// This would typically come from an API or database
const projectData = {
  "water-kiosk-tana-delta": {
    id: "water-kiosk-tana-delta",
    title: "Tana Delta Water Kiosk Network",
    category: "Water Access",
    location: "Tana Delta, Kenya",
    coordinates: "-2.3833, 40.1167",
    funding: 45000,
    target: 50000,
    backers: 127,
    timeLeft: "12 days",
    description:
      "Solar-powered water purification kiosks serving 500+ families in the Tana Delta region with clean, affordable water access.",
    fullDescription: `The Tana Delta Water Kiosk Network is a transformative infrastructure project designed to provide reliable, clean water access to one of Kenya's most water-stressed regions. This comprehensive initiative will establish a network of 8 solar-powered water purification kiosks strategically located across the Tana Delta to serve over 500 families.

Each kiosk features advanced water purification technology powered entirely by solar energy, making them sustainable and cost-effective to operate. The kiosks will be community-owned and operated, ensuring long-term sustainability and local economic benefits.

The project addresses the critical water scarcity challenges faced by communities in the Tana Delta, where access to clean water has been limited due to infrastructure gaps and environmental challenges. By providing affordable, reliable water access, this project will significantly improve health outcomes, reduce waterborne diseases, and free up time for community members to engage in productive activities.`,
    impact: "Clean water access for 2,500 people",
    detailedImpact: {
      primary: "2,500 people with reliable clean water access",
      secondary: [
        "500 families served directly",
        "8 water kiosks established",
        "50% reduction in waterborne diseases",
        "2 hours daily time savings per family",
        "12 local jobs created for kiosk operation",
      ],
    },
    icon: Droplets,
    status: "Active",
    organization: {
      name: "Water for Life Kenya",
      logo: "/placeholder.svg?height=60&width=60&text=WLK",
      description: "A leading NGO focused on sustainable water solutions across Kenya",
      website: "https://waterforlifekenya.org",
      established: "2015",
      projectsCompleted: 47,
    },
    images: [
      "/placeholder.svg?height=400&width=600&text=Water+Kiosk+Main",
      "/placeholder.svg?height=400&width=600&text=Community+Meeting",
      "/placeholder.svg?height=400&width=600&text=Solar+Installation",
      "/placeholder.svg?height=400&width=600&text=Water+Testing",
    ],
    featured: true,
    urgency: "medium",
    sdgs: ["Clean Water and Sanitation", "Good Health and Well-being"],
    startDate: "2024-01-15",
    expectedCompletion: "2024-06-30",
    timeline: [
      { phase: "Community Consultation", status: "completed", date: "Jan 2024" },
      { phase: "Site Preparation", status: "completed", date: "Feb 2024" },
      { phase: "Kiosk Installation", status: "in-progress", date: "Mar-Apr 2024" },
      { phase: "Community Training", status: "upcoming", date: "May 2024" },
      { phase: "Full Operation", status: "upcoming", date: "Jun 2024" },
    ],
    budget: {
      infrastructure: 30000,
      equipment: 12000,
      training: 5000,
      monitoring: 3000,
    },
    updates: [
      {
        date: "2024-03-15",
        title: "First 3 Kiosks Successfully Installed",
        content:
          "We're excited to announce that the first three water kiosks have been successfully installed and are now operational. The community response has been overwhelmingly positive, with over 150 families already registered for regular water access.",
        author: "Sarah Kimani",
        role: "Project Manager",
      },
      {
        date: "2024-03-01",
        title: "Solar Panel Installation Complete",
        content:
          "All solar panel installations have been completed across the designated sites. The renewable energy systems are performing above expectations, generating 15% more power than initially projected.",
        author: "David Mwangi",
        role: "Technical Lead",
      },
      {
        date: "2024-02-15",
        title: "Community Training Program Launched",
        content:
          "We've launched our comprehensive community training program, focusing on kiosk operation, maintenance, and water quality testing. 24 community members have been trained as kiosk operators.",
        author: "Grace Wanjiku",
        role: "Community Coordinator",
      },
    ],
    supporters: [
      { name: "John Doe", amount: 500, message: "Great initiative for clean water access!" },
      { name: "Sarah M.", amount: 250, message: "Supporting sustainable development in Kenya" },
      { name: "Mike K.", amount: 1000, message: "Water is life - proud to support this project" },
      { name: "Anonymous", amount: 750, message: "Keep up the excellent work!" },
    ],
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </main>
      </div>
    )
  }

  const Icon = project.icon
  const progress = (project.funding / project.target) * 100

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <Badge
                variant={project.status === "Urgent" ? "destructive" : "secondary"}
                className="absolute top-4 right-4"
              >
                {project.status}
              </Badge>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" className="flex-1 min-w-fit">
                <DollarSign className="mr-2 h-5 w-5" />
                Fund This Project
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Funding Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Project Funding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-lg font-semibold mb-2">
                    <span>${project.funding.toLocaleString()}</span>
                    <span className="text-muted-foreground">of ${project.target.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-3 mb-2" />
                  <div className="text-sm text-muted-foreground">{Math.round(progress)}% funded</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{project.backers}</div>
                    <div className="text-sm text-muted-foreground">Backers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{project.timeLeft}</div>
                    <div className="text-sm text-muted-foreground">Remaining</div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                    <Target className="h-4 w-4" />
                    Expected Impact
                  </div>
                  <p className="text-sm">{project.impact}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Expected completion: {new Date(project.expectedCompletion).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Fund This Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Details Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-foreground">
                  {project.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.slice(1).map((image, index) => (
                      <Image
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`Project image ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(project.budget).map(([category, amount]) => (
                      <div key={category} className="flex justify-between">
                        <span className="capitalize">{category.replace(/([A-Z])/g, " $1")}</span>
                        <span className="font-medium">${amount.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t pt-3 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${project.target.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Expected Impact</CardTitle>
                <CardDescription>Measurable outcomes this project will deliver</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Primary Impact</h4>
                    <p className="text-lg">{project.detailedImpact.primary}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Additional Benefits</h4>
                    <ul className="space-y-2">
                      {project.detailedImpact.secondary.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>UN Sustainable Development Goals</CardTitle>
                <CardDescription>This project contributes to the following SDGs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.sdgs.map((sdg) => (
                    <Badge key={sdg} variant="outline" className="px-3 py-1">
                      {sdg}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>Key milestones and project phases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-4 h-4 rounded-full mt-1 ${
                          phase.status === "completed"
                            ? "bg-green-500"
                            : phase.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-gray-300"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <Badge
                            variant={
                              phase.status === "completed"
                                ? "default"
                                : phase.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {phase.status.replace("-", " ")}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{phase.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="updates" className="space-y-6">
            <div className="space-y-6">
              {project.updates.map((update, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{update.title}</CardTitle>
                        <CardDescription>
                          {new Date(update.date).toLocaleDateString()} • by {update.author}, {update.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">{update.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={project.organization.logo || "/placeholder.svg"}
                      alt={project.organization.name}
                    />
                    <AvatarFallback>
                      {project.organization.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{project.organization.name}</CardTitle>
                    <CardDescription>{project.organization.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Established:</span>
                      <span className="ml-2 font-medium">{project.organization.established}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Projects Completed:</span>
                      <span className="ml-2 font-medium">{project.organization.projectsCompleted}</span>
                    </div>
                    <Button variant="outline" asChild>
                      <a href={project.organization.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Recent Supporters</h4>
                    <div className="space-y-3">
                      {project.supporters.slice(0, 3).map((supporter, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{supporter.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{supporter.name}</span>
                              <span className="text-sm text-primary">${supporter.amount}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{supporter.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
