import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function CarbonEquivalentCalculator() {
  const [co2Amount, setCo2Amount] = useState("")
  const [equivalent, setEquivalent] = useState(null)

  const calculateEquivalent = () => {
    const co2 = Number.parseFloat(co2Amount)
    if (isNaN(co2)) return

    setEquivalent({
      trees: (co2 / 0.06).toFixed(2),
      carMiles: (co2 * 2481).toFixed(2),
      homeEnergy: (co2 * 1.21).toFixed(2),
    })
  }

  return (
    <Card className="p-4 bg-white/10 text-white">
      <h3 className="text-lg font-semibold mb-2">Carbon Equivalent Calculator</h3>
      <div className="space-y-2">
        <div>
          <Label htmlFor="co2-amount" className="text-xs">
            CO2 Amount (tons)
          </Label>
          <Input
            id="co2-amount"
            type="number"
            value={co2Amount}
            onChange={(e) => setCo2Amount(e.target.value)}
            className="bg-white text-penn-blue h-8 text-sm"
          />
        </div>
        <Button onClick={calculateEquivalent} className="w-full">
          Calculate
        </Button>
        {equivalent && (
          <div className="space-y-1 text-xs">
            <p>{equivalent.trees} trees planted for a year</p>
            <p>{equivalent.carMiles} miles driven by an average car</p>
            <p>{equivalent.homeEnergy} homes' energy use for one year</p>
          </div>
        )}
      </div>
    </Card>
  )
}

