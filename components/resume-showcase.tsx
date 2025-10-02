import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Target, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ResumeShowcase() {
  return (
    <section id="resume" className="py-20 bg-white relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-700">AI-Powered Optimization</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                Get <span className="font-medium text-emerald-600">ATS-Ready</span> Resumes
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                Upload your resume and watch our AI transform it into a job-winning document. 
                Intelligent optimization that gets you past ATS filters and in front of hiring managers.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                  <Target className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">ATS-Friendly Format</h3>
                  <p className="text-gray-500 text-sm font-light">Optimized to pass through applicant tracking systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                  <Clock className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Instant Results</h3>
                  <p className="text-gray-500 text-sm font-light">Get your optimized resume in under 60 seconds</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                  <FileText className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Smart Keywords</h3>
                  <p className="text-gray-500 text-sm font-light">Automatically includes relevant industry terms</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Ready to Apply</h3>
                  <p className="text-gray-500 text-sm font-light">Download and start applying immediately</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://syntexa.app/upload">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-3 font-medium">
                  Upload Resume Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-xl px-8 py-3 font-medium">
                  See Examples
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-sm text-gray-500 font-light">10,000+ resumes optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-sm text-gray-500 font-light">96% ATS pass rate</span>
              </div>
            </div>
          </div>

          {/* Right side - Resume Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border border-gray-100">
              {/* Resume preview */}
              <div className="relative w-full h-[500px] bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <Image
                  src="/resume.png"
                  alt="ATS-Optimized Resume Example"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Simple optimization badges */}
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs rounded-lg font-medium">
                    ATS Optimized
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs rounded-lg font-medium">
                    Keywords Added
                  </div>
                </div>
              </div>

              {/* Minimal stats cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">30s</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Processing</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">96%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
