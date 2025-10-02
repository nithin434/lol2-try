"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, FileText, Sparkles, Lock, CheckCircle } from "lucide-react"

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleFileUpload = (files: FileList) => {
    if (files.length > 0) {
      setIsUploading(true)
      setUploadProgress(0)
      
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  // Structured data for Upload page
  const uploadStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Upload Resume - AI Resume Analyzer | Syntexa",
    "description": "Upload your resume for AI-powered analysis, optimization recommendations, and ATS compatibility checking. Get instant insights to improve your job search success.",
    "url": "https://syntexa.app/upload",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Syntexa AI Resume Analyzer",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Resume Analysis",
        "ATS Compatibility Check",
        "Keyword Optimization",
        "Format Validation",
        "Career Insights",
        "Industry Benchmarking"
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Head>
        <title>Upload Resume - AI Resume Analyzer & Optimization Tool | Syntexa</title>
        <meta name="description" content="Upload your resume to Syntexa's AI-powered analyzer for instant optimization recommendations, ATS compatibility checking, and career insights. Secure, private, and results in seconds." />
        <meta name="keywords" content="upload resume, AI resume analyzer, resume optimization tool, ATS resume checker, resume scanner, AI resume review, resume analysis online, CV analyzer, resume keywords, job application optimizer, resume formatting checker, career analysis tool, professional resume analyzer" />
        <meta property="og:title" content="Upload Resume - AI Resume Analyzer | Syntexa" />
        <meta property="og:description" content="Upload your resume for AI-powered analysis and optimization recommendations. Get instant insights to improve your job search success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://syntexa.app/upload" />
        <meta property="og:image" content="https://syntexa.app/resume.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upload Resume - AI Analyzer Tool" />
        <meta name="twitter:description" content="Get instant AI-powered resume analysis and optimization recommendations." />
        <meta name="twitter:image" content="https://syntexa.app/resume.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(uploadStructuredData) }}
        />
      </Head>

      {/* Dynamic Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="inline-flex items-center gap-2 bg-emerald-100/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lock className="h-4 w-4" />
                Secure & Private Analysis
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Upload Your <span className="text-emerald-400">Resume</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Get instant AI-powered analysis, optimization recommendations, and ATS compatibility insights to supercharge your job search.
              </p>
            </div>

            {/* Upload Area */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl mb-8">
              <CardContent className="p-8">
                <div
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    isDragging 
                      ? 'border-emerald-400 bg-emerald-400/10' 
                      : 'border-white/20 hover:border-emerald-400/50 hover:bg-emerald-400/5'
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setIsDragging(true)
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setIsDragging(false)
                    handleFileUpload(e.dataTransfer.files)
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4">
                      <Upload className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Drop your resume here or click to browse
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                    />
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Choose File
                    </label>
                  </div>
                </div>

                {isUploading && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Analyzing resume...</span>
                      <span className="text-sm text-emerald-400">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
                  <p className="text-gray-400 text-sm">
                    Advanced AI algorithms analyze your resume for optimization opportunities and industry best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">ATS Compatible</h3>
                  <p className="text-gray-400 text-sm">
                    Ensure your resume passes Applicant Tracking Systems used by 99% of Fortune 500 companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
                  <p className="text-gray-400 text-sm">
                    Your resume is encrypted and automatically deleted after analysis. Complete privacy guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
