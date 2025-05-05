import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Week 1", Demand: 4000, Usage: 2400, Price: 200 },
  { name: "Week 2", Demand: 3000, Usage: 1398, Price: 180 },
  { name: "Week 3", Demand: 2000, Usage: 9800, Price: 220 },
  { name: "Week 4", Demand: 2780, Usage: 3908, Price: 190 },
  { name: "Week 5", Demand: 1890, Usage: 4800, Price: 210 },
  { name: "Week 6", Demand: 2390, Usage: 3800, Price: 200 },
]

export function DemandPrediction() {
  return (
    <Card className="p-6 bg-white/10 text-white mb-8">
      <h3 className="text-xl font-semibold mb-4">Demand & Usage Prediction</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis yAxisId="left" stroke="#fff" />
          <YAxis yAxisId="right" orientation="right" stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="Demand" stroke="#8884d8" />
          <Line yAxisId="left" type="monotone" dataKey="Usage" stroke="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="Price" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

