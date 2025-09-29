import { Header } from "@/components/header"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, AlertTriangle, Droplets, TreePine, Users } from "lucide-react"
import Link from "next/link"

export default function ProblemStatementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-80 lg:shrink-0">{/* Sidebar space */}</div>

        <main className="flex-1 lg:pl-8 lg:pr-80">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8">
              <Badge variant="destructive" className="mb-4">
                Critical Challenges
              </Badge>
              <h1 className="text-4xl font-bold mb-6 text-balance">Problem Statement</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                The Tana River Basin faces interconnected environmental and socioeconomic challenges that require
                innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    Water Scarcity Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Over 2 million people lack access to clean water</li>
                    <li>• Seasonal droughts affect 70% of the region annually</li>
                    <li>• Water-related diseases impact 40% of children under 5</li>
                    <li>• Agricultural productivity reduced by 60% in dry seasons</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-green-500" />
                    Deforestation Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 15,000 hectares of forest lost annually</li>
                    <li>• Soil erosion affects 80% of agricultural land</li>
                    <li>• Carbon emissions increased by 25% over 10 years</li>
                    <li>• Biodiversity loss threatens 200+ species</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    Socioeconomic Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 65% of population lives below poverty line</li>
                    <li>• Youth unemployment rate exceeds 75%</li>
                    <li>• Limited access to financial services</li>
                    <li>• Inadequate infrastructure development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Funding Inefficiencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 40% of aid funds lost to administrative overhead</li>
                    <li>• Lack of transparency in fund allocation</li>
                    <li>• No direct correlation between funding and outcomes</li>
                    <li>• Limited community participation in decision-making</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>The Interconnected Crisis</CardTitle>
                <CardDescription>
                  These challenges are deeply interconnected, creating a cycle of environmental degradation and poverty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Water scarcity drives communities to over-exploit natural resources, leading to deforestation and soil
                  degradation. This environmental damage reduces agricultural productivity, deepening poverty and
                  forcing further resource exploitation. Traditional aid models fail to address these systemic issues
                  because they:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Treat symptoms rather than root causes</li>
                  <li>• Lack sustainable funding mechanisms</li>
                  <li>• Operate without community ownership</li>
                  <li>• Provide no incentives for long-term behavior change</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="/vision-mission">
                  Next: Vision & Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/abstract">Back to Abstract</Link>
              </Button>
            </div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  )
}
