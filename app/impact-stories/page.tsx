"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, TreePine, Users, Heart, MapPin, Calendar, Quote, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const impactStories = [
  {
    id: "amina-water-entrepreneur",
    title: "From Water Scarcity to Water Entrepreneur",
    category: "Water Access",
    location: "Tana Delta, Kenya",
    protagonist: "Amina Hassan",
    role: "Community Water Kiosk Operator",
    avatar: "/placeholder.svg?height=80&width=80&text=AH",
    projectId: "water-kiosk-tana-delta",
    projectTitle: "Tana Delta Water Kiosk Network",
    summary:
      "How solar-powered water kiosks transformed Amina's life from daily water struggles to becoming a successful water entrepreneur serving her entire community.",
    story: `Before the TANA-funded water kiosks arrived in our village, I would wake up at 4 AM every day to walk 8 kilometers to the nearest water source. The water wasn't even clean, and my children often fell sick from waterborne diseases.

Now, I operate one of the solar-powered water kiosks in our community. Not only do I have access to clean water just 200 meters from my home, but I've also become a water entrepreneur. I earn 15,000 KES ($100) per month managing the kiosk, which has completely changed my family's economic situation.

The kiosk serves over 150 families daily, providing clean, affordable water at just 2 KES per 20 liters. I've been trained in water quality testing, basic maintenance, and business management. My children now attend school regularly instead of helping me fetch water, and my youngest daughter dreams of becoming an engineer.

The ripple effects go beyond just water access. Women in our community now have time for income-generating activities. We've started a savings group with the time we've gained, and three women have already started small businesses with microloans.`,
    impact: {
      direct: "150 families served daily with clean water",
      economic: "15,000 KES monthly income generated",
      social: "Children's school attendance increased by 85%",
      health: "Waterborne diseases reduced by 70% in the community",
    },
    quote:
      "The water kiosk didn't just bring clean water to our village – it brought hope, opportunity, and a future for our children.",
    images: [
      "/placeholder.svg?height=400&width=600&text=Amina+at+Water+Kiosk",
      "/placeholder.svg?height=400&width=600&text=Community+Water+Collection",
      "/placeholder.svg?height=400&width=600&text=Children+at+School",
    ],
    videoUrl: "/placeholder-video.mp4",
    date: "March 2024",
    featured: true,
  },
  {
    id: "joseph-mangrove-guardian",
    title: "The Mangrove Guardian's Mission",
    category: "Environmental",
    location: "Lamu County, Kenya",
    protagonist: "Joseph Mwalimu",
    role: "Community Mangrove Restoration Leader",
    avatar: "/placeholder.svg?height=80&width=80&text=JM",
    projectId: "mangrove-restoration",
    projectTitle: "Mangrove Restoration Program",
    summary:
      "Joseph leads his fishing community in restoring 50 hectares of mangrove forests, creating sustainable livelihoods while protecting their coastal home.",
    story: `I've been a fisherman for 30 years, and I've watched our mangrove forests disappear. The fish became scarce, storms hit our village harder, and our traditional way of life was threatened.

When the TANA-funded mangrove restoration project started, I was skeptical. But the training opened my eyes to how mangroves protect our coastline and support marine life. I became a community leader for the restoration effort.

We've planted over 25,000 mangrove seedlings across 50 hectares. The work is hard – we wade through mud, plant seedlings by hand, and monitor their growth monthly. But seeing the young mangroves take root gives me hope.

The project employs 40 community members, paying us fair wages for restoration work. We've learned sustainable harvesting techniques, eco-tourism guiding, and beekeeping in the mangrove areas. My son, who was planning to leave for the city, now wants to study marine conservation.

The fish are already returning. Last month, we caught more fish than we had in the previous six months combined. The mangroves are not just growing back – they're bringing life back to our waters.`,
    impact: {
      direct: "25,000 mangrove seedlings planted across 50 hectares",
      economic: "40 community members employed in restoration work",
      environmental: "500 tons CO₂ sequestered annually when mature",
      social: "Traditional fishing practices revitalized and sustained",
    },
    quote:
      "We're not just planting trees – we're planting hope for future generations and healing our relationship with the ocean.",
    images: [
      "/placeholder.svg?height=400&width=600&text=Joseph+Planting+Mangroves",
      "/placeholder.svg?height=400&width=600&text=Mangrove+Nursery",
      "/placeholder.svg?height=400&width=600&text=Restored+Coastline",
    ],
    date: "February 2024",
    featured: true,
  },
  {
    id: "fatuma-refugee-entrepreneur",
    title: "From Refugee to Digital Entrepreneur",
    category: "Education",
    location: "Dadaab, Kenya",
    protagonist: "Fatuma Ali",
    role: "Digital Skills Graduate & Entrepreneur",
    avatar: "/placeholder.svg?height=80&width=80&text=FA",
    projectId: "refugee-skills-training",
    projectTitle: "Refugee Skills Training Center",
    summary:
      "Fatuma transformed her life through digital skills training, launching an online business that now supports her family and employs other refugees.",
    story: `I arrived at Dadaab refugee camp seven years ago with my three children, fleeing conflict in Somalia. For years, I felt trapped – unable to work legally, dependent on aid, watching my children grow up without hope for the future.

The TANA-funded skills training center changed everything. I enrolled in the digital literacy program, learning computer basics, online marketing, and e-commerce. At first, it was overwhelming – I had never used a computer before.

But the instructors were patient, and the program was designed for people like me. I learned to create websites, manage social media, and run online businesses. After six months of training, I started a small online business selling traditional Somali crafts and clothing.

My business now generates $300 per month, enough to support my family and even employ two other refugee women. We create beautiful handmade items and sell them to customers across Kenya and internationally through social media and e-commerce platforms.

My eldest daughter, inspired by my transformation, is now studying computer science. She helps me with the technical aspects of the business and dreams of starting her own tech company. We're no longer just surviving – we're building a future.`,
    impact: {
      direct: "Digital skills training completed by 200 refugees",
      economic: "$300 monthly income from online business",
      social: "2 additional refugee women employed",
      educational: "Children inspired to pursue higher education",
    },
    quote:
      "The training didn't just teach me computer skills – it taught me that I have the power to change my circumstances and create opportunities.",
    images: [
      "/placeholder.svg?height=400&width=600&text=Fatuma+at+Computer",
      "/placeholder.svg?height=400&width=600&text=Training+Center+Class",
      "/placeholder.svg?height=400&width=600&text=Handmade+Crafts",
    ],
    date: "January 2024",
    featured: false,
  },
  {
    id: "samuel-wildlife-protector",
    title: "Protecting Wildlife, Protecting Livelihoods",
    category: "Conservation",
    location: "Taita Taveta, Kenya",
    protagonist: "Samuel Mwangi",
    role: "Community Wildlife Conservancy Ranger",
    avatar: "/placeholder.svg?height=80&width=80&text=SM",
    projectId: "wildlife-corridor",
    projectTitle: "Wildlife Corridor Protection",
    summary:
      "Samuel leads community efforts to protect wildlife corridors, reducing human-wildlife conflict while creating sustainable conservation livelihoods.",
    story: `Elephants used to destroy our crops every season. Lions would attack our livestock. The conflict between wildlife and our farming community was getting worse each year, and many of us wanted the animals gone completely.

The TANA-funded wildlife corridor project offered a different solution. Instead of seeing wildlife as enemies, we learned to see them as partners in conservation. I was trained as a community ranger and now help manage 500 km² of protected wildlife habitat.

We've built wildlife-friendly fences, created water points away from farms, and established early warning systems for animal movements. I patrol the corridors daily, monitoring wildlife and helping resolve conflicts peacefully.

The project employs 25 community members as rangers, guides, and conservationists. We earn steady incomes from conservation work and eco-tourism. Last year, our conservancy hosted over 500 tourists, generating income for the entire community.

My children now see elephants and lions as symbols of pride, not problems. My daughter wants to become a wildlife veterinarian. The animals that once threatened our livelihoods now support them.`,
    impact: {
      direct: "500 km² wildlife habitat protected",
      economic: "25 community members employed in conservation",
      social: "Human-wildlife conflict reduced by 80%",
      tourism: "500+ eco-tourists hosted annually",
    },
    quote:
      "We learned that protecting wildlife means protecting our future – both the animals and our community can thrive together.",
    images: [
      "/placeholder.svg?height=400&width=600&text=Samuel+on+Patrol",
      "/placeholder.svg?height=400&width=600&text=Wildlife+Corridor",
      "/placeholder.svg?height=400&width=600&text=Community+Meeting",
    ],
    date: "December 2023",
    featured: false,
  },
]

