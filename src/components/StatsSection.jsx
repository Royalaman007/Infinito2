"use client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

export function StatsSection({ onStatClick }) {
  const stats = [
    {
      label: "CURRENT USERS",
      value: "1234",
      type: "users",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      icon: "👥",
      description: "Total registered users in the system",
    },
    {
      label: "CAs",
      value: "12",
      type: "cas",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      icon: "🛡️",
      description: "Certified Accountants managing cases",
    },
    {
      label: "MODERATORS",
      value: "15",
      type: "moderators",
      bgColor: "bg-gradient-to-r from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      icon: "⚖️",
      description: "System moderators overseeing operations",
    },
    {
      label: "ADMINS",
      value: "2",
      type: "admins",
      bgColor: "bg-gradient-to-r from-red-50 to-red-100",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      icon: "👑",
      description: "System administrators with full access",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {stats.map((stat) => (
        <Card
          key={stat.type}
          className={`${stat.bgColor} ${stat.borderColor} border-2 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{stat.icon}</div>
                <div>
                  <div className={`text-4xl font-bold ${stat.textColor} mb-1`}>{stat.value}</div>
                  <div className={`text-lg font-semibold ${stat.textColor} mb-1`}>{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge className={`${stat.textColor} bg-white/50 mb-3`}>Active</Badge>
                <Button
                  size="sm"
                  variant="outline"
                  className={`bg-white/80 ${stat.textColor} border-current hover:bg-white`}
                  onClick={() => onStatClick(stat.type)}
                >
                  📊 View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
