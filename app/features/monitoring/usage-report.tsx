import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UsageReport() {
  const [selectedResource, setSelectedResource] = useState("electricity")

  const reports = {
    electricity: {
      peak: "250 kW at 2:00 PM",
      carbon: "2.5 tons CO2e",
      load: "HVAC: 40%",
      insight: "Optimize HVAC schedules",
    },
    gas: {
      peak: "75 m³/h at 8:00 AM",
      carbon: "1.8 tons CO2e",
      load: "Heating: 60%",
      insight: "Improve insulation",
    },
    water: {
      peak: "500 L/h at 12:00 PM",
      carbon: "0.3 tons CO2e",
      load: "Irrigation: 50%",
      insight: "Install smart irrigation",
    },
  }

  return (
    <Card className="p-4 bg-white/10 text-white">
      <div className="flex justify-between items-center mb-2">
        <Select onValueChange={setSelectedResource} defaultValue={selectedResource}>
          <SelectTrigger className="w-[120px] bg-white text-penn-blue">
            <SelectValue placeholder="Select resource" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electricity">Electricity</SelectItem>
            <SelectItem value="gas">Gas</SelectItem>
            <SelectItem value="water">Water</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1 text-sm">
        <p>Peak usage: {reports[selectedResource].peak}</p>
        <p>Carbon footprint: {reports[selectedResource].carbon}</p>
        <p>Load Analysis: {reports[selectedResource].load}</p>
        <p>Insight: {reports[selectedResource].insight}</p>
      </div>
    </Card>
  )
}

