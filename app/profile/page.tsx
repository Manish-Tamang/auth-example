"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useState } from "react"

export default function ProfilePage() {
  // Mock user data - in a real app, this would come from your auth system
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(user.name)

  const handleSave = () => {
    setUser({ ...user, name: editedName })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedName(user.name)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
           Home
          </Link>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" className="text-sm bg-transparent border-gray-300">
                Change Photo
              </Button>
            </div>

            {/* User Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="w-full border-gray-300"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-md text-gray-900">{user.name}</div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="p-3 bg-gray-50 rounded-md text-gray-900">{user.email}</div>
                <p className="text-xs text-gray-500">
                  Email cannot be changed. Contact support if you need to update your email.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {isEditing ? (
                <>
                  <Button onClick={handleSave} className="bg-black hover:bg-gray-800 text-white">
                    Save Changes
                  </Button>
                  <Button onClick={handleCancel} variant="outline" className="border-gray-300 bg-transparent">
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="bg-black hover:bg-gray-800 text-white">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Account Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent border-gray-300">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent border-gray-300">
                Download My Data
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
