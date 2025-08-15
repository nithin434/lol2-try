"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText, Lock, BarChart, CheckCircle, AlertCircle } from "lucide-react"

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 3) {
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
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our transparent process ensures your data is secure while providing powerful resume optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card
            className={`border-2 transition-all duration-300 ${activeStep === 1 ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">1. Upload Resume</h3>
              <p className="text-gray-600 text-center mb-4">
                Securely upload your resume through our encrypted system.
              </p>

              {activeStep === 1 && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                  <div className="flex items-center mb-2">
                    <Lock className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Live File Encryption</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your file is encrypted with 256-bit encryption before it leaves your browser.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={`border-2 transition-all duration-300 ${activeStep === 2 ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">2. AI Analysis</h3>
              <p className="text-gray-600 text-center mb-4">
                Our AI analyzes your resume against industry standards and ATS systems.
              </p>

              {activeStep === 2 && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Analysis Progress</span>
                    <span className="text-sm">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2 mb-2" />
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mt-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                      <span>Format Check</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                      <span>Keyword Analysis</span>
                    </div>
                    <div className="flex items-center">
                      {progress > 50 ? (
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-gray-400 mr-1" />
                      )}
                      <span>Content Scoring</span>
                    </div>
                    <div className="flex items-center">
                      {progress > 75 ? (
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-gray-400 mr-1" />
                      )}
                      <span>ATS Simulation</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={`border-2 transition-all duration-300 ${activeStep === 3 ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">3. Get Insights</h3>
              <p className="text-gray-600 text-center mb-4">
                Receive detailed insights and improvements for your resume.
              </p>

              {activeStep === 3 && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Interactive Dashboard</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">View your personalized improvement recommendations.</p>
                  <div className="flex items-center justify-between text-xs bg-white p-2 rounded border">
                    <span>ATS Score</span>
                    <span className="font-medium text-green-600">94%</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            <Lock className="inline h-4 w-4 mr-1" />
            Your data is processed securely and deleted after analysis. We never store your resume permanently.
          </p>
        </div>
      </div>
    </section>
  )
}
