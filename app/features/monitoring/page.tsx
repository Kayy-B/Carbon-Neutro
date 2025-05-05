"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Activity, Droplet, Flame, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import { UsageReport } from "./usage-report"
import { UserSettings } from "./user-settings"
import { ComparisonChart } from "./comparison-chart"
import { DemandPrediction } from "./demand-prediction"
import { CarbonEmissions } from "./carbon-emissions"
import { SustainabilityScore } from "./sustainability-score"
import { CarbonEquivalentCalculator } from "./carbon-equivalent-calculator"
import { NotificationsAndAlerts } from "./notifications-and-alerts"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Mock data (replace with real data from API in production)
const data = [
  { name: "Jan", Electricity: 4000, Gas: 2400, Water: 2400 },
  { name: "Feb", Electricity: 3000, Gas: 1398, Water: 2210 },
  { name: "Mar", Electricity: 2000, Gas: 9800, Water: 2290 },
  { name: "Apr", Electricity: 2780, Gas: 3908, Water: 2000 },
  { name: "May", Electricity: 1890, Gas: 4800, Water: 2181 },
  { name: "Jun", Electricity: 2390, Gas: 3800, Water: 2500 },
  { name: "Jul", Electricity: 3490, Gas: 4300, Water: 2100 },
]

const pieData = [
  { name: "Electricity", value: 4000, fill: "#8884d8" },
  { name: "Gas", value: 3000, fill: "#82ca9d" },
  { name: "Water", value: 2000, fill: "#ffc658" },
]

export default function ComprehensiveMonitoring() {
  const [selectedSite, setSelectedSite] = useState("site1")
  const [timeRange, setTimeRange] = useState("monthly")
  const [performanceMode, setPerformanceMode] = useState(50)
  const [hoveredCard, setHoveredCard] = useState(null)

  const getPerformanceModeColor = (value) => {
    if (value < 33) return "bg-green-500"
    if (value < 66) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-penn-blue via-berkeley-blue to-indigo-dye pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-4">Comprehensive Monitoring Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Select onValueChange={setSelectedSite} defaultValue={selectedSite}>
            <SelectTrigger className="w-full bg-white text-penn-blue">
              <SelectValue placeholder="Select a site" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="site1">Site 1</SelectItem>
              <SelectItem value="site2">Site 2</SelectItem>
              <SelectItem value="site3">Site 3</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <span className="text-white text-sm">Energy Saver</span>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="flex-grow"
              onValueChange={(value) => setPerformanceMode(value[0])}
            />
            <span className="text-white text-sm">High Performance</span>
          </div>

          <Select onValueChange={setTimeRange} defaultValue={timeRange}>
            <SelectTrigger className="w-full bg-white text-penn-blue">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <ResourceCard
            title="Electricity Usage"
            icon={<Activity className="w-6 h-6 text-yellow-400" />}
            value="4,532 kWh"
            peak="250 kW at 2:00 PM"
            color="yellow"
            onHover={() => setHoveredCard("electricity")}
            onLeave={() => setHoveredCard(null)}
            isHovered={hoveredCard === "electricity"}
          />
          <ResourceCard
            title="Gas Usage"
            icon={<Flame className="w-6 h-6 text-orange-400" />}
            value="1,245 m³"
            peak="75 m³/h at 8:00 AM"
            color="orange"
            onHover={() => setHoveredCard("gas")}
            onLeave={() => setHoveredCard(null)}
            isHovered={hoveredCard === "gas"}
          />
          <ResourceCard
            title="Water Usage"
            icon={<Droplet className="w-6 h-6 text-blue-400" />}
            value="3,750 L"
            peak="500 L/h at 12:00 PM"
            color="blue"
            onHover={() => setHoveredCard("water")}
            onLeave={() => setHoveredCard(null)}
            isHovered={hoveredCard === "water"}
          />
        </div>

        <Tabs defaultValue="usage" className="w-full mb-4">
          <TabsList className="grid w-full grid-cols-4 bg-berkeley-blue">
            <TabsTrigger value="usage">Usage Trends</TabsTrigger>
            <TabsTrigger value="demand">Demand Prediction</TabsTrigger>
            <TabsTrigger value="comparison">Building Comparison</TabsTrigger>
            <TabsTrigger value="carbon">Carbon Emissions</TabsTrigger>
          </TabsList>
          <TabsContent value="usage">
            <Card className="p-4 bg-white/10 text-white">
              <UsageTrendsChart data={data} pieData={pieData} />
            </Card>
          </TabsContent>
          <TabsContent value="demand">
            <DemandPrediction />
          </TabsContent>
          <TabsContent value="comparison">
            <ComparisonChart />
          </TabsContent>
          <TabsContent value="carbon">
            <CarbonEmissions />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card className="p-4 bg-white/10 text-white flex justify-between items-center">
                <h3 className="text-xl font-semibold">Analytical Report</h3>
                <ChevronDown className="h-4 w-4" />
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <UsageReport />
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card className="p-4 bg-white/10 text-white flex justify-between items-center">
                <h3 className="text-xl font-semibold">Notifications & Alerts</h3>
                <ChevronDown className="h-4 w-4" />
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <NotificationsAndAlerts />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SustainabilityScore />
          <CarbonEquivalentCalculator />
          <UserSettings />
        </div>
      </div>
    </main>
  )
}

function ResourceCard({ title, icon, value, peak, color, onHover, onLeave, isHovered }) {
  return (
    <Card
      className={`p-4 bg-white/10 text-white transition-all duration-300 ${
        isHovered ? `ring-2 ring-${color}-400` : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-300">Peak: {peak}</p>
      <div className="flex items-center mt-2">
        <Switch className="mr-2" />
        <span className="text-sm">Turn off non-essential systems</span>
      </div>
    </Card>
  )
}

function UsageTrendsChart({ data, pieData }) {
  return (
    <Tabs defaultValue="line" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-berkeley-blue mb-2">
        <TabsTrigger value="line">Line Chart</TabsTrigger>
        <TabsTrigger value="bar">Bar Chart</TabsTrigger>
        <TabsTrigger value="pie">Pie Chart</TabsTrigger>
      </TabsList>
      <TabsContent value="line">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="Electricity" stroke="#8884d8" />
            <Line type="monotone" dataKey="Gas" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Water" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="bar">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Electricity" fill="#8884d8" />
            <Bar dataKey="Gas" fill="#82ca9d" />
            <Bar dataKey="Water" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="pie">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </TabsContent>
    </Tabs>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <p className="text-penn-blue font-bold">{`${label}`}</p>
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.color }}>
            {`${pld.name} : ${pld.value}`}
          </p>
        ))}
        <p className="text-penn-blue mt-2">Click for detailed analytics</p>
      </div>
    )
  }
  return null
}

