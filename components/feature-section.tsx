"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Mail, Target, Zap, ArrowRight, Play, CheckCircle, Clock, DollarSign } from "lucide-react"

const features = [
  {
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
    demo: "/placeholder.svg?height=300&width=400&text=Resume+Analyzer+Demo",
    hook: "Why 97% of resumes get auto-rejected (and how to be in the 3%)",
  },
  {
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
    demo: "/placeholder.svg?height=300&width=400&text=Email+Generator+Demo",
    hook: "The 3-sentence email that got 12 FAANG interviews",
  },
  {
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
    demo: "/placeholder.svg?height=300&width=400&text=Job+Matching+Demo",
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
          <Badge className="bg-black text-white mb-4">
            <Zap className="w-4 h-4 mr-2" />
            The Complete Job Search Arsenal
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Stop Playing Job Search
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
              {" "}
              Guessing Games
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-black">Every tool you need to dominate your job search.</span> No more
            wondering why you're not getting interviews.
          </p>
        </div>

        {/* Feature Tabs */}
        <div
          className={`flex flex-col lg:flex-row gap-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Feature List */}
          <div className="lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? "bg-black text-white shadow-2xl scale-105 border-black"
                    : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border-gray-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${activeFeature === index ? "bg-white/20" : "bg-gray-100"}`}>
                    <feature.icon className={`w-6 h-6 ${activeFeature === index ? "text-white" : "text-black"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className={`text-xl font-bold mb-1 ${activeFeature === index ? "text-white" : "text-black"}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${activeFeature === index ? "text-gray-300" : "text-gray-600"}`}>
                        {feature.subtitle}
                      </p>
                    </div>
                    <p className={`mb-4 ${activeFeature === index ? "text-gray-200" : "text-gray-600"}`}>
                      {feature.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle
                            className={`w-4 h-4 ${activeFeature === index ? "text-green-400" : "text-green-500"}`}
                          />
                          <span className={`text-sm ${activeFeature === index ? "text-gray-200" : "text-gray-600"}`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Results Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                        activeFeature === index ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-800"
                      }`}
                    >
                      <DollarSign className="w-4 h-4" />
                      {feature.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Demo */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-black to-gray-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="text-white font-medium">{features[activeFeature].title}</div>
                  </div>
                </div>
                <div className="p-8">
                  {/* Hook */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-semibold text-yellow-800">Pro Tip</span>
                    </div>
                    <p className="text-sm text-yellow-700">{features[activeFeature].hook}</p>
                  </div>

                  <img
                    src={features[activeFeature].demo || "/placeholder.svg"}
                    alt={`${features[activeFeature].title} Demo`}
                    className="w-full h-64 object-cover rounded-lg mb-6 border border-gray-200"
                  />
                  <div className="flex gap-4">
                    <Button className="bg-black hover:bg-gray-800 flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Try This Tool Free
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50">
                      See Results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to Stop Getting Rejected?</h3>
            <p className="text-gray-600 mb-6">
              Join 2,847 people who got hired this month using our AI-powered tools.
              <span className="font-semibold text-black"> Your dream job is waiting.</span>
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-lg px-8 py-4">
              Start Getting Interviews Now - FREE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              No credit card required • Results in 5 minutes • Free forever plan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
