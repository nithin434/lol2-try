import { Shield, Lock, Globe, CheckCircle, ArrowRight, Star, TrendingUp, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SecurityFeatures() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-medium text-emerald-700">Trusted Platform</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Built for <span className="font-medium text-emerald-600">Privacy</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Enterprise-grade security meets intuitive design. Your data stays yours.
          </p>
        </div>

        {/* Minimal Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group">
            <div className="bg-gray-50 hover:bg-emerald-50 rounded-2xl p-8 transition-all duration-500 border border-transparent hover:border-emerald-100">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Lock className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">End-to-End Encrypted</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Bank-level AES-256 encryption protects your data at every step</p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 hover:bg-emerald-50 rounded-2xl p-8 transition-all duration-500 border border-transparent hover:border-emerald-100">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Shield className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">Zero Data Retention</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Your files are processed and deleted immediately after optimization</p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 hover:bg-emerald-50 rounded-2xl p-8 transition-all duration-500 border border-transparent hover:border-emerald-100">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Globe className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">GDPR Compliant</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Full compliance with global privacy and data protection standards</p>
            </div>
          </div>
        </div>

        {/* Minimal Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
                Why <span className="font-medium text-emerald-600">10,000+</span> professionals choose us
              </h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Simple tools, powerful results. No complexity, just career growth.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">AI that actually works</h4>
                  <p className="text-gray-500 text-sm font-light">Real results, not just buzzwords. 96% ATS pass rate.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Instant optimization</h4>
                  <p className="text-gray-500 text-sm font-light">Upload, optimize, download. Takes less than 60 seconds.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Always improving</h4>
                  <p className="text-gray-500 text-sm font-light">Weekly model updates based on latest hiring trends.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://syntexa.app/upload">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-3 font-medium">
                  Try Free Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Minimal Stats Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">96%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">ATS Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">5x</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">More Interviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">$45K</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Avg Salary Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">30s</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Time to Optimize</div>
                </div>
              </div>
              
              {/* Minimal testimonial */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3 font-light leading-relaxed">
                  "Clean, fast, effective. Got 3 interviews in my first week."
                </p>
                <div className="text-xs text-gray-500">
                  Sarah K. • Product Manager @ Meta
                </div>
              </div>
              
              {/* Trust indicator */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-gray-100">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-gray-500">Trusted by 10,000+ professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
