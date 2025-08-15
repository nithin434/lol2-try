"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Shield,
  Play,
  Calendar,
  Clock,
  Users,
  Sparkles,
  Bot,
  Target,
  Mail,
  TrendingUp,
  Zap,
} from "lucide-react"

export default function DemoPage() {
  const [isScheduling, setIsScheduling] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleScheduleDemo = (e: React.FormEvent) => {
    e.preventDefault()
    setIsScheduling(true)
    setTimeout(() => {
      setIsScheduling(false)
      alert("Demo scheduled! We'll send you a calendar invite shortly.")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-500/20 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {["AI", "ML", "NLP", "GPT", "ATS", "CV"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <header className="border-b bg-black/50 backdrop-blur-sm border-white/10 relative z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-emerald-400">Syn</span>
              <span className="text-white">texa</span>
            </span>
          </div>
        </div>
      </header>

      <main className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Live Demo
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                See{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Syntexa
                </span>{" "}
                Transform Your Career
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch a personalized demo and discover how Syntexa can accelerate your job search with AI-powered resume
                optimization and cold email personalization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Demo Video */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10"></div>
                    <div className="text-center relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer group/play shadow-lg hover:shadow-emerald-500/25">
                        <Play className="h-8 w-8 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                      </div>
                      <p className="text-white text-lg font-medium">Watch Full Demo</p>
                      <p className="text-gray-400 text-sm mt-2">5 minutes • Complete walkthrough</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4 text-center relative">
                    {[
                      { value: "95%", label: "ATS Pass Rate", color: "emerald" },
                      { value: "5x", label: "More Interviews", color: "blue" },
                      { value: "87%", label: "Email Response", color: "purple" },
                    ].map((stat, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div
                          className={`text-2xl font-bold text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Bot className="w-6 h-6 text-emerald-400" />
                    What You'll See in the Demo:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Target, text: "AI resume analysis and optimization in real-time" },
                      { icon: Mail, text: "Personalized cold email generation with recipient research" },
                      { icon: TrendingUp, text: "ATS compatibility scoring and improvement suggestions" },
                      { icon: Zap, text: "Cover letter crafting tailored to specific job postings" },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300"
                      >
                        <item.icon className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Schedule Demo Form */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
                  <CardHeader className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-t-lg"></div>
                    <CardTitle className="text-2xl text-white relative flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-emerald-400" />
                      Schedule a Personal Demo
                    </CardTitle>
                    <p className="text-gray-400 relative">
                      Get a customized walkthrough with one of our career acceleration experts.
                    </p>
                  </CardHeader>
                  <CardContent className="relative">
                    <form onSubmit={handleScheduleDemo} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-300">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            required
                            className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-300">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            required
                            className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-300">
                          Work Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-300">
                          Company
                        </Label>
                        <Input
                          id="company"
                          required
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <Label htmlFor="role" className="text-gray-300">
                          Current Role
                        </Label>
                        <Input
                          id="role"
                          required
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                          placeholder="Software Engineer"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isScheduling}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative">{isScheduling ? "Scheduling..." : "Schedule Demo"}</span>
                      </Button>
                    </form>

                    <div className="mt-6 space-y-4">
                      {[
                        { icon: Calendar, text: "Available Monday - Friday, 9 AM - 6 PM IST" },
                        { icon: Clock, text: "30-minute personalized session" },
                        { icon: Users, text: "One-on-one with career expert" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300 group"
                        >
                          <item.icon className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Don't wait for the perfect moment. Start optimizing your career today with our free plan.
                </p>
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">Start Free Trial</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
