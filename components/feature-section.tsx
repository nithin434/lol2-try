"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mail, Target, Zap, ArrowRight, CheckCircle, TrendingUp, DollarSign } from "lucide-react"

const features = [
  {
    id: "resume-analyzer",
    icon: Brain,
    title: "AI Resume Analyzer That Actually Works",
    subtitle: "Stop getting auto-rejected by ATS robots",
    description:
      "Our AI scans your resume like Fortune 500 ATS systems do. Get the exact keywords, format, and content that gets you past the robots and in front of humans.",
    benefits: [
      "96% ATS pass rate (vs 23% industry average)",
      "Instant keyword optimization for any job",
      "Format fixes that recruiters love",
      "Content suggestions that get interviews",
    ],
    results: "5x more interviews guaranteed",
    stats: [
      { label: "ATS Pass Rate", value: "96%", color: "emerald" },
      { label: "Avg Interview Increase", value: "5x", color: "blue" },
      { label: "Time to Results", value: "< 5 min", color: "purple" },
    ],
    hook: "Why 97% of resumes get auto-rejected (and how to be in the 3%)",
  },
  {
    id: "cold-email-generator",
    icon: Mail,
    title: "Cold Email Generator That Gets Responses",
    subtitle: "Turn ignored emails into interview invitations",
    description:
      "Stop sending generic emails that get deleted. Our AI writes personalized cold emails that recruiters actually open, read, and respond to.",
    benefits: [
      "67% average response rate (vs 3% typical)",
      "Personalized for each company/role",
      "Follow-up sequences that convert",
      "Templates from successful hires",
    ],
    results: "3x more recruiter responses",
    stats: [
      { label: "Response Rate", value: "67%", color: "emerald" },
      { label: "Time Saved", value: "90%", color: "blue" },
      { label: "Interview Conversion", value: "3x", color: "purple" },
    ],
    hook: "The 3-sentence email that got 12 FAANG interviews",
  },
  {
    id: "job-matching",
    icon: Target,
    title: "Smart Job Matching & Salary Intel",
    subtitle: "Find hidden opportunities and know your worth",
    description:
      "Discover jobs that match your exact skills and get insider salary data. Know exactly what to ask for and which companies are hiring people like you.",
    benefits: [
      "Hidden job opportunities not on job boards",
      "Real salary data from recent hires",
      "Company culture fit analysis",
      "Negotiation scripts that work",
    ],
    results: "$45K average salary increase",
    stats: [
      { label: "Avg Salary Increase", value: "$45K", color: "emerald" },
      { label: "Hidden Jobs Found", value: "80%", color: "blue" },
      { label: "Negotiation Success", value: "92%", color: "purple" },
    ],
    hook: "Why you're probably underpaid by $30K+ (and how to fix it)",
  },
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("features")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="bg-emerald-600 text-white mb-4">
            <Zap className="w-4 h-4 mr-2" />
            The Complete Job Search Arsenal
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stop Playing Job Search
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
              {" "}
              Guessing Games
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-gray-900">Every tool you need to dominate your job search.</span> No more
            wondering why you're not getting interviews.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              id={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-emerald-600 font-semibold mb-3">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {feature.stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-emerald-50 transition-colors duration-300">
                    <div className={`text-lg font-bold text-${stat.color}-600`}>{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Results Badge */}
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg mb-6 group-hover:bg-emerald-100 transition-colors duration-300">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">{feature.results}</span>
              </div>

              {/* Pro Tip */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-800">Pro Tip</span>
                </div>
                <p className="text-sm text-yellow-700">{feature.hook}</p>
              </div>

              {/* CTA Button */}
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Try This Tool Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 max-w-4xl mx-auto border border-emerald-100 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Stop Getting Rejected?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Join 2,847 people who got hired this month using our AI-powered tools.
              <span className="font-semibold text-gray-900"> Your dream job is waiting.</span>
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">96%</div>
                <div className="text-sm text-gray-600">ATS Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">5x</div>
                <div className="text-sm text-gray-600">More Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">$45K</div>
                <div className="text-sm text-gray-600">Avg Salary Increase</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
                Start Getting Interviews Now - FREE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4">
                View Success Stories
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Results in 5 minutes • Free forever plan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
