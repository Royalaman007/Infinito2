"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CAApplications({ onCAReviewClick }) {
  const [caApplications, setCaApplications] = useState([
    {
      id: "CA001",
      applicantName: "John Smith",
      email: "john.smith@email.com",
      experience: "3 years",
      status: "pending",
      appliedDate: "2024-01-15",
      specialization: "Corporate Law",
      qualifications: "LLB, LLM",
    },
    {
      id: "CA002",
      applicantName: "Sarah Johnson",
      email: "sarah.j@email.com",
      experience: "5 years",
      status: "pending",
      appliedDate: "2024-01-14",
      specialization: "Tax Law",
      qualifications: "CA, CPA",
    },
    {
      id: "CA003",
      applicantName: "Mike Wilson",
      email: "mike.w@email.com",
      experience: "2 years",
      status: "approved",
      appliedDate: "2024-01-13",
      specialization: "Audit",
      qualifications: "CA",
    },
    {
      id: "CA004",
      applicantName: "Emily Davis",
      email: "emily.d@email.com",
      experience: "4 years",
      status: "rejected",
      appliedDate: "2024-01-12",
      specialization: "Financial Advisory",
      qualifications: "MBA, CFA",
    },
  ])

  const [currentCAs, setCurrentCAs] = useState([
    {
      id: "CA_001",
      name: "Robert Brown",
      email: "robert.b@company.com",
      specialization: "Corporate Law",
      assignedCases: 15,
      status: "active",
      joinDate: "2023-12-01",
    },
    {
      id: "CA_002",
      name: "Lisa Anderson",
      email: "lisa.a@company.com",
      specialization: "Tax Law",
      assignedCases: 22,
      status: "active",
      joinDate: "2023-11-15",
    },
    {
      id: "CA_003",
      name: "David Miller",
      email: "david.m@company.com",
      specialization: "Audit",
      assignedCases: 8,
      status: "inactive",
      joinDate: "2023-10-20",
    },
  ])

  const handleApplicationAction = (appId, action, notes) => {
    setCaApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status: action === "approve" ? "approved" : "rejected" } : app)),
    )
    console.log(`${action} CA application ${appId}`, notes ? `with notes: ${notes}` : "")
  }

  const handleCAStatusChange = (caId, newStatus) => {
    setCurrentCAs((prev) => prev.map((ca) => (ca.id === caId ? { ...ca, status: newStatus } : ca)))
    console.log(`Changed CA ${caId} status to ${newStatus}`)
  }

  const handleReviewClick = (application) => {
    console.log("Review button clicked for application:", application.id)
    if (onCAReviewClick) {
      onCAReviewClick(application)
    }
  }

  const pendingApplications = caApplications.filter((app) => app.status === "pending")
  const processedApplications = caApplications.filter((app) => app.status !== "pending")

  return (
    <div className="space-y-6">
      {/* CA Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">{pendingApplications.length}</div>
            <div className="text-sm font-medium text-blue-600">Pending Applications</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">
              {currentCAs.filter((ca) => ca.status === "active").length}
            </div>
            <div className="text-sm font-medium text-green-600">Active CAs</div>
          </CardContent>
        </Card>
      </div>

      {/* CA Applications Management */}
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="applications">🛡️ CA Applications</TabsTrigger>
          <TabsTrigger value="current">👥 Current CAs</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <Tabs defaultValue="pending" className="w-full">
            <TabsList>
              <TabsTrigger value="pending">Pending Applications ({pendingApplications.length})</TabsTrigger>
              <TabsTrigger value="processed">Processed Applications ({processedApplications.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="pending">
              <Card>
                <CardHeader>
                  <CardTitle>🛡️ Pending CA Applications</CardTitle>
                  <p className="text-sm text-gray-600">Review and approve/reject CA applications</p>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application ID</TableHead>
                        <TableHead>Applicant Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Specialization</TableHead>
                        <TableHead>Qualifications</TableHead>
                        <TableHead>Applied Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-mono font-medium">{app.id}</TableCell>
                          <TableCell className="font-medium">{app.applicantName}</TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>{app.experience}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{app.specialization}</Badge>
                          </TableCell>
                          <TableCell>{app.qualifications}</TableCell>
                          <TableCell>{app.appliedDate}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleReviewClick(app)}
                              >
                                👁️ Review
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="processed">
              <Card>
                <CardHeader>
                  <CardTitle>📋 Processed CA Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application ID</TableHead>
                        <TableHead>Applicant Name</TableHead>
                        <TableHead>Specialization</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Applied Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {processedApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-mono font-medium">{app.id}</TableCell>
                          <TableCell className="font-medium">{app.applicantName}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{app.specialization}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={app.status === "approved" ? "default" : "destructive"}>
                              {app.status === "approved" ? "✅" : "❌"} {app.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{app.appliedDate}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              👁️ View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="current">
          <Card>
            <CardHeader>
              <CardTitle>👥 Current CAs Management</CardTitle>
              <p className="text-sm text-gray-600">Manage existing CA members and their assignments</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CA ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Assigned Cases</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentCAs.map((ca) => (
                    <TableRow key={ca.id}>
                      <TableCell className="font-mono font-medium">{ca.id}</TableCell>
                      <TableCell className="font-medium">{ca.name}</TableCell>
                      <TableCell>{ca.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ca.specialization}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{ca.assignedCases} cases</Badge>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue={ca.status} onValueChange={(value) => handleCAStatusChange(ca.id, value)}>
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">🟢 Active</SelectItem>
                            <SelectItem value="inactive">🔴 Inactive</SelectItem>
                            <SelectItem value="suspended">⏸️ Suspended</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>{ca.joinDate}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            ✏️ Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            📋 Assign Case
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
