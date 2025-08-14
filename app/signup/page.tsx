"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // TODO: Implement email/password signup
    console.log("Email signup:", { name, email, password })
  }

  const handleGoogleSignUp = () => {
    // TODO: Implement Google signup
    console.log("Google signup")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            MP3 Tag Editor
          </Link>
        </div>
      </div>

      <main className="max-w-md mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
            <p className="text-gray-600">Sign up to get started with MP3 Tag Editor</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleGoogleSignUp}
              variant="outline"
              className="w-full py-3 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className="w-full border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="w-full border-gray-300"
                />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-3">
                Create account
              </Button>
            </form>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-black hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
