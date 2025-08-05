"use client"

import { Card, CardContent } from "@/components/ui/card"
import { StatsSection } from "./stats-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

// Client-side only date/time component to prevent hydration mismatch
function ClientDateTime() {
  const [dateTime, setDateTime] = useState({ date: "", time: "" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateDateTime = () => {
      const now = new Date()
      setDateTime({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
      })
    }
    
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <>
        <Badge className="bg-white/20 text-white border-white/30">📅 --</Badge>
        <Badge className="bg-white/20 text-white border-white/30">🕒 --</Badge>
      </>
    )
  }

  return (
    <>
      <Badge className="bg-white/20 text-white border-white/30">📅 {dateTime.date}</Badge>
      <Badge className="bg-white/20 text-white border-white/30">🕒 {dateTime.time}</Badge>
    </>
  )
}

export function HomeDashboard({ onStatClick }) {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h2>
            <p className="text-blue-100 text-lg">CA INFINITY 2025 - Administrative Control Center</p>
            <div className="flex items-center mt-4 space-x-4">
              <Badge className="bg-white/20 text-white border-white/30">🟢 System Online</Badge>
              <ClientDateTime />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-6xl opacity-20">🏛️</div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📊 User Statistics Overview</h3>
        <StatsSection onStatClick={onStatClick} />
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">⚡ Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-bold text-lg text-blue-800 mb-2">Manage Users</h4>
              <p className="text-sm text-blue-600 mb-4">View and manage all system users</p>
              <Button onClick={() => onStatClick("users")} className="w-full bg-blue-600 hover:bg-blue-700">
                Access Users
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold text-lg text-green-800 mb-2">CA Management</h4>
              <p className="text-sm text-green-600 mb-4">Handle CA applications and members</p>
              <Button onClick={() => onStatClick("ca")} className="w-full bg-green-600 hover:bg-green-700">
                Manage CAs
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h4 className="font-bold text-lg text-yellow-800 mb-2">Concerns</h4>
              <p className="text-sm text-yellow-600 mb-4">Handle user concerns and issues</p>
              <Button onClick={() => onStatClick("concerns")} className="w-full bg-yellow-600 hover:bg-yellow-700">
                View Concerns
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
