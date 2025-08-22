"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Users, TrendingUp, Clock } from "lucide-react"

const companies = [
  {
    name: "Google",
    logo: "/placeholder.svg?height=60&width=120&text=Google",
    hired: 127,
    avgSalary: "$165K",
    recentHire: "2 days ago",
  },
  {
    name: "Meta",
    logo: "/placeholder.svg?height=60&width=120&text=Meta",
    hired: 89,
    avgSalary: "$158K",
    recentHire: "1 day ago",
  },
  {
    name: "Amazon",
    logo: "/placeholder.svg?height=60&width=120&text=Amazon",
    hired: 156,
    avgSalary: "$142K",
    recentHire: "3 hours ago",
  },
  {
    name: "Microsoft",
    logo: "/placeholder.svg?height=60&width=120&text=Microsoft",
    hired: 94,
    avgSalary: "$152K",
    recentHire: "5 hours ago",
  },
  {
    name: "Apple",
    logo: "/placeholder.svg?height=60&width=120&text=Apple",
    hired: 73,
    avgSalary: "$168K",
    recentHire: "1 day ago",
  },
  {
    name: "Netflix",
    logo: "/placeholder.svg?height=60&width=120&text=Netflix",
    hired: 45,
    avgSalary: "$175K",
    recentHire: "6 hours ago",
  },
]

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer at Google",
    content:
      "I was getting zero responses for 6 months. ResumeAI fixed my resume and I got 3 Google interviews in 2 weeks. Now I'm making $165K!",
    rating: 5,
    beforeAfter: "0 → 12 interviews",
    salaryIncrease: "+$45K",
    timeToHire: "14 days",
    avatar: "/placeholder.svg?height=50&width=50&text=AC",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager at Meta",
    content:
      "The cold email templates are insane. 67% response rate from recruiters vs my old 3%. Landed my dream PM role at Meta!",
    rating: 5,
    beforeAfter: "3% → 67% response rate",
    salaryIncrease: "+$38K",
    timeToHire: "21 days",
    avatar: "/placeholder.svg?height=50&width=50&text=SW",
  },
  {
    name: "Michael Rodriguez",
    role: "Data Scientist at Amazon",
    content:
      "Was stuck in a dead-end job for 3 years. ResumeAI's ATS optimization got me past the robots and into Amazon. Life-changing!",
    rating: 5,
    beforeAfter: "23% → 96% ATS score",
    salaryIncrease: "+$52K",
    timeToHire: "18 days",
    avatar: "/placeholder.svg?height=50&width=50&text=MR",
  },
]

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("social-proof")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="social-proof" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="bg-black text-white mb-4">
            <Users className="w-4 h-4 mr-2" />
            2,847 People Hired This Month
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Users Get Hired at
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
              {" "}
              Dream Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-black">Real people. Real results. Real salaries.</span> Join thousands
            who've transformed their careers in weeks, not years.
          </p>
        </div>

        {/* Live Activity Feed */}
        <div
          className={`bg-black text-white rounded-2xl p-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Live Hiring Activity</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-green-400" />
              <span>Jessica M. just got hired at Apple - $168K</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-green-400" />
              <span>David L. landed Microsoft role - $152K</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-green-400" />
              <span>Maria S. joined Google team - $165K</span>
            </div>
          </div>
        </div>

        {/* Company Grid with Enhanced Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-black text-lg">{company.hired}</div>
                  <div className="text-sm text-gray-600">hired</div>
                  <div className="text-xs text-green-600 font-semibold">{company.avgSalary} avg</div>
                  <div className="text-xs text-gray-500">Last hire: {company.recentHire}</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                +{company.hired}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-black mb-2">10,000+</div>
            <div className="text-gray-600 font-medium">Resumes Optimized</div>
            <div className="text-sm text-green-600 mt-1">This month: +2,847</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-black mb-2">96%</div>
            <div className="text-gray-600 font-medium">ATS Pass Rate</div>
            <div className="text-sm text-green-600 mt-1">Industry avg: 23%</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-black mb-2">5x</div>
            <div className="text-gray-600 font-medium">More Interviews</div>
            <div className="text-sm text-green-600 mt-1">Avg: 2.3 → 11.7 per month</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-black mb-2">$45K</div>
            <div className="text-gray-600 font-medium">Avg Salary Increase</div>
            <div className="text-sm text-green-600 mt-1">Range: $25K - $85K</div>
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-bold text-black">{testimonial.beforeAfter}</div>
                  <div className="text-xs text-gray-600">Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600">{testimonial.salaryIncrease}</div>
                  <div className="text-xs text-gray-600">Salary Boost</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-green-600 font-medium">Hired in {testimonial.timeToHire}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't Let Your Dream Job Get Filled</h3>
            <p className="text-gray-300 mb-6">
              <span className="text-white font-semibold">2,847 people got hired this month.</span> Your competition is
              using AI. Are you?
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">Join 50,000+ Job Seekers Getting Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
