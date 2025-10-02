"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText, Lock, BarChart, CheckCircle, AlertCircle, Upload, Sparkles, Target, Mail } from "lucide-react"

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 4) {
          return 1
        }
        return prev + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeStep === 2) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 5
        })
      }, 100)

      return () => {
        clearInterval(progressInterval)
        setProgress(0)
      }
    }
  }, [activeStep])

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/3 to-gray-500/3 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-emerald-200 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-32 w-4 h-4 bg-emerald-200 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Simple Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            How <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Syntexa</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our transparent and secure process ensures your data is protected while delivering powerful AI-driven resume optimization and career insights.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 - Upload Resume */}
            <div className="relative group">
              {/* Glassy background */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-emerald-500/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl"></div>
              
              <div className={`relative p-6 transition-all duration-500 ${activeStep === 1 ? "scale-105" : "scale-100"}`}>
                <div className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === 1 
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30" 
                      : "bg-gradient-to-r from-gray-100 to-gray-200"
                  }`}>
                    <Upload className={`h-7 w-7 ${activeStep === 1 ? "text-white" : "text-gray-600"}`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activeStep === 1 ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      Step 1
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Resume</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Securely upload your resume through our encrypted system with industry-leading protection.
                  </p>

                  {activeStep === 1 && (
                    <div className="bg-emerald-50/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-200/50 mt-3 animate-fadeIn">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center mr-2">
                          <Lock className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-xs font-semibold text-emerald-800">256-bit Encryption</span>
                      </div>
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        Military-grade security before it leaves your browser.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2 - AI Analysis */}
            <div className="relative group">
              {/* Glassy background */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-gray-500/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl"></div>
              
              <div className={`relative p-6 transition-all duration-500 ${activeStep === 2 ? "scale-105" : "scale-100"}`}>
                <div className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === 2 
                      ? "bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg shadow-gray-500/30" 
                      : "bg-gradient-to-r from-gray-100 to-gray-200"
                  }`}>
                    <Sparkles className={`h-7 w-7 ${activeStep === 2 ? "text-white" : "text-gray-600"}`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activeStep === 2 ? "bg-gray-100 text-gray-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      Step 2
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Analysis</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our advanced AI analyzes your resume against industry standards and ATS requirements.
                  </p>

                  {activeStep === 2 && (
                    <div className="bg-gray-50/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50 mt-3 animate-fadeIn">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-800">Analysis Progress</span>
                        <span className="text-xs font-bold text-gray-600">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-1.5 mb-3 bg-gray-100" />
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="flex items-center">
                          <CheckCircle className="h-2.5 w-2.5 text-emerald-600 mr-1" />
                          <span className="text-gray-700">Format Check</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-2.5 w-2.5 text-emerald-600 mr-1" />
                          <span className="text-gray-700">Keywords</span>
                        </div>
                        <div className="flex items-center">
                          {progress > 50 ? (
                            <CheckCircle className="h-2.5 w-2.5 text-emerald-600 mr-1" />
                          ) : (
                            <AlertCircle className="h-2.5 w-2.5 text-gray-400 mr-1" />
                          )}
                          <span className="text-gray-700">Content</span>
                        </div>
                        <div className="flex items-center">
                          {progress > 75 ? (
                            <CheckCircle className="h-2.5 w-2.5 text-emerald-600 mr-1" />
                          ) : (
                            <AlertCircle className="h-2.5 w-2.5 text-gray-400 mr-1" />
                          )}
                          <span className="text-gray-700">ATS Test</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3 - Get Insights */}
            <div className="relative group">
              {/* Glassy background */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-emerald-500/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl"></div>
              
              <div className={`relative p-6 transition-all duration-500 ${activeStep === 3 ? "scale-105" : "scale-100"}`}>
                <div className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === 3 
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30" 
                      : "bg-gradient-to-r from-gray-100 to-gray-200"
                  }`}>
                    <Target className={`h-7 w-7 ${activeStep === 3 ? "text-white" : "text-gray-600"}`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activeStep === 3 ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      Step 3
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Get Insights</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Receive detailed insights, actionable recommendations, and performance metrics.
                  </p>

                  {activeStep === 3 && (
                    <div className="bg-emerald-50/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-200/50 mt-3 animate-fadeIn">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center mr-2">
                          <BarChart className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-xs font-semibold text-emerald-800">Dashboard Ready</span>
                      </div>
                      <p className="text-xs text-emerald-700 mb-2 leading-relaxed">
                        View personalized recommendations and track progress.
                      </p>
                      <div className="bg-white/80 p-2 rounded-lg border border-emerald-200/30">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-emerald-800">ATS Score</span>
                          <span className="text-sm font-bold text-emerald-600">94%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4 - Cover Letters & Cold Emails */}
            <div className="relative group">
              {/* Glassy background */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-gray-500/10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl"></div>
              
              <div className={`relative p-6 transition-all duration-500 ${activeStep === 4 ? "scale-105" : "scale-100"}`}>
                <div className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === 4 
                      ? "bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg shadow-gray-500/30" 
                      : "bg-gradient-to-r from-gray-100 to-gray-200"
                  }`}>
                    <Mail className={`h-7 w-7 ${activeStep === 4 ? "text-white" : "text-gray-600"}`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activeStep === 4 ? "bg-gray-100 text-gray-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      Step 4
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cover Letters & Cold Emails</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Generate personalized cover letters and cold emails that get responses.
                  </p>

                  {activeStep === 4 && (
                    <div className="bg-gray-50/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50 mt-3 animate-fadeIn">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                          <Mail className="h-3 w-3 text-gray-600" />
                        </div>
                        <span className="text-xs font-semibold text-gray-800">AI Writing Assistant</span>
                      </div>
                      <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                        Personalized templates with 87% response rate.
                      </p>
                      <div className="bg-white/80 p-2 rounded-lg border border-gray-200/30">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-800">Success Rate</span>
                          <span className="text-sm font-bold text-emerald-600">87%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/50 shadow-lg">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Lock className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Bank-Level Security</p>
              <p className="text-xs text-gray-600">Your data is processed securely and automatically deleted after analysis. Zero permanent storage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
