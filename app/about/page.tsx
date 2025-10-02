"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
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

  // Structured data for About page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Syntexa - AI Career Acceleration Company",
    "description": "Learn about Syntexa's mission to transform careers through AI-powered resume optimization, job matching, and career acceleration tools.",
    "url": "https://main.syntexa.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Syntexa",
      "description": "AI-powered career acceleration platform helping professionals optimize their resumes, generate cover letters, and accelerate their job search with advanced artificial intelligence.",
      "url": "https://main.syntexa.app",
      "logo": "https://main.syntexa.app/logo.png",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Syntexa Team"
      },
      "sameAs": [
        "https://twitter.com/syntexa",
        "https://linkedin.com/company/syntexa",
        "https://discord.gg/qNHAJzYQ"
      ],
      "serviceType": [
        "AI Resume Analysis",
        "Career Coaching",
        "Job Search Optimization",
        "Cover Letter Generation",
        "Cold Email Templates"
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Head>
        <title>About Syntexa - AI-Powered Career Acceleration Company | Our Mission & Story</title>
        <meta name="description" content="Discover Syntexa's mission to transform careers through AI-powered resume optimization, job matching, and career acceleration. Learn about our AI technology, team, and commitment to helping professionals succeed." />
        <meta name="keywords" content="about syntexa, AI career company, resume optimization company, career acceleration platform, AI recruiting technology, job search innovation, career coaching AI, professional development tools, resume analysis company, job matching algorithm, career growth platform" />
        <meta property="og:title" content="About Syntexa - AI Career Acceleration Company" />
        <meta property="og:description" content="Learn about Syntexa's mission to transform careers through AI-powered resume optimization and career acceleration tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://main.syntexa.app/about" />
        <meta property="og:image" content="https://main.syntexa.app/professional-linkedin-profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Syntexa - AI Career Company" />
        <meta name="twitter:description" content="Discover how Syntexa transforms careers through AI-powered resume optimization and career acceleration." />
        <meta name="twitter:image" content="https://main.syntexa.app/professional-linkedin-profile.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
        />
      </Head>
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="https://syntexa.app/upload">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative">Start Your Journey</span>
                    </Button>
                  </a>
                  <a 
                    href="https://discord.gg/qNHAJzYQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
