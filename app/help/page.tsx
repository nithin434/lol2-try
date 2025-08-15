"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, BarChart3, Shield, CreditCard, MessageCircle, Mail, Phone, ChevronRight, Play, Download, ExternalLink, BookOpen, Video, HelpCircle, CheckCircle, Clock, Star } from 'lucide-react'
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { motion } from "framer-motion"

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of ResumeAI",
    icon: BookOpen,
    articles: [
      { title: "How to upload your first resume", views: "12.5K", duration: "3 min read" },
      { title: "Understanding your ATS score", views: "8.2K", duration: "5 min read" },
      { title: "Setting up your profile", views: "6.1K", duration: "4 min read" },
      { title: "Navigating the dashboard", views: "4.8K", duration: "2 min read" },
    ],
  },
  {
    id: "resume-optimization",
    title: "Resume Optimization",
    description: "Improve your resume with AI",
    icon: FileText,
    articles: [
      { title: "Best practices for ATS optimization", views: "15.3K", duration: "8 min read" },
      { title: "How to add keywords effectively", views: "11.7K", duration: "6 min read" },
      { title: "Formatting guidelines for success", views: "9.4K", duration: "7 min read" },
      { title: "Common resume mistakes to avoid", views: "7.8K", duration: "5 min read" },
    ],
  },
  {
    id: "job-search",
    title: "Job Search",
    description: "Find and apply to the right jobs",
    icon: Search,
    articles: [
      { title: "Using job matching effectively", views: "13.2K", duration: "6 min read" },
      { title: "Writing compelling cover letters", views: "10.5K", duration: "9 min read" },
      { title: "Salary negotiation strategies", views: "8.9K", duration: "12 min read" },
      { title: "Interview preparation tips", views: "7.3K", duration: "10 min read" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    description: "Track your job search performance",
    icon: BarChart3,
    articles: [
      { title: "Understanding your analytics dashboard", views: "6.7K", duration: "5 min read" },
      { title: "Interpreting application metrics", views: "5.2K", duration: "7 min read" },
      { title: "Using insights to improve results", views: "4.1K", duration: "8 min read" },
      { title: "Setting up performance goals", views: "3.5K", duration: "4 min read" },
    ],
  },
]

const popularArticles = [
  {
    title: "Complete Guide to ATS Optimization",
    description: "Everything you need to know about beating applicant tracking systems",
    category: "Resume",
    readTime: "15 min read",
    rating: 4.9,
    views: "25.3K",
  },
  {
    title: "How to Get 5x More Interview Invitations",
    description: "Proven strategies to dramatically increase your response rate",
    category: "Job Search",
    readTime: "12 min read",
    rating: 4.8,
    views: "18.7K",
  },
  {
    title: "Salary Negotiation Masterclass",
    description: "Step-by-step guide to negotiating your dream salary",
    category: "Career",
    readTime: "20 min read",
    rating: 4.9,
    views: "16.2K",
  },
]

const videoTutorials = [
  {
    title: "Getting Started with ResumeAI",
    duration: "5:32",
    thumbnail: "/placeholder.svg?height=120&width=200&text=Video+1",
    views: "12.5K",
  },
  {
    title: "Resume Upload and Analysis",
    duration: "3:45",
    thumbnail: "/placeholder.svg?height=120&width=200&text=Video+2",
    views: "8.9K",
  },
  {
    title: "Understanding Your Dashboard",
    duration: "7:21",
    thumbnail: "/placeholder.svg?height=120&width=200&text=Video+3",
    views: "6.3K",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-30">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-black">Help Center</h1>
              <p className="text-gray-600">Find answers, guides, and get support for your job search</p>
            </div>
          </header>

          <main className="p-4 lg:p-6 space-y-8">
            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">How can we help you?</h2>
                <p className="text-gray-600">Search our knowledge base or browse categories below</p>
              </div>
              
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, guides, or tutorials..."
                  className="pl-12 h-14 text-lg border-gray-300 focus:border-black focus:ring-black/20 rounded-xl"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {["ATS optimization", "Resume upload", "Job matching", "Analytics", "Billing"].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(tag)}
                    className="border-gray-300 hover:border-black"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </motion.div>

            <Tabs defaultValue="articles" className="space-y-6">
              <TabsList className="bg-gray-100 border border-gray-200 p-1 rounded-xl">
                <TabsTrigger
                  value="articles"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Articles
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-8">
                {/* Popular Articles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-black mb-4">Popular Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {popularArticles.map((article, index) => (
                      <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="pt-6">
                          <div className="space-y-3">
                            <Badge variant="outline" className="border-gray-300">
                              {article.category}
                            </Badge>
                            <h4 className="font-semibold text-black">{article.title}</h4>
                            <p className="text-sm text-gray-600">{article.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {article.readTime}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-yellow-500" />
                                  {article.rating}
                                </span>
                              </div>
                              <span>{article.views} views</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>

                {/* Help Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-black mb-4">Browse by Category</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {helpCategories.map((category, index) => (
                      <Card key={category.id} className="bg-white border border-gray-200">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                              <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-black">{category.title}</CardTitle>
                              <CardDescription>{category.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {category.articles.map((article, articleIndex) => (
                              <div
                                key={articleIndex}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                              >
                                <div>
                                  <h5 className="font-medium text-black">{article.title}</h5>
                                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                    <span>{article.views} views</span>
                                    <span>•</span>
                                    <span>{article.duration}</span>
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400" />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-black mb-4">Video Tutorials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoTutorials.map((video, index) => (
                      <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="pt-6">
                          <div className="space-y-3">
                            <div className="relative">
                              <img
                                src={video.thumbnail || "/placeholder.svg"}
                                alt={video.title}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                  <Play className="h-6 w-6 text-black ml-1" />
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                {video.duration}
                              </div>
                            </div>
                            <h4 className="font-semibold text-black">{video.title}</h4>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                                Watch Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-6">
                    <Card className="bg-white border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-black">Contact Support</CardTitle>
                        <CardDescription>Get help from our support team</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                          <MessageCircle className="h-6 w-6 text-black" />
                          <div>
                            <h4 className="font-semibold text-black">Live Chat</h4>
                            <p className="text-sm text-gray-600">Available 24/7 for instant help</p>
                          </div>
                          <Button size="sm" className="ml-auto bg-black hover:bg-gray-800">
                            Start Chat
                          </Button>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                          <Mail className="h-6 w-6 text-black" />
                          <div>
                            <h4 className="font-semibold text-black">Email Support</h4>
                            <p className="text-sm text-gray-600">Response within 24 hours</p>
                          </div>
                          <Button size="sm" variant="outline" className="ml-auto border-gray-300">
                            Send Email
                          </Button>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                          <Phone className="h-6 w-6 text-black" />
                          <div>
                            <h4 className="font-semibold text-black">Phone Support</h4>
                            <p className="text-sm text-gray-600">Mon-Fri, 9AM-6PM PST</p>
                          </div>
                          <Button size="sm" variant="outline" className="ml-auto border-gray-300">
                            Call Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black text-white border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-white">Premium Support</CardTitle>
                        <CardDescription className="text-gray-300">
                          Get priority support with faster response times
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Priority queue access</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Dedicated support agent</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Screen sharing sessions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Phone support included</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-white text-black hover:bg-gray-100">
                          Upgrade to Premium
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-white border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-black">Frequently Asked Questions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              question: "How do I upload my resume?",
                              answer: "Click the 'Upload Resume' button in your dashboard and select your file.",
                            },
                            {
                              question: "What file formats are supported?",
                              answer: "We support PDF, DOC, and DOCX files up to 5MB in size.",
                            },
                            {
                              question: "How is my ATS score calculated?",
                              answer: "Our AI analyzes format, keywords, and content structure against ATS standards.",
                            },
                            {
                              question: "Can I cancel my subscription anytime?",
                              answer: "Yes, you can cancel your subscription at any time from your settings.",
                            },
                          ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                              <h5 className="font-semibold text-black mb-2">{faq.question}</h5>
                              <p className="text-sm text-gray-600">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-black">Resources</CardTitle>
                        <CardDescription>Additional resources to help you succeed</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button variant="outline" className="w-full justify-between border-gray-300">
                          <span className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Resume Templates
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between border-gray-300">
                          <span className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Career Guide
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between border-gray-300">
                          <span className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            Webinar Series
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
