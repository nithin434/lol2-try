import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, ChevronDown, Play, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureSection } from "@/components/feature-section"
import { SocialProof } from "@/components/social-proof"
import { LogoScroll } from "@/components/logo-scroll"
import { ResumeShowcase } from "@/components/resume-showcase"
import { SecurityFeatures } from "@/components/security-features"
import { EnhancedFooter } from "@/components/enhanced-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-2xl">
              <span className="text-emerald-600">Syn</span>
              <span className="text-gray-900">texa</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link
                    href="#resume"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">ATS Resume Wizard</div>
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">Cold Email Magic</div>
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">
                      Cover Letter Crafter
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">
                      Salary & Insights Hub
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blogs" className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
              Blogs
            </Link>
            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
            <Link href="/demo" className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">
              Get Demo
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/upload">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
                Try Resume AI
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        
        <LogoScroll />

        {/* Demo Video Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                See <span className="text-emerald-400">Syntexa</span> in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch how our AI transforms ordinary resumes into interview-winning documents and creates personalized
                cold emails that get responses
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10"></div>
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-emerald-700 transition-colors cursor-pointer group">
                      <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-gray-300 text-lg font-medium">Watch Demo Video</p>
                    <p className="text-gray-500 text-sm mt-2">3 minutes • See real transformations</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">Resume Transformation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm">AI-powered ATS optimization</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">Industry-specific keyword integration</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">Professional formatting & design</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">Cold Email Personalization</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-sm">Deep recipient profile analysis</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Company culture & background research</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm">High response rate optimization</span>
                      </div>
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
        <SecurityFeatures />
        <SocialProof />
      </main>

      <EnhancedFooter />
    </div>
  )
}
