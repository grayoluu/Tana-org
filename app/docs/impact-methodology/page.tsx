import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, TrendingUp, Users, Droplets, TreePine } from "lucide-react"
import Link from "next/link"

export default function ImpactMethodologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Impact Methodology
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Measuring Real Impact</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Our comprehensive framework for tracking, verifying, and reporting environmental and social outcomes in the
            Tana River Basin.
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Verifiable Metrics</CardTitle>
                <CardDescription>
                  All impact claims are backed by verifiable data sources and third-party validation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Real-Time Tracking</CardTitle>
                <CardDescription>
                  Continuous monitoring and reporting of outcomes through IoT sensors and community reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Community Validation</CardTitle>
                <CardDescription>
                  Local communities participate in impact verification and outcome assessment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Blockchain Immutability</CardTitle>
                <CardDescription>
                  All impact data is recorded on blockchain for permanent, tamper-proof records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Impact Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Impact Categories</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Water Access & Quality</CardTitle>
                    <CardDescription>Clean water delivery and infrastructure development</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Metrics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Liters of clean water delivered</li>
                      <li>• Number of people served</li>
                      <li>• Water quality test results</li>
                      <li>• Infrastructure uptime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verification Methods</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• IoT flow sensors</li>
                      <li>• Water quality testing</li>
                      <li>• Community reporting</li>
                      <li>• Third-party audits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reporting Frequency</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time flow data</li>
                      <li>• Daily usage reports</li>
                      <li>• Weekly quality tests</li>
                      <li>• Monthly impact summaries</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TreePine className="h-8 w-8 text-green-500" />
                  <div>
                    <CardTitle>Environmental Restoration</CardTitle>
                    <CardDescription>Reforestation and ecosystem rehabilitation projects</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Metrics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Trees planted and surviving</li>
                      <li>• Carbon sequestration estimates</li>
                      <li>• Biodiversity indicators</li>
                      <li>• Soil health improvements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verification Methods</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Satellite imagery analysis</li>
                      <li>• Ground surveys</li>
                      <li>• Drone monitoring</li>
                      <li>• Scientific assessments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reporting Frequency</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monthly growth tracking</li>
                      <li>• Quarterly survival rates</li>
                      <li>• Annual carbon assessments</li>
                      <li>• Bi-annual biodiversity surveys</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle>Community Development</CardTitle>
                    <CardDescription>Economic empowerment and social infrastructure projects</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Metrics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Jobs created</li>
                      <li>• Income improvements</li>
                      <li>• Skills training completed</li>
                      <li>• Infrastructure built</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Verification Methods</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Community surveys</li>
                      <li>• Economic assessments</li>
                      <li>• Training certifications</li>
                      <li>• Infrastructure inspections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reporting Frequency</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monthly progress updates</li>
                      <li>• Quarterly economic surveys</li>
                      <li>• Annual impact assessments</li>
                      <li>• Continuous feedback collection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Verification Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Verification Process</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Collection</h4>
                    <p className="text-muted-foreground">
                      Automated sensors, community reporting, and third-party assessments collect impact data
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Validation</h4>
                    <p className="text-muted-foreground">
                      Local community members review and validate impact claims through democratic processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Verification</h4>
                    <p className="text-muted-foreground">
                      Independent auditors and scientific institutions verify impact claims and methodologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Blockchain Recording</h4>
                    <p className="text-muted-foreground">
                      Verified impact data is permanently recorded on blockchain for transparency and immutability
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Standards & Compliance */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Standards & Compliance</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">International Standards</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>UN Sustainable Development Goals (SDGs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Global Reporting Initiative (GRI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Impact Management Project (IMP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Social Return on Investment (SROI)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Certification Bodies</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>B Corp Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gold Standard for Global Goals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Verified Carbon Standard (VCS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>ISO 14001 Environmental Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
