import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SustainabilityScore() {
  const score = 75 // This should be calculated based on various factors

  const getScoreColor = (score) => {
    if (score < 50) return "bg-red-500"
    if (score < 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <Card className="p-4 bg-white/10 text-white">
      <h3 className="text-lg font-semibold mb-2">Sustainability Score</h3>
      <div className="flex items-center space-x-4">
        <div className="text-3xl font-bold">{score}</div>
        <Progress value={score} className={`w-full ${getScoreColor(score)}`} />
      </div>
      <p className="mt-2 text-sm">Your site is performing well in terms of sustainability.</p>
    </Card>
  )
}

