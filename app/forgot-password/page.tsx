"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Lock, Mail, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <header className="container mx-auto px-4 py-6 z-10">
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Login</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-12">
            <motion.div
              className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-3xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <Shield className="h-8 w-8 text-white" />
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <span className="font-bold text-2xl text-white tracking-wide">ResumeAI</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-gray-300" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/95 backdrop-blur-xl border border-gray-200 text-black shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-8 pt-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <CardTitle className="text-4xl font-bold text-black mb-2">Reset Password</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {!isSubmitted
                      ? "Enter your email and we'll send you a secure reset link"
                      : "Check your email for a secure reset link"}
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="px-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="email" className="text-gray-800 font-medium text-sm">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-black/20 h-14 rounded-xl text-base transition-all duration-300"
                        />
                        {email && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white h-14 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Mail className="mr-3 h-5 w-5" />
                            <span>Reset Password</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
                      className="flex justify-center mb-8"
                    >
                      <div className="h-24 w-24 rounded-3xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-black" />
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-black">Check your email</h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      We've sent a password reset link to{" "}
                      <span className="font-medium text-black bg-gray-100 px-3 py-1 rounded-lg">{email}</span>
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-medium px-8"
                        asChild
                      >
                        <Link href="/login">Return to Login</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center px-10 pb-10">
                <motion.div
                  className="text-xs text-center text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4 text-gray-600" />
                    <span>Secured by 256-bit encryption</span>
                  </div>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
