"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApplicationsSection() {
  const [applications] = useState([
    { id: "APP001", type: "CA Application", status: "pending", date: "2024-01-15", applicant: "John Doe" },
    { id: "APP002", type: "Moderator Application", status: "pending", date: "2024-01-14", applicant: "Jane Smith" },
    { id: "APP003", type: "CA Application", status: "approved", date: "2024-01-13", applicant: "Mike Johnson" },
    { id: "APP004", type: "CA Application", status: "rejected", date: "2024-01-12", applicant: "Sarah Wilson" },
  ])

  const handleAction = (appId: string, action: "accept" | "reject") => {
    console.log(`${action} application ${appId}`)
    // Handle application action
  }

  const pendingApps = applications.filter((app) => app.status === "pending")
  const processedApps = applications.filter((app) => app.status !== "pending")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="received" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="received">Application Received: 24 📋</TabsTrigger>
          <TabsTrigger value="active">Application Active inc: 120 ✅</TabsTrigger>
        </TabsList>

        <TabsContent value="received">
          <Card>
            <CardHeader>
              <CardTitle>📋 Applications Received - Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingApps.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-mono font-medium">{app.id}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.date}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">⏳ {app.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleAction(app.id, "accept")}
                          >
                            ✅ Accept
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleAction(app.id, "reject")}>
                            ❌ Reject
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

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>✅ Active Applications - Similar Table as Previous</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processedApps.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-mono font-medium">{app.id}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.date}</TableCell>
                      <TableCell>
                        <Badge variant={app.status === "approved" ? "default" : "destructive"}>
                          {app.status === "approved" ? "✅" : "❌"} {app.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          👁️ View
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
    </div>
  )
}
