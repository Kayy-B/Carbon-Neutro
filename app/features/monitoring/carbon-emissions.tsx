import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", Electricity: 2.5, Gas: 1.8, Water: 0.3 },
  { name: "Feb", Electricity: 2.2, Gas: 1.6, Water: 0.2 },
  { name: "Mar", Electricity: 2.7, Gas: 2.0, Water: 0.4 },
  { name: "Apr", Electricity: 2.3, Gas: 1.7, Water: 0.3 },
  { name: "May", Electricity: 2.1, Gas: 1.5, Water: 0.2 },
  { name: "Jun", Electricity: 2.4, Gas: 1.9, Water: 0.3 },
]

export function CarbonEmissions() {
  return (
    <Card className="p-4 bg-white/10 text-white">
      <h3 className="text-lg font-semibold mb-2">Carbon Emissions Tracking</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Electricity" stroke="#8884d8" />
          <Line type="monotone" dataKey="Gas" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Water" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

