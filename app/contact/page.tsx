"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent! We'll get back to you within 24 hours.")
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
                <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
                Get in Touch
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Connect
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions about Syntexa? Want to explore partnership opportunities? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "hello@syntexa.com",
                    description: "We typically respond within 24 hours",
                    color: "emerald",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 98765 43210",
                    description: "Monday - Friday, 9 AM - 6 PM IST",
                    color: "blue",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Bangalore, India",
                    description: "Schedule an appointment",
                    color: "purple",
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <CardContent className="p-6">
                      <contact.icon
                        className={`w-8 h-8 text-${contact.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                      <p className={`text-${contact.color}-400 font-medium mb-1`}>{contact.content}</p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
                  <CardHeader className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-t-lg"></div>
                    <CardTitle className="text-2xl text-white relative flex items-center gap-2">
                      <Send className="w-6 h-6 text-emerald-400" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-gray-400 relative">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-300">
                            First Name *
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
                            Last Name *
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
                          Email Address *
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
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                          placeholder="Your Company (Optional)"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          required
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-300">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          className="mt-1 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative flex items-center gap-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How quickly can I see results?",
                    answer:
                      "Most users see immediate improvements in their ATS scores and start getting more interview calls within the first week of using Syntexa.",
                  },
                  {
                    question: "Is my data secure?",
                    answer:
                      "Absolutely. We use bank-level encryption and never share your personal information. Your career data is completely private and secure.",
                  },
                  {
                    question: "Do you offer refunds?",
                    answer:
                      "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with the results, we'll refund your payment in full.",
                  },
                  {
                    question: "Can I cancel anytime?",
                    answer:
                      "Absolutely. You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.",
                  },
                ].map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                <div className="relative">
                  <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Business Hours</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-2">Support Team</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM IST</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-2">Sales Team</h3>
                      <p className="text-gray-400">Monday - Friday: 8:00 AM - 8:00 PM IST</p>
                      <p className="text-gray-400">Saturday: 9:00 AM - 5:00 PM IST</p>
                      <p className="text-gray-400">Sunday: 10:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
