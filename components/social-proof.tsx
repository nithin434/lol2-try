"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Users, TrendingUp } from "lucide-react"

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



        {/* Enhanced Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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

        {/* Discord Community CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Discord pattern background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-lg"></div>
              <div className="absolute top-4 right-16 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 bg-white rounded-lg"></div>
              <div className="absolute bottom-4 left-16 w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <h3 className="text-2xl font-bold">Join Our Job Community</h3>
              </div>
              
              <p className="text-indigo-100 mb-6 text-lg leading-relaxed">
                Connect with <span className="font-semibold text-white">5,000+ job seekers</span> who are landing their dream roles. 
                Get exclusive tips, share experiences, and network with like-minded professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">Daily job tips & strategies</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Resume reviews & feedback</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">Interview prep sessions</span>
                </div>
              </div>

              <a 
                href="https://discord.gg/your-discord-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord Community
                <span className="text-sm opacity-75">→ Free Access</span>
              </a>

              <p className="text-indigo-200 text-sm mt-4">
                💬 <span className="font-medium">2,847 people</span> got hired this month with community support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
