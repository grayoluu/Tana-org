import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Code, Key, Database, Smartphone } from "lucide-react"
import Link from "next/link"

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
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
            API Reference v1.2
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">API Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Complete reference for integrating with the Tana Impact platform, including blockchain interactions, impact
            tracking, and mobile money integration.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Auth</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Key className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>Secure API access with JWT tokens and community-based permissions</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Blockchain API</CardTitle>
                  <CardDescription>Direct interaction with Tana Token smart contracts and transactions</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Impact Tracking</CardTitle>
                  <CardDescription>Real-time impact metrics and environmental outcome verification</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Mobile Integration</CardTitle>
                  <CardDescription>NFC payments and mobile money platform connectivity</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Quick start guide for developers integrating with Tana Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Base URL</h4>
                    <code className="bg-muted px-3 py-1 rounded text-sm">https://api.tanaimpact.org/v1</code>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      All API requests require authentication via Bearer token:
                    </p>
                    <code className="bg-muted px-3 py-1 rounded text-sm block">
                      Authorization: Bearer YOUR_API_TOKEN
                    </code>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Rate Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard rate limit: 1000 requests per hour per API key
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Authentication Methods</CardTitle>
                <CardDescription>Secure access to Tana Impact APIs with community-based permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">API Key Authentication</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                      &nbsp;&nbsp;https://api.tanaimpact.org/v1/projects
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Community Wallet Authentication</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    For community members accessing their own data and projects
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      POST /auth/wallet
                      <br />
                      {`{`}
                      <br />
                      &nbsp;&nbsp;"wallet_address": "0x...",
                      <br />
                      &nbsp;&nbsp;"signature": "0x...",
                      <br />
                      &nbsp;&nbsp;"message": "Login to Tana Impact"
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Endpoints</CardTitle>
                <CardDescription>Direct interaction with Tana Token smart contracts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Get Token Balance</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">GET /blockchain/balance/{`{wallet_address}`}</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Transfer Tokens</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      POST /blockchain/transfer
                      <br />
                      {`{`}
                      <br />
                      &nbsp;&nbsp;"to": "0x...",
                      <br />
                      &nbsp;&nbsp;"amount": "100.0",
                      <br />
                      &nbsp;&nbsp;"impact_category": "water_access"
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Transaction History</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">GET /blockchain/transactions?wallet={`{address}`}&limit=50</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Impact Tracking API</CardTitle>
                <CardDescription>Real-time impact metrics and verification endpoints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Get Impact Metrics</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">GET /impact/metrics?project_id={`{id}`}&timeframe=30d</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Submit Impact Data</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      POST /impact/submit
                      <br />
                      {`{`}
                      <br />
                      &nbsp;&nbsp;"project_id": "water_kiosk_001",
                      <br />
                      &nbsp;&nbsp;"metric_type": "water_delivered",
                      <br />
                      &nbsp;&nbsp;"value": 5000,
                      <br />
                      &nbsp;&nbsp;"unit": "liters",
                      <br />
                      &nbsp;&nbsp;"verification_hash": "0x..."
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Verify Impact Claims</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">GET /impact/verify/{`{impact_id}`}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Integration API</CardTitle>
                <CardDescription>NFC payments and mobile money platform connectivity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">NFC Payment Initialization</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      POST /mobile/nfc/init
                      <br />
                      {`{`}
                      <br />
                      &nbsp;&nbsp;"amount": "50.0",
                      <br />
                      &nbsp;&nbsp;"merchant_id": "water_kiosk_001",
                      <br />
                      &nbsp;&nbsp;"impact_category": "water_access"
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Mobile Money Integration</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      POST /mobile/mpesa/payment
                      <br />
                      {`{`}
                      <br />
                      &nbsp;&nbsp;"phone_number": "+254700000000",
                      <br />
                      &nbsp;&nbsp;"amount": "100.0",
                      <br />
                      &nbsp;&nbsp;"reference": "TANA_WATER_001"
                      <br />
                      {`}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Payment Status</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">GET /mobile/payment/status/{`{transaction_id}`}</code>
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
