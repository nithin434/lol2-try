import { Shield, Lock, Zap, CheckCircle, ArrowRight, Users, Award, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SecurityFeatures() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Enterprise-Grade Security
          </Badge>
                     <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
             Trusted by <span className="text-emerald-600">Thousands</span> of Professionals
           </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. We use industry-leading encryption and security practices 
            to protect your personal information and resume data.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
            <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest using AES-256 encryption</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
            <p className="text-gray-600 text-sm">Certified security controls and regular third-party audits</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
            <p className="text-gray-600 text-sm">Full compliance with data protection regulations worldwide</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
            <p className="text-gray-600 text-sm">Reliable infrastructure with guaranteed service availability</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose <span className="text-emerald-600">Syntexa</span>?
            </h3>
            <p className="text-lg text-gray-600">
              Join thousands of professionals who trust our AI-powered platform to accelerate their careers 
              with confidence and security.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Powered Optimization</h4>
                  <p className="text-gray-600 text-sm">Advanced algorithms that understand industry trends and job requirements</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Global Job Market Access</h4>
                  <p className="text-gray-600 text-sm">Optimize for international opportunities with multi-language support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Analytics</h4>
                  <p className="text-gray-600 text-sm">Track application success rates and optimize your strategy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Expert Support</h4>
                  <p className="text-gray-600 text-sm">Get help whenever you need it with our dedicated support team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://syntexa.app/upload">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/security">
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn About Security
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100">
                             <div className="grid grid-cols-2 gap-6">
                 <div className="text-center">
                   <div className="text-3xl font-bold text-emerald-600 mb-2">10K+</div>
                   <div className="text-sm text-gray-600">Active Users</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                   <div className="text-sm text-gray-600">Success Rate</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                   <div className="text-sm text-gray-600">Resumes Optimized</div>
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-bold text-orange-600 mb-2">4.3/5</div>
                   <div className="text-sm text-gray-600">User Rating</div>
                 </div>
               </div>
              
              <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-gray-900">Industry Recognition</span>
                </div>
                <p className="text-sm text-gray-600">
                  Named "Best AI Resume Tool 2024" by CareerTech Awards and trusted by Fortune 500 companies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
