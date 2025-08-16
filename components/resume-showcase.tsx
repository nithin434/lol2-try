import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Target, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ResumeShowcase() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Resume Optimization
              </Badge>
              
                             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                 Get <span className="text-emerald-600">ATS-Optimized</span> Resumes in Seconds
               </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Upload your resume and watch our AI transform it into a job-winning document tailored to your target position. 
                Get hired faster with intelligent keyword matching and professional formatting.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ATS-Friendly Format</h3>
                  <p className="text-gray-600 text-sm">Optimized for Applicant Tracking Systems to pass through filters</p>
                </div>
              </div>

                             <div className="flex items-start gap-3">
                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                   <Clock className="h-5 w-5 text-blue-600" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-gray-900 mb-1">Lightning-Fast Generation</h3>
                   <p className="text-gray-600 text-sm">Quick resume creation based on job descriptions</p>
                 </div>
               </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart Keyword Integration</h3>
                  <p className="text-gray-600 text-sm">Automatically includes relevant industry keywords and skills</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Direct Application Ready</h3>
                  <p className="text-gray-600 text-sm">Apply directly to jobs with your optimized resume</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/upload">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  Upload Resume Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                  Watch Demo
                </Button>
              </Link>
            </div>

                         {/* Trust indicators */}
             <div className="flex items-center gap-6 pt-4">
               <div className="flex items-center gap-2">
                 <CheckCircle className="h-5 w-5 text-emerald-600" />
                 <span className="text-sm text-gray-600">Thousands of Resumes Optimized</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="h-5 w-5 text-emerald-600" />
                 <span className="text-sm text-gray-600">High ATS Success Rate</span>
               </div>
             </div>
          </div>

          {/* Right side - Resume Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-500">
              {/* Resume preview - More rectangular */}
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden group">
                <Image
                  src="/resume.png"
                  alt="ATS-Optimized Resume Example"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay with optimization highlights */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating optimization badges */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-600 text-white px-3 py-1 text-xs shadow-lg">
                    ATS Optimized
                  </Badge>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-blue-600 text-white px-3 py-1 text-xs shadow-lg">
                    Keywords Matched
                  </Badge>
                </div>
              </div>

                             {/* Floating stats card */}
               <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-emerald-600">Fast</div>
                   <div className="text-xs text-gray-600">Generation</div>
                 </div>
               </div>

               {/* Floating success rate card */}
               <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-blue-600">High</div>
                   <div className="text-xs text-gray-600">Success Rate</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
