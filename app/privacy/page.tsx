"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Sparkles } from "lucide-react"

export default function PrivacyPage() {
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
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                <Lock className="w-4 h-4 mr-2" />
                Privacy Policy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Privacy
                </span>{" "}
                Matters
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're committed to protecting your personal information and being transparent about how we collect, use,
                and share your data.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Database,
                  title: "Information We Collect",
                  content: [
                    "Personal Information: Name, email address, phone number, and professional details you provide when creating an account.",
                    "Resume Data: Content of resumes, cover letters, and job descriptions you upload for optimization.",
                    "Usage Data: How you interact with our platform, including features used and time spent.",
                    "Technical Data: IP address, browser type, device information, and cookies for platform functionality.",
                  ],
                },
                {
                  icon: Eye,
                  title: "How We Use Your Information",
                  content: [
                    "Provide and improve our AI-powered resume optimization and career services.",
                    "Personalize your experience and provide relevant job market insights.",
                    "Communicate with you about your account, updates, and promotional offers.",
                    "Analyze usage patterns to enhance our platform's performance and features.",
                    "Ensure platform security and prevent fraudulent activities.",
                  ],
                },
                {
                  icon: UserCheck,
                  title: "Information Sharing",
                  content: [
                    "We never sell your personal information to third parties.",
                    "Service Providers: We may share data with trusted partners who help us operate our platform (e.g., cloud hosting, analytics).",
                    "Legal Requirements: We may disclose information if required by law or to protect our rights and users' safety.",
                    "Business Transfers: In case of merger or acquisition, your information may be transferred to the new entity.",
                    "With Your Consent: We may share information for other purposes with your explicit consent.",
                  ],
                },
                {
                  icon: Lock,
                  title: "Data Security",
                  content: [
                    "We use industry-standard encryption (AES-256) to protect your data in transit and at rest.",
                    "Regular security audits and penetration testing to identify and fix vulnerabilities.",
                    "Access controls ensure only authorized personnel can access your information.",
                    "Secure data centers with 24/7 monitoring and backup systems.",
                    "We retain your data only as long as necessary to provide our services or as required by law.",
                  ],
                },
                {
                  icon: Globe,
                  title: "Your Rights",
                  content: [
                    "Access: Request a copy of the personal information we hold about you.",
                    "Correction: Update or correct inaccurate personal information.",
                    "Deletion: Request deletion of your personal information (subject to legal requirements).",
                    "Portability: Request your data in a machine-readable format.",
                    "Opt-out: Unsubscribe from marketing communications at any time.",
                    "Account Deletion: Delete your account and associated data through your account settings.",
                  ],
                },
              ].map((section, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                      <section.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400 leading-relaxed flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Cookies Section */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    <Sparkles className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    Cookies and Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>
                      We use cookies and similar technologies to enhance your experience on our platform. These include:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">Essential Cookies:</strong> Required for basic platform
                          functionality and security.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">Analytics Cookies:</strong> Help us understand how users
                          interact with our platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">Preference Cookies:</strong> Remember your settings and
                          preferences.
                        </span>
                      </li>
                    </ul>
                    <p>
                      You can manage your cookie preferences through your browser settings or our cookie consent banner.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                      If you have any questions about this Privacy Policy or how we handle your data, please don't
                      hesitate to contact us.
                    </p>
                    <div className="space-y-2 text-gray-400">
                      <p>
                        Email: <span className="text-emerald-400">privacy@syntexa.com</span>
                      </p>
                      <p>Address: Syntexa Technologies, Bangalore, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
