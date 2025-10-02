"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Users, CreditCard, AlertTriangle, Scale, Sparkles } from "lucide-react"

export default function TermsPage() {
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
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Terms of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Please read these terms carefully before using Syntexa. By accessing our platform, you agree to be bound
                by these terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2024</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Users,
                  title: "Acceptance of Terms",
                  content: [
                    "By creating an account or using Syntexa, you agree to these Terms of Service and our Privacy Policy.",
                    "You must be at least 18 years old or have parental consent to use our services.",
                    "You are responsible for maintaining the confidentiality of your account credentials.",
                    "You agree to provide accurate and complete information when creating your account.",
                    "We reserve the right to modify these terms at any time with notice to users.",
                  ],
                },
                {
                  icon: FileText,
                  title: "Use of Services",
                  content: [
                    "Syntexa provides AI-powered career optimization tools including resume analysis, cold email generation, and job search assistance.",
                    "You may use our services for personal, non-commercial purposes related to your career development.",
                    "You retain ownership of all content you upload, but grant us license to process it for service delivery.",
                    "You agree not to use our services for any illegal, harmful, or unauthorized purposes.",
                    "We reserve the right to suspend or terminate accounts that violate these terms.",
                  ],
                },
                {
                  icon: CreditCard,
                  title: "Subscription and Billing",
                  content: [
                    "Free accounts have limited features as described on our pricing page.",
                    "Paid subscriptions are billed monthly or annually based on your selected plan.",
                    "All fees are non-refundable except as required by law or our refund policy.",
                    "We offer a 30-day money-back guarantee for first-time subscribers.",
                    "Subscription fees may change with 30 days' notice to existing subscribers.",
                    "You can cancel your subscription at any time through your account settings.",
                  ],
                },
                {
                  icon: AlertTriangle,
                  title: "Prohibited Activities",
                  content: [
                    "Creating false or misleading resume content or professional credentials.",
                    "Using our services to spam recruiters or employers with unsolicited communications.",
                    "Attempting to reverse engineer, hack, or compromise our platform security.",
                    "Sharing your account credentials with others or creating multiple accounts.",
                    "Using our services in violation of any applicable laws or regulations.",
                    "Uploading malicious content, viruses, or harmful code to our platform.",
                  ],
                },
                {
                  icon: Scale,
                  title: "Intellectual Property",
                  content: [
                    "Syntexa and all related trademarks, logos, and content are owned by Syntexa Technologies.",
                    "Our AI algorithms, software, and platform design are protected by intellectual property laws.",
                    "You may not copy, modify, distribute, or create derivative works of our platform.",
                    "User-generated content remains your property, but you grant us rights to use it for service delivery.",
                    "We respect intellectual property rights and will respond to valid DMCA takedown notices.",
                  ],
                },
                {
                  icon: AlertTriangle,
                  title: "Disclaimers and Limitations",
                  content: [
                    "Syntexa provides tools to improve your job search but cannot guarantee employment outcomes.",
                    "Our AI recommendations are suggestions and should be reviewed before use.",
                    "We are not responsible for decisions made by employers or recruiters based on optimized content.",
                    "Our services are provided 'as is' without warranties of any kind.",
                    "We are not liable for indirect, incidental, or consequential damages arising from service use.",
                    "Our total liability is limited to the amount you paid for services in the past 12 months.",
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

              {/* Termination Section */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    <Sparkles className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    Account Termination
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>Either party may terminate the service relationship at any time:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">User Termination:</strong> You can delete your account at any
                          time through account settings.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">Service Termination:</strong> We may suspend or terminate
                          accounts for terms violations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        <span>
                          <strong className="text-white">Data Retention:</strong> Account data will be deleted within 30
                          days of termination.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                      If you have any questions about these Terms of Service, please contact our legal team.
                    </p>
                    <div className="space-y-2 text-gray-400">
                      <p>
                        Email: <span className="text-emerald-400">legal@syntexa.com</span>
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
