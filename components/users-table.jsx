"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function UsersTable() {
  const [users, setUsers] = useState([
    { id: 1, username: "john_doe", role: "user", status: "active", joinDate: "2024-01-10" },
    { id: 2, username: "jane_admin", role: "admin", status: "active", joinDate: "2024-01-08" },
    { id: 3, username: "mike_mod", role: "moderator", status: "active", joinDate: "2024-01-05" },
    { id: 4, username: "sarah_ca", role: "ca", status: "active", joinDate: "2024-01-03" },
    { id: 5, username: "alex_user", role: "user", status: "inactive", joinDate: "2024-01-01" },
  ])

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: newRole } : user)))
    console.log(`Changed user ${userId} role to ${newRole}`)
  }

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "moderator":
        return "bg-purple-100 text-purple-800"
      case "ca":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>👥 CURRENT USERS</CardTitle>
        <p className="text-sm text-gray-600">
          On clicking role, it must have option to change role for admin. So only edit option visible for admin.
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">USERNAME</TableHead>
              <TableHead className="font-bold">ROLE</TableHead>
              <TableHead className="font-bold">STATUS</TableHead>
              <TableHead className="font-bold">JOIN DATE</TableHead>
              <TableHead className="font-bold">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="font-mono">{user.id}</TableCell>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>
                  <Select defaultValue={user.role} onValueChange={(value) => handleRoleChange(user.id, value)}>
                    <SelectTrigger className={`w-32 ${getRoleBadgeColor(user.role)}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">👤 User</SelectItem>
                      <SelectItem value="ca">🛡️ CA</SelectItem>
                      <SelectItem value="moderator">⚖️ Moderator</SelectItem>
                      <SelectItem value="admin">👑 Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status === "active" ? "🟢" : "🔴"} {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-300 bg-transparent">
                        ℹ️ Info
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>👤 User Information</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">User ID:</label>
                            <p className="font-mono text-sm">{user.id}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Username:</label>
                            <p className="font-medium">{user.username}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Role:</label>
                            <Badge className={getRoleBadgeColor(user.role)}>
                              {user.role === "admin"
                                ? "👑"
                                : user.role === "moderator"
                                  ? "⚖️"
                                  : user.role === "ca"
                                    ? "🛡️"
                                    : "👤"}{" "}
                              {user.role}
                            </Badge>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Status:</label>
                            <Badge variant={user.status === "active" ? "default" : "secondary"}>
                              {user.status === "active" ? "🟢" : "🔴"} {user.status}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Join Date:</label>
                          <p>{user.joinDate}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Email:</label>
                          <p className="text-blue-600">{user.username}@company.com</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Last Login:</label>
                          <p>2024-01-20 14:30:25</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Total Sessions:</label>
                          <p>127 sessions</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
