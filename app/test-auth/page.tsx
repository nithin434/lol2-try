"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestAuthPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading session...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Authentication Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {session ? (
            <>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Status: <span className="text-green-600 font-medium">Authenticated</span></p>
                <p className="text-sm text-gray-600">Email: <span className="font-medium">{session.user?.email}</span></p>
                <p className="text-sm text-gray-600">Name: <span className="font-medium">{session.user?.name}</span></p>
                {session.user?.id && (
                  <p className="text-sm text-gray-600">User ID: <span className="font-medium">{session.user.id}</span></p>
                )}
              </div>
              <div className="flex space-x-2">
                <Button 
                  onClick={() => window.location.href = "http://35.200.140.65:5000/my-resumes"}
                  className="flex-1"
                >
                  Go to Backend
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600">Status: <span className="text-red-600 font-medium">Not Authenticated</span></p>
              <Button 
                onClick={() => window.location.href = "/login"}
                className="w-full"
              >
                Go to Login
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
