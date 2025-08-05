"use client"

// import ClientDate from './ClientDate'

// <Badge>
//   <ClientDate />
// </Badge>


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Shield, AlertCircle, Eye, Edit, Check, X } from "lucide-react"

export default function Component() {
  const [selectedView, setSelectedView] = useState("overview")


  // Mock data based on the wireframe
  const stats = {
    currentUsers: 1234,
    cas: 12,
    moderators: 15,
    admins: 2,
  }

  const applications = [
    { id: "APP001", status: "pending", type: "CA Application", date: "2024-01-15" },
    { id: "APP002", status: "approved", type: "Moderator Application", date: "2024-01-14" },
    { id: "APP003", status: "rejected", type: "CA Application", date: "2024-01-13" },
    { id: "APP004", status: "pending", type: "CA Application", date: "2024-01-12" },
  ]

  const users = [
    { id: 1, username: "john_doe", role: "user", status: "active", joinDate: "2024-01-10" },
    { id: 2, username: "jane_admin", role: "admin", status: "active", joinDate: "2024-01-08" },
    { id: 3, username: "mike_mod", role: "moderator", status: "active", joinDate: "2024-01-05" },
    { id: 4, username: "sarah_ca", role: "ca", status: "active", joinDate: "2024-01-03" },
  ]

  const handleApplicationAction = (id: string, action: "approve" | "reject") => {
    console.log(`${action} application ${id}`)
  }

  const handleRoleChange = (userId: number, newRole: string) => {
    console.log(`Change user ${userId} role to ${newRole}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">HELLO Admin!!</h1>
              <p className="text-sm text-gray-600">Admin Dashboard - CA INFINITY 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Login/Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setSelectedView("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedView === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setSelectedView("users")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedView === "users"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setSelectedView("ca")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedView === "ca"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              CA
            </button>
            <button
              onClick={() => setSelectedView("concerns")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedView === "concerns"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Concerns
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {selectedView === "overview" && (
            <div className="space-y-6">
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Current Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.currentUsers}</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">CAs</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.cas}</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Moderators</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.moderators}</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Admins</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.admins}</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Applications Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Applications
                  </CardTitle>
                  <CardDescription>Manage pending applications and review status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="received" className="w-full">
                    <TabsList>
                      <TabsTrigger value="received">Applications Received (24)</TabsTrigger>
                      <TabsTrigger value="active">Active Applications (120)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="received" className="space-y-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Application ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {applications.map((app) => (
                            <TableRow key={app.id}>
                              <TableCell className="font-medium">{app.id}</TableCell>
                              <TableCell>{app.type}</TableCell>
                              <TableCell>{app.date}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    app.status === "approved"
                                      ? "default"
                                      : app.status === "rejected"
                                        ? "destructive"
                                        : "secondary"
                                  }
                                >
                                  {app.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {app.status === "pending" && (
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleApplicationAction(app.id, "approve")}
                                    >
                                      <Check className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleApplicationAction(app.id, "reject")}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="active">
                      <p className="text-muted-foreground">Similar table for active applications...</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedView === "users" && (
            <Card>
              <CardHeader>
                <CardTitle>Current Users</CardTitle>
                <CardDescription>Manage user roles and permissions. Click on roles to change them.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell className="font-medium">{user.username}</TableCell>
                        <TableCell>
                          <Select defaultValue={user.role} onValueChange={(value) => handleRoleChange(user.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="ca">CA</SelectItem>
                              <SelectItem value="moderator">Moderator</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {selectedView === "ca" && (
            <Card>
              <CardHeader>
                <CardTitle>CA Management</CardTitle>
                <CardDescription>Manage CA applications and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">CA management interface coming soon...</p>
              </CardContent>
            </Card>
          )}

          {selectedView === "concerns" && (
            <Card>
              <CardHeader>
                <CardTitle>Concerns & Issues</CardTitle>
                <CardDescription>Handle user concerns and system issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Concerns management interface coming soon...</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
