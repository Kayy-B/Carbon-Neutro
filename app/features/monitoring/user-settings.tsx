import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function UserSettings() {
  const [thresholds, setThresholds] = useState({
    electricity: 5000,
    gas: 1500,
    water: 4000,
  })

  const [newThresholds, setNewThresholds] = useState({
    electricity: "",
    gas: "",
    water: "",
  })

  const handleThresholdChange = (resource, value) => {
    setNewThresholds((prev) => ({ ...prev, [resource]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setThresholds((prev) => ({
      electricity: newThresholds.electricity || prev.electricity,
      gas: newThresholds.gas || prev.gas,
      water: newThresholds.water || prev.water,
    }))
    setNewThresholds({ electricity: "", gas: "", water: "" })
  }

  return (
    <Card className="p-4 bg-white/10 text-white">
      <h3 className="text-lg font-semibold mb-2">Custom Thresholds</h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(thresholds).map(([resource, value]) => (
            <div key={resource}>
              <Label htmlFor={`${resource}-threshold`} className="text-xs">
                {resource}
              </Label>
              <Input
                id={`${resource}-threshold`}
                type="number"
                className="bg-white text-penn-blue h-8 text-sm"
                placeholder={`Current: ${value}`}
                value={newThresholds[resource]}
                onChange={(e) => handleThresholdChange(resource, e.target.value)}
              />
            </div>
          ))}
        </div>
        <Button type="submit" className="w-full">
          Update
        </Button>
      </form>
    </Card>
  )
}

