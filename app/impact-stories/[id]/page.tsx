"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, MapPin, Calendar, Quote, ExternalLink, Play, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

// This would typically come from an API or database
const storyData = {
  "amina-water-entrepreneur": {
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
}

export default function ImpactStoryDetailPage() {
  const params = useParams()
  const storyId = params.id as string
  const story = storyData[storyId as keyof typeof storyData]

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Story Not Found</h1>
          <p className="text-muted-foreground mb-8">The story you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/impact-stories">Back to Impact Stories</Link>
          </Button>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/impact-stories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Impact Stories
            </Link>
          </Button>
        </div>

        {/* Story Header */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Image
              src={story.images[0] || "/placeholder.svg"}
              alt={story.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <Badge variant="secondary" className="absolute top-4 left-4">
              {story.category}
            </Badge>
            {story.videoUrl && (
              <Button size="sm" variant="secondary" className="absolute top-4 right-4">
                <Play className="h-4 w-4 mr-1" />
                Watch Video
              </Button>
            )}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={story.avatar || "/placeholder.svg"} alt={story.protagonist} />
              <AvatarFallback>
                {story.protagonist
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-medium">{story.protagonist}</span>
                <span>•</span>
                <span>{story.role}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {story.date}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="outline" asChild>
              <Link href={`/projects/${story.projectId}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Related Project
              </Link>
            </Button>
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Save Story
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Main Story */}
            <Card>
              <CardHeader>
                <CardTitle>[ STORY ]</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-foreground">
                  {story.story.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quote */}
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-foreground">"{story.quote}"</blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  — {story.protagonist}, {story.role}
                </cite>
              </CardContent>
            </Card>

            {/* Additional Images */}
            <Card>
              <CardHeader>
                <CardTitle>[ GALLERY ]</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {story.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Story image ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Impact Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>[ IMPACT_METRICS ]</CardTitle>
                <CardDescription>Measurable outcomes from this story</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Direct Impact</h4>
                  <p className="text-sm">{story.impact.direct}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Economic Impact</h4>
                  <p className="text-sm">{story.impact.economic}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Social Impact</h4>
                  <p className="text-sm">{story.impact.social}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Health Impact</h4>
                  <p className="text-sm">{story.impact.health}</p>
                </div>
              </CardContent>
            </Card>

            {/* Related Project */}
            <Card>
              <CardHeader>
                <CardTitle>[ RELATED_PROJECT ]</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">{story.projectTitle}</h4>
                <p className="text-sm text-muted-foreground mb-4">{story.summary}</p>
                <Button size="sm" asChild>
                  <Link href={`/projects/${story.projectId}`}>View Project Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>[ SHARE_STORY ]</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Help spread awareness about this impact story</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline">
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline">
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
