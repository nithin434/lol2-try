"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ChevronDown, Play, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureSection } from "@/components/feature-section"
import { SocialProof } from "@/components/social-proof"
import { LogoScroll } from "@/components/logo-scroll"
import { ResumeShowcase } from "@/components/resume-showcase"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Initial white overlay animation
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setShowContent(true), 300)
    }, 100)
    
    // Scroll animation
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Structured data for homepage
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Syntexa - AI Resume Analyzer & Career Acceleration",
    "description": "Transform your job search with AI-powered resume optimization, cover letter generator, cold email templates, and career insights. Get hired faster with advanced AI tools.",
    "url": "https://main.syntexa.app",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Syntexa AI Resume Analyzer",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "AI Resume Analysis",
        "Cover Letter Generator",
        "Cold Email Templates", 
        "ATS Compatibility Check",
        "Career Insights Dashboard",
        "Job Matching Algorithm",
        "Resume Optimization",
        "Interview Preparation"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://main.syntexa.app"
        }
      ]
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Head>
        <title>Syntexa - AI Resume Analyzer, Cover Letter Generator & Career Tools</title>
        <meta name="description" content="Transform your job search with Syntexa's AI-powered resume analyzer, cover letter generator, cold email templates, and career acceleration tools. Get hired faster with our advanced AI technology." />
        <meta name="keywords" content="AI resume analyzer, cover letter generator, cold email templates, ATS resume checker, job search tools, career acceleration, resume optimization, AI career coach, job application tools, resume scanner, interview preparation, LinkedIn optimization, salary negotiation, professional resume, career insights, job matching, resume keywords, applicant tracking system, career development, resume builder, resume analysis, AI recruiting tools" />
        <meta property="og:title" content="Syntexa - AI Resume Analyzer & Career Acceleration Platform" />
        <meta property="og:description" content="Transform your job search with AI-powered resume optimization, cover letter generator, and career insights. Get hired faster with advanced AI tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://main.syntexa.app" />
        <meta property="og:image" content="https://main.syntexa.app/resume-optimization.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syntexa - AI Resume Analyzer & Career Tools" />
        <meta name="twitter:description" content="Transform your job search with AI-powered resume optimization, cover letter generator, and career insights." />
        <meta name="twitter:image" content="https://main.syntexa.app/resume-optimization.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
        />
      </Head>
      {/* White overlay that covers everything initially */}
      <div className={`fixed inset-0 bg-white z-[100] transition-opacity duration-1000 ${
        isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`} />
      
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
        showContent ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      } ${scrolled ? 'top-2 scale-95' : 'top-4 scale-100'}`}>
        <div className="relative">
          {/* Cylindrical/pill-shaped glassy background */}
          <div className={`absolute inset-0 backdrop-blur-xl shadow-2xl transition-all duration-500 rounded-full ${
            scrolled 
              ? 'bg-black/30 border border-white/10 shadow-black/40' 
              : 'bg-white/20 border border-white/30 shadow-emerald-200/20'
          } pointer-events-none`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/10 pointer-events-none transition-opacity duration-500 rounded-full ${
            scrolled ? 'opacity-40' : 'opacity-60'
          }`} />
          <div className="px-8 py-4 flex justify-between items-center relative min-w-[800px]">
            <div className="flex items-center gap-3">
              <span className={`font-bold transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                <span className="text-emerald-500">Syn</span>
                <span className={scrolled ? "text-gray-800" : "text-gray-900"}>texa</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className={`flex items-center gap-1 text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
                  scrolled ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/20' : 'text-gray-700 hover:text-emerald-600 hover:bg-white/30'
                }`}>
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link
                      href="#resume-analyzer"
                      className="block px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                    >
                      <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">ATS Resume Wizard</div>
                    </Link>
                    <Link
                      href="#cold-email-generator"
                      className="block px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                    >
                      <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">Cold Email Magic</div>
                    </Link>
                    <Link
                      href="#job-matching"
                      className="block px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                    >
                      <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">
                        Job Matching & Salary Intel
                      </div>
                    </Link>
                    <Link
                      href="#resume"
                      className="block px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                    >
                      <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">
                        Resume Showcase
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/blogs" className={`text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
                scrolled ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/20' : 'text-gray-700 hover:text-emerald-600 hover:bg-white/30'
              }`}>
                Blogs
              </Link>
              <Link href="/about" className={`text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
                scrolled ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/20' : 'text-gray-700 hover:text-emerald-600 hover:bg-white/30'
              }`}>
                About
              </Link>
              <Link href="/contact" className={`text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
                scrolled ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/20' : 'text-gray-700 hover:text-emerald-600 hover:bg-white/30'
              }`}>
                Contact
              </Link>
              <Link href="/demo" className={`text-sm font-semibold transition-colors px-3 py-2 rounded-full ${
                scrolled ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/20' : 'text-gray-700 hover:text-emerald-600 hover:bg-white/30'
              }`}>
                Get Demo
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://syntexa.app/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-all duration-300 rounded-full ${
                    scrolled 
                      ? 'text-gray-800 hover:text-emerald-600 hover:bg-white/30' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-white/20'
                  }`}
                >
                  {/* Sign In */}
                </Button>
              </a>
              <a href="https://syntexa.app/upload">
                <Button size="sm" className={`transition-all duration-300 rounded-full ${
                  scrolled 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg scale-95' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl scale-100'
                }`}>
                  Try Resume AI
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className={`flex-1 transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        
        <LogoScroll />

        {/* Demo Video Section - Professional White Theme */}
        <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Flowing background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/3 to-purple-500/3 rounded-full blur-3xl animate-spin-slow"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-32 right-1/4 w-4 h-4 bg-emerald-200 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-200 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 right-20 w-2 h-2 bg-purple-200 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Live Platform
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                See <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Syntexa</span> in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience how our AI transforms ordinary resumes into interview-winning documents and creates personalized
                cold emails that get responses in real-time
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Main demo card with glassy effect */}
              <div className="relative group">
                {/* Glassy background */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-emerald-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl"></div>
                
                <div className="relative p-8 lg:p-12">
                  {/* Dashboard showcase container - Proper 16:9 aspect ratio */}
                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden border border-gray-200/50 shadow-inner">
                      {/* Dashboard image with auto-tilt effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50"></div>
                      <img 
                        src="/dash.png" 
                        alt="Syntexa Dashboard"
                        className="w-full h-full object-contain transform hover:rotate-1 transition-transform duration-[2000ms] ease-out"
                        style={{ pointerEvents: 'none' }}
                      />
                      
                      {/* Floating info badges */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          Live Dashboard
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                        AI-Powered
                      </div>
                    </div>
                  </div>

                  {/* Feature highlights grid */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        Resume Transformation
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1.5 animate-pulse"></div>
                          <div>
                            <div className="font-semibold text-gray-900">AI-Powered ATS Optimization</div>
                            <div className="text-gray-600 text-sm">95% pass rate through automated screening</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 animate-pulse delay-200"></div>
                          <div>
                            <div className="font-semibold text-gray-900">Industry-Specific Keywords</div>
                            <div className="text-gray-600 text-sm">Smart keyword integration for your field</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 animate-pulse delay-400"></div>
                          <div>
                            <div className="font-semibold text-gray-900">Professional Formatting</div>
                            <div className="text-gray-600 text-sm">Clean, modern design that stands out</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        Cold Email Personalization
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 animate-pulse"></div>
                          <div>
                            <div className="font-semibold text-gray-900">Deep Profile Analysis</div>
                            <div className="text-gray-600 text-sm">87% response rate with smart personalization</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 animate-pulse delay-200"></div>
                          <div>
                            <div className="font-semibold text-gray-900">Company Research</div>
                            <div className="text-gray-600 text-sm">Culture & background analysis for perfect fit</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <div className="w-3 h-3 bg-pink-500 rounded-full mt-1.5 animate-pulse delay-400"></div>
                          <div>
                            <div className="font-semibold text-gray-900">Response Optimization</div>
                            <div className="text-gray-600 text-sm">Templates that actually get replies</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xl">
                      <div>
                        <div className="text-lg font-semibold">Ready to transform your career?</div>
                        <div className="text-emerald-100 text-sm">Join 50,000+ professionals already using Syntexa</div>
                      </div>
                      <a href="https://syntexa.app/upload">
                        <Button className="bg-white text-emerald-600 hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3 font-semibold">
                          Start Free Trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <ResumeShowcase />
        <FeatureSection />
        <SocialProof />
      </main>

      <EnhancedFooter />
    </div>
  )
}
