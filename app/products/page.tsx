"use client"

import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Activity, AlertTriangle, BarChart3, Cable, GaugeCircle, LineChart, Thermometer, Timer } from "lucide-react"

const features = [
  {
    title: "Comprehensive Monitoring",
    description: "Track electricity, gas, and water usage across all your sites",
    icon: Activity,
    path: "/features/monitoring",
  },
  {
    title: "Peak Demand & Cost Tracking",
    description: "Identify high-demand periods to avoid unnecessary costs",
    icon: LineChart,
    path: "/features/demand-tracking",
  },
  {
    title: "Threshold Alerts",
    description: "Get notified of over-consumption before it leads to excessive charges",
    icon: AlertTriangle,
    path: "/features/alerts",
  },
  {
    title: "Load-Type Breakdown",
    description: "See where energy is being used and optimize by load type",
    icon: BarChart3,
    path: "/features/load-breakdown",
  },
  {
    title: "Control & Scheduling",
    description: "Efficiently manage energy-consuming devices",
    icon: Timer,
    path: "/features/control",
  },
  {
    title: "Refrigeration Monitoring",
    description: "Ensure temperature compliance for food safety",
    icon: Thermometer,
    path: "/features/refrigeration",
  },
  {
    title: "HACCP Compliance",
    description: "Stay compliant with critical temperature control",
    icon: GaugeCircle,
    path: "/features/haccp",
  },
  {
    title: "Live Equipment Status",
    description: "View real-time performance of all energy equipment",
    icon: Cable,
    path: "/features/equipment-status",
  },
]

export default function Products() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-penn-blue via-berkeley-blue to-indigo-dye pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">What We Offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors border-none text-white"
              onClick={() => router.push(feature.path)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <feature.icon className="w-12 h-12 text-indigo-300" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

