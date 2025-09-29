"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ResponsiveGrid } from "@/components/responsive-grid"
import {
  Smartphone,
  CreditCard,
  TrendingUp,
  ArrowUpDown,
  Scan,
  Wallet,
  BarChart3,
  Settings,
  Send,
  Download,
} from "lucide-react"
import { useState } from "react"

export default function VendorPage() {
  const [balance, setBalance] = useState("2,847.50")
  const [isScanning, setIsScanning] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Vendor Dashboard
          </Badge>
          <h1 className="text-4xl font-bold mb-6 text-balance">Merchant Interface</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamless NFC transactions, real-time balance management, and comprehensive transaction insights
          </p>
        </div>

        {/* Balance Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                Current Balance
              </span>
              <Badge variant="outline" className="font-mono">
                TANA
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold font-mono text-primary mb-4">{balance}</div>
            <div className="flex gap-4">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Withdraw
              </Button>
              <Button size="sm" variant="outline">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Exchange
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* NFC Transaction Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scan className="h-6 w-6 text-accent" />
              NFC Transaction Terminal
            </CardTitle>
            <CardDescription>Tap or scan to process payments instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-12">
              <div
                className={`w-32 h-32 rounded-full border-4 border-dashed ${
                  isScanning ? "border-accent animate-pulse bg-accent/10" : "border-muted-foreground"
                } flex items-center justify-center mb-6 cursor-pointer transition-all`}
                onClick={() => setIsScanning(!isScanning)}
              >
                <Smartphone className={`h-12 w-12 ${isScanning ? "text-accent" : "text-muted-foreground"}`} />
              </div>
              <Button size="lg" className="font-mono text-lg px-8" onClick={() => setIsScanning(!isScanning)}>
                {isScanning ? "> SCANNING..." : "> START_SCAN"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4 font-mono">
                {isScanning ? "Waiting for device..." : "Click to activate NFC scanner"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <ResponsiveGrid cols={{ default: 2, md: 4 }} gap="md" className="mb-8">
          <Card className="text-center p-6 hover:bg-card/80 transition-colors cursor-pointer">
            <Send className="h-8 w-8 mx-auto mb-3 text-blue-500" />
            <h3 className="font-semibold mb-1">Send</h3>
            <p className="text-sm text-muted-foreground">Transfer TANA</p>
          </Card>

          <Card className="text-center p-6 hover:bg-card/80 transition-colors cursor-pointer">
            <Download className="h-8 w-8 mx-auto mb-3 text-green-500" />
            <h3 className="font-semibold mb-1">Receive</h3>
            <p className="text-sm text-muted-foreground">Get payments</p>
          </Card>

          <Card className="text-center p-6 hover:bg-card/80 transition-colors cursor-pointer">
            <ArrowUpDown className="h-8 w-8 mx-auto mb-3 text-purple-500" />
            <h3 className="font-semibold mb-1">Exchange</h3>
            <p className="text-sm text-muted-foreground">Convert currency</p>
          </Card>

          <Card className="text-center p-6 hover:bg-card/80 transition-colors cursor-pointer">
            <Settings className="h-8 w-8 mx-auto mb-3 text-orange-500" />
            <h3 className="font-semibold mb-1">Settings</h3>
            <p className="text-sm text-muted-foreground">Configure account</p>
          </Card>
        </ResponsiveGrid>

        {/* Transaction Management */}
        <ResponsiveGrid cols={{ default: 1, lg: 2 }} gap="lg" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                Recent Transactions
              </CardTitle>
              <CardDescription>Latest payment activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    type: "Received",
                    amount: "+125.00",
                    from: "Customer #1247",
                    time: "2 min ago",
                    status: "completed",
                  },
                  { type: "Sent", amount: "-50.00", to: "Supplier ABC", time: "1 hour ago", status: "completed" },
                  {
                    type: "Received",
                    amount: "+75.50",
                    from: "Customer #1248",
                    time: "3 hours ago",
                    status: "completed",
                  },
                  { type: "Exchange", amount: "200.00", to: "KES → TANA", time: "1 day ago", status: "completed" },
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg font-mono text-sm"
                  >
                    <div>
                      <div className="font-semibold">{tx.type}</div>
                      <div className="text-muted-foreground">{tx.from || tx.to}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${tx.amount.startsWith("+") ? "text-green-500" : tx.amount.startsWith("-") ? "text-red-500" : "text-blue-500"}`}
                      >
                        {tx.amount} TANA
                      </div>
                      <div className="text-muted-foreground">{tx.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Transaction Insights
              </CardTitle>
              <CardDescription>Performance metrics and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-green-500">47</div>
                    <div className="text-sm text-muted-foreground">Today's Transactions</div>
                  </div>
                  <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                    <div className="text-2xl font-bold font-mono text-blue-500">1,247</div>
                    <div className="text-sm text-muted-foreground">Total Volume</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Average</span>
                    <span className="font-mono font-semibold">156.8 TANA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Peak Hour</span>
                    <span className="font-mono font-semibold">14:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Success Rate</span>
                    <span className="font-mono font-semibold text-green-500">99.2%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ResponsiveGrid>

        {/* Settlement & On/Off Ramp */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Settlement & Currency Exchange
            </CardTitle>
            <CardDescription>Convert between TANA tokens and local currency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
              <div className="space-y-4">
                <h4 className="font-semibold">Convert to KES</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Amount (TANA)</label>
                    <Input placeholder="0.00" className="font-mono" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Receive (KES)</label>
                    <Input placeholder="0.00" className="font-mono" disabled />
                  </div>
                  <Button className="w-full font-mono">{">"} CONVERT_TO_KES</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Buy TANA</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Amount (KES)</label>
                    <Input placeholder="0.00" className="font-mono" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Receive (TANA)</label>
                    <Input placeholder="0.00" className="font-mono" disabled />
                  </div>
                  <Button variant="outline" className="w-full font-mono bg-transparent">
                    {">"} BUY_TANA
                  </Button>
                </div>
              </div>
            </ResponsiveGrid>
          </CardContent>
        </Card>
      </main>

      {/* Terminal-style Navigation Footer */}
      <div className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center gap-2">
            <Button variant="ghost" size="sm" className="font-mono">
              [HOME]
            </Button>
            <Button variant="ghost" size="sm" className="font-mono">
              [SCAN]
            </Button>
            <Button variant="ghost" size="sm" className="font-mono">
              [HISTORY]
            </Button>
            <Button variant="ghost" size="sm" className="font-mono">
              [SETTINGS]
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
