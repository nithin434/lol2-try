"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  Users,
  Star,
  Target,
  Mail,
  TrendingUp,
  FileText,
  Bot,
  Sparkles,
} from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [atsScore, setAtsScore] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Animate ATS score
    const timer = setTimeout(() => {
      let current = 0
      const target = 93
      const increment = target / 50
      const scoreTimer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAtsScore(target)
          clearInterval(scoreTimer)
        } else {
          setAtsScore(Math.floor(current))
        }
      }, 30)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-500/30 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {["{ }", "< />", "[ ]", "( )", "&&", "||", "=>", "++"][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300 px-4 py-2 backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span className="relative">
                  Get Hired in 30 Days or Less
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm -z-10 animate-pulse"></div>
                </span>
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-white">Stop Getting</span>
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 animate-gradient relative">
                    Rejected
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-transparent blur-xl -z-10 animate-pulse"></div>
                  </span>
                </h1>

                <div className="space-y-3">
                  <p className="text-2xl text-gray-300 leading-relaxed">
                    <span className="text-white font-bold">97% of resumes never reach human eyes.</span>
                  </p>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Generic resumes get auto-rejected. Ignored cold emails. Missed opportunities.
                    <span className="text-emerald-400 font-semibold"> We fix this in minutes, not months.</span>
                  </p>
                </div>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Target, label: "ATS Pass Rate", value: "95%", color: "emerald" },
                  { icon: Mail, label: "Email Response", value: "3x", color: "blue" },
                  { icon: TrendingUp, label: "More Interviews", value: "5x", color: "purple" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <stat.icon
                      className={`w-6 h-6 text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
                <div className="relative flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">2,847 people got hired this month</span>
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
                <p className="text-emerald-400 text-sm relative">Join them before your dream job gets filled</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white transition-all duration-300 group text-lg px-8 py-4 shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">Start Free Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 group text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {["Free forever plan", "No credit card required", "Instant results"].map((text, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Resume Preview */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-8">
              {/* Resume Analysis Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Bot className="w-6 h-6 text-emerald-400" />
                      AI Resume Analysis
                    </h3>
                    <Badge
                      className={`${atsScore >= 90 ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"} transition-all duration-500`}
                    >
                      {atsScore}% ATS Score
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${atsScore}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Keywords optimized for Software Engineer roles</p>
                  </div>

                  {/* Analysis Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Industry Keywords", value: "23", icon: Target },
                      { label: "ATS Compatible", value: "✓", icon: CheckCircle },
                      { label: "Format Score", value: "A+", icon: FileText },
                      { label: "Impact Score", value: "9.2", icon: TrendingUp },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <item.icon className="w-4 h-4 text-emerald-400 group-hover/item:scale-110 transition-transform duration-300" />
                          <span className="text-emerald-400 font-semibold text-sm">{item.value}</span>
                        </div>
                        <p className="text-gray-400 text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Resume Preview */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-white/10 rounded w-full"></div>
                      <div className="h-3 bg-white/10 rounded w-5/6"></div>
                      <div className="space-y-2 mt-4">
                        <div className="h-2 bg-emerald-500/30 rounded w-1/2"></div>
                        <div className="h-2 bg-emerald-500/20 rounded w-2/3"></div>
                        <div className="h-2 bg-emerald-500/20 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cold Email Preview */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      Cold Email Preview
                    </h4>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">87% Response Rate</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-white font-medium text-sm">Subject: Your React team + my scaling experience</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Hi Sarah, I noticed Stripe's recent Series C and your team's focus on React performance. Having
                        scaled similar systems at Google...
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Company research included
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Personal connection made
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-white">Trusted by Professionals</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">4.9/5</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "10K+", label: "Active Users" },
                    { value: "50K+", label: "Resumes Created" },
                    { value: "95%", label: "Success Rate" },
                  ].map((stat, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