const categories = [
  { name: "All Stories", value: "all", icon: Heart },
  { name: "Water Access", value: "Water Access", icon: Droplets },
  { name: "Environmental", value: "Environmental", icon: TreePine },
  { name: "Education", value: "Education", icon: Users },
  { name: "Conservation", value: "Conservation", icon: Users },
]

export default function ImpactStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Impact Stories
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">[ REAL_STORIES ]</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Meet the people whose lives have been transformed by TANA-funded projects. These are their stories of
            resilience, innovation, and community impact.
          </p>

          {/* Impact Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">47</div>
                <div className="text-sm text-muted-foreground">Stories Documented</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Counties Reached</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">$2.1M</div>
                <div className="text-sm text-muted-foreground">Impact Generated</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category Filter */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger key={category.value} value={category.value} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="space-y-8">
              {/* Featured Stories */}
              {category.value === "all" && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-8">[ FEATURED_STORIES ]</h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {impactStories
                      .filter((story) => story.featured)
                      .map((story) => (
                        <Card key={story.id} className="overflow-hidden group hover:shadow-lg transition-all">
                          <div className="relative">
                            <Image
                              src={story.images[0] || "/placeholder.svg"}
                              alt={story.title}
                              width={600}
                              height={300}
                              className="w-full h-64 object-cover"
                            />
                            <Badge variant="secondary" className="absolute top-4 left-4">
                              {story.category}
                            </Badge>
                            {story.videoUrl && (
                              <Button size="sm" variant="secondary" className="absolute top-4 right-4">
                                <Play className="h-4 w-4 mr-1" />
                                Video
                              </Button>
                            )}
                          </div>

                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={story.avatar || "/placeholder.svg"} alt={story.protagonist} />
                                <AvatarFallback>
                                  {story.protagonist
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold">{story.protagonist}</h3>
                                <p className="text-sm text-muted-foreground">{story.role}</p>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3" />
                                  {story.location}
                                </div>
                              </div>
                            </div>

                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {story.title}
                            </h4>

                            <p className="text-muted-foreground mb-4 line-clamp-3">{story.summary}</p>

                            <div className="bg-muted/50 p-4 rounded-lg mb-4">
                              <Quote className="h-5 w-5 text-primary mb-2" />
                              <p className="text-sm italic">"{story.quote}"</p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {story.date}
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/impact-stories/${story.id}`}>Read Full Story</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </section>
              )}

              {/* All Stories Grid */}
              <section>
                <h2 className="text-3xl font-bold mb-8">
                  {category.value === "all" ? "[ ALL_STORIES ]" : `[ ${category.name.toUpperCase()}_STORIES ]`}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {impactStories
                    .filter((story) => category.value === "all" || story.category === category.value)
                    .map((story) => (
                      <Card key={story.id} className="overflow-hidden group hover:shadow-md transition-all">
                        <div className="relative">
                          <Image
                            src={story.images[0] || "/placeholder.svg"}
                            alt={story.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                          <Badge variant="outline" className="absolute top-3 right-3 bg-background/80">
                            {story.category}
                          </Badge>
                        </div>

                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={story.avatar || "/placeholder.svg"} alt={story.protagonist} />
                              <AvatarFallback className="text-xs">
                                {story.protagonist
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{story.protagonist}</p>
                              <p className="text-xs text-muted-foreground">{story.location}</p>
                            </div>
                          </div>

                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {story.title}
                          </h4>

                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{story.summary}</p>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{story.date}</span>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/impact-stories/${story.id}`}>Read More</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </section>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">[ SHARE_YOUR_STORY ]</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have you been impacted by a TANA-funded project? We'd love to hear your story and share it with our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Submit Your Story</Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">Explore Active Projects</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
