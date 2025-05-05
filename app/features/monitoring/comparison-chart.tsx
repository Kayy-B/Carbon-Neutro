import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Building A", Electricity: 4000, Gas: 2400, Water: 2400 },
  { name: "Building B", Electricity: 3000, Gas: 1398, Water: 2210 },
  { name: "Building C", Electricity: 2000, Gas: 9800, Water: 2290 },
  { name: "Building D", Electricity: 2780, Gas: 3908, Water: 2000 },
]

export function ComparisonChart() {
  return (
    <Card className="p-6 bg-white/10 text-white mb-8">
      <h3 className="text-xl font-semibold mb-4">Building Comparison</h3>
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue="electricity">
          <SelectTrigger className="w-[180px] bg-white text-penn-blue">
            <SelectValue placeholder="Select resource" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electricity">Electricity</SelectItem>
            <SelectItem value="gas">Gas</SelectItem>
            <SelectItem value="water">Water</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Electricity" fill="#8884d8" />
          <Bar dataKey="Gas" fill="#82ca9d" />
          <Bar dataKey="Water" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

