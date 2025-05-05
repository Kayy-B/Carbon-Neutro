import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function NotificationsAndAlerts() {
  const [notificationPreference, setNotificationPreference] = useState("email")

  return (
    <Card className="p-4 bg-white/10 text-white">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">Notification Preferences</h4>
          <RadioGroup
            value={notificationPreference}
            onValueChange={setNotificationPreference}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email" className="text-xs">
                Email
              </Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms" className="text-xs">
                SMS
              </Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="app" id="app" />
              <Label htmlFor="app" className="text-xs">
                In-app
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-1">Current Alerts</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-1">
              <AlertTriangle className="text-yellow-400 w-4 h-4" />
              <span>Electricity consumption exceeds threshold in Site 1</span>
            </div>
            <div className="flex items-center space-x-1">
              <AlertTriangle className="text-yellow-400 w-4 h-4" />
              <span>Water usage abnormally high in Site 2</span>
            </div>
          </div>
        </div>
        <Button className="w-full text-sm">View All Alerts</Button>
      </div>
    </Card>
  )
}

