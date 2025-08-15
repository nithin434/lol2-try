"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Shield, Search, Calendar, Clock, User, ArrowRight, Sparkles } from "lucide-react"

export default function BlogsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "10 ATS Resume Optimization Secrets That Actually Work in 2024",
      excerpt:
        "Discover the latest ATS algorithms and how to optimize your resume to pass through automated screening systems with a 95% success rate.",
      category: "Resume Tips",
      author: "Sarah Chen",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      image: "/resume-optimization.png",
      featured: true,
    },
    {
      id: 2,
      title: "Cold Email Templates That Get 87% Response Rates",
      excerpt:
        "Learn the psychology behind effective cold emails and get access to proven templates that have helped thousands land interviews.",
      category: "Cold Outreach",
      author: "Mike Rodriguez",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      image: "/email-templates.png",
    },
    {
      id: 3,
      title: "Salary Negotiation: How to Increase Your Offer by 25%",
      excerpt:
        "Master the art of salary negotiation with data-driven strategies and scripts that have helped professionals secure better compensation.",
      category: "Career Growth",
      author: "Emily Johnson",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      image: "/salary-negotiation-meeting.png",
    },
    {
      id: 4,
      title: "LinkedIn Profile Optimization: From Zero to Hero",
      excerpt:
        "Transform your LinkedIn profile into a lead magnet that attracts recruiters and opportunities with these proven optimization techniques.",
      category: "LinkedIn",
      author: "David Park",
      date: "Jan 8, 2024",
      readTime: "10 min read",
      image: "/professional-linkedin-profile.png",
    },
    {
      id: 5,
      title: "5 Cover Letter Mistakes That Kill Your Chances",
      excerpt:
        "Avoid these common cover letter pitfalls that immediately disqualify candidates and learn what hiring managers actually want to see.",
      category: "Cover Letters",
      author: "Lisa Wang",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      image: "/cover-letter-mistakes.png",
    },
    {
      id: 6,
      title: "Remote Work Interview Preparation: Complete Guide",
      excerpt:
        "Everything you need to know about acing remote job interviews, from technical setup to answering behavioral questions effectively.",
      category: "Interview Prep",
      author: "Alex Thompson",
      date: "Jan 3, 2024",
      readTime: "15 min read",
      image: "/placeholder-b6vhs.png",
    },
  ]

  const categories = [
    "All",
    "Resume Tips",
    "Cold Outreach",
    "Career Growth",
    "LinkedIn",
    "Cover Letters",
    "Interview Prep",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Career Insights
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expert insights, proven strategies, and actionable tips to accelerate your career growth and land your
                dream job.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {selectedCategory === "All" && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Article</h2>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      <img
                        src={blogPosts[0].image || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 w-fit mb-4">
                        {blogPosts[0].category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{blogPosts[0].date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-fit group/btn">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(selectedCategory === "All" ? 1 : 0).map((post, index) => (
                <Card
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 hover:text-white backdrop-blur-sm w-full group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">No articles found matching your search.</div>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                  className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="mt-20">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                      Get the latest career insights, job market trends, and optimization tips delivered to your inbox
                      weekly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <Input
                        placeholder="Enter your email"
                        className="bg-white/5 border-white/20 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
                      />
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Subscribe</Button>
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
