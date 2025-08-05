"use client"

import { useState } from "react"
import { AdminHeader } from "./components/admin-header"
import { Sidebar } from "./components/sidebar"
import { UsersTable } from "./components/users-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CAApplications } from "./components/ca-applications"
import { HomeDashboard } from "./components/home-dashboard"
import { UserDetailPage } from "./components/user-detail-page"
import { CAReviewPage } from "./components/ca-review-page"

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedCAApplication, setSelectedCAApplication] = useState(null)

  const handleStatClick = (type) => {
    console.log(`Clicked on ${type} stat`)
    if (type === "users") {
      setActiveTab("users")
    } else if (type === "ca") {
      setActiveTab("ca")
    }
  }

  const handleUserInfoClick = (user) => {
    setSelectedUser(user)
    setActiveTab("user-detail")
  }

  const handleBackToUsers = () => {
    setSelectedUser(null)
    setActiveTab("users")
  }

  const handleCAReviewClick = (application) => {
    setSelectedCAApplication(application)
    setActiveTab("ca-review")
  }

  const handleBackToCA = () => {
    setSelectedCAApplication(null)
    setActiveTab("ca")
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeDashboard onStatClick={handleStatClick} />

      case "users":
        return <UsersTable onUserInfoClick={handleUserInfoClick} />

      case "user-detail":
        return <UserDetailPage user={selectedUser} onBack={handleBackToUsers} />

      case "ca":
        return <CAApplications onCAReviewClick={handleCAReviewClick} />

      case "ca-review":
        return <CAReviewPage application={selectedCAApplication} onBack={handleBackToCA} />

      case "concerns":
        return (
          <Card>
            <CardHeader>
              <CardTitle>⚠️ Concerns & Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Concerns management interface - Coming soon...</p>
            </CardContent>
          </Card>
        )

      default:
        return <div>Select a section from the sidebar</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
