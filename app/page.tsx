import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, ChevronDown, Play, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureSection } from "@/components/feature-section"
import { SocialProof } from "@/components/social-proof"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b bg-white/95 backdrop-blur-sm border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-emerald-600">Syn</span>
              <span className="text-gray-900">texa</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link
                    href="#"
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
                  <Link
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">Job Hunt Hacks</div>
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <div className="font-medium text-gray-900 group-hover/item:text-emerald-600">
                      Global Career Boost
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blogs" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Blogs
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
            <Link href="/demo" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Get Demo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-50 text-gray-700 bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

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
        <FeatureSection />
        <SocialProof />

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start free and upgrade when you're ready to supercharge your job search
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">₹0</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Perfect for getting started</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 cold emails per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">5 cover letters per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic resume feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">LinkedIn & GitHub analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Resume improvements based on job descriptions</span>
                  </li>
                </ul>

                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1">Most Popular</Badge>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">₹199</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Everything you need to land your dream job</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced ATS optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lightning-fast resume generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Salary insights & negotiation tips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited cover letter generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">10 cold emails per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Multiple job tailoring & ATS optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support & job selection guidance</span>
                  </li>
                </ul>

                <Link href="/login">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Upgrade to Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-gray-700 relative hover:shadow-lg transition-shadow text-white">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">Unlimited</Badge>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-white">₹499</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <p className="text-gray-300">For serious job seekers and career changers</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Everything in Premium</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited resume variations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited cold emails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited cover letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Multiple resume profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">1-on-1 career consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">White-glove support</span>
                  </li>
                </ul>

                <Link href="/login">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Go Pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">All plans include secure processing and data protection. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">
                  <span className="text-emerald-400">Syn</span>
                  <span className="text-white">texa</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                AI-powered career acceleration platform helping professionals land their dream jobs faster.
              </p>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Trusted by 10K+ users
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    ATS Resume Wizard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Cold Email Magic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Cover Letter Crafter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Salary Insights Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Get Demo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Syntexa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
