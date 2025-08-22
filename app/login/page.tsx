"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function AuthPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  // Redirect if already authenticated
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    )
  }

  if (session) {
    // Use window.location for external redirect to avoid Next.js routing issues
    if (typeof window !== 'undefined') {
      window.location.href = "http://35.200.140.65:5000/my-resumes"
    }
    return null
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to external dashboard or handle login
      window.location.href = "https://your-dashboard-url.com"
    }, 1500)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to external dashboard or handle signup
      window.location.href = "https://your-dashboard-url.com"
    }, 1500)
  }

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)
    try {
      const result = await signIn(provider, { 
        callbackUrl: "http://35.200.140.65:5000/my-resumes",
        redirect: false 
      })
      
      if (result?.error) {
        console.error("Authentication error:", result.error)
        setIsLoading(false)
      }
      // If successful, the redirect will be handled by NextAuth
    } catch (error) {
      console.error("Authentication error:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <header className="container mx-auto px-4 py-6 z-10">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-12">
            <motion.div
              className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-emerald-200 px-8 py-4 rounded-3xl shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(5, 150, 105, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-wide">Syntexa</span>
            </motion.div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-10 bg-white/80 backdrop-blur-xl border border-emerald-200 p-1 rounded-2xl">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-700 rounded-xl transition-all duration-500 font-medium"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-700 rounded-xl transition-all duration-500 font-medium"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="text-center pb-8 pt-10">
                    <CardTitle className="text-4xl font-bold text-gray-900 mb-2">Welcome back</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Continue your career acceleration journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-gray-800 font-medium text-sm">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl text-base transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password" className="text-gray-800 font-medium text-sm">
                            Password
                          </Label>
                          <Link
                            href="#"
                            className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl text-base transition-all duration-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            <span>Signing in...</span>
                          </div>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    </form>

                    <div className="mt-8">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <Separator className="w-full bg-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-4 text-gray-500 font-medium tracking-wider">
                            Or continue with
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("google")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="currentColor"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </Button>
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("github")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("linkedin")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="signup">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="text-center pb-8 pt-10">
                    <CardTitle className="text-4xl font-bold text-gray-900 mb-2">Create account</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Start your career acceleration journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-10">
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-gray-800 font-medium text-sm">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl text-base transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="signup-email" className="text-gray-800 font-medium text-sm">
                          Email Address
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="name@example.com"
                          required
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl text-base transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="signup-password" className="text-gray-800 font-medium text-sm">
                          Password
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl text-base transition-all duration-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            <span>Creating account...</span>
                          </div>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </form>

                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <Separator className="w-full bg-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-4 text-gray-500 font-medium tracking-wider">
                            Or continue with
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("google")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="currentColor"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="currentColor"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </Button>
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("github")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() => handleSocialLogin("linkedin")}
                          className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium transition-all duration-300"
                          disabled={isLoading}
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-center text-gray-500">
                      By signing up, you agree to our{" "}
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}
