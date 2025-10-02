"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Users, Zap, Heart, Globe, Award, TrendingUp, Sparkles, Lock } from "lucide-react"

export default function AboutPage() {
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
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            {/* Hero Section */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                About Syntexa
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Revolutionizing Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Acceleration
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're on a mission to eliminate career barriers and help professionals land their dream jobs through
                AI-powered optimization and personalization.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Target className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To democratize career success by providing AI-powered tools that level the playing field. We
                      believe every professional deserves access to the same optimization techniques used by top-tier
                      candidates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Globe className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      A world where career advancement is based on merit and potential, not on access to expensive
                      career coaches or insider knowledge. We're building the future of professional development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Users, value: "10K+", label: "Active Users", color: "emerald" },
                { icon: TrendingUp, value: "95%", label: "Success Rate", color: "blue" },
                { icon: Award, value: "50K+", label: "Resumes Optimized", color: "purple" },
                { icon: Zap, value: "87%", label: "Email Response Rate", color: "orange" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group text-center"
                >
                  <CardContent className="p-6">
                    <stat.icon
                      className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Story */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                  <div className="space-y-6 text-gray-400 leading-relaxed">
                    <p>
                      Syntexa was born from a simple observation: 97% of resumes never reach human eyes. Despite having
                      the right skills and experience, countless talented professionals were being filtered out by
                      Applicant Tracking Systems (ATS) before they could even showcase their potential.
                    </p>
                    <p>
                      Our founders, having experienced this frustration firsthand, decided to level the playing field.
                      They assembled a team of AI researchers, career experts, and former recruiters to build a platform
                      that could decode the hidden requirements of modern hiring systems.
                    </p>
                    <p>
                      Today, Syntexa combines cutting-edge AI with deep industry insights to help professionals not just
                      pass ATS filters, but create compelling narratives that resonate with both algorithms and humans.
                      We're not just optimizing resumes – we're transforming careers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Heart,
                    title: "Human-Centric",
                    description:
                      "Technology should serve people, not the other way around. Every feature we build puts human success at the center.",
                    color: "red",
                  },
                  {
                    icon: Lock,
                    title: "Privacy First",
                    description:
                      "Your career data is sacred. We use bank-level security and never share your information without explicit consent.",
                    color: "emerald",
                  },
                  {
                    icon: Zap,
                    title: "Continuous Innovation",
                    description:
                      "The job market evolves rapidly. We constantly update our AI models to stay ahead of industry trends and requirements.",
                    color: "blue",
                  },
                ].map((value, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <CardContent className="p-6 text-center">
                      <value.icon
                        className={`w-12 h-12 text-${value.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who have already accelerated their careers with Syntexa.
                </p>
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">Start Your Journey</span>
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
