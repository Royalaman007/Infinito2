"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export function UsersTable({ onUserInfoClick }) {
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

  const handleInfoClick = (user) => {
    console.log("Info button clicked for user:", user.username)
    if (onUserInfoClick) {
      onUserInfoClick(user)
    }
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

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return "👑"
      case "moderator":
        return "⚖️"
      case "ca":
        return "🛡️"
      default:
        return "👤"
    }
  }

  const getStatusIcon = (status) => {
    return status === "active" ? "🟢" : "🔴"
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
                    {getStatusIcon(user.status)} {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground text-blue-600 border-blue-300 bg-transparent"
                    onClick={() => handleInfoClick(user)}
                  >
                    ℹ️ Info
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
