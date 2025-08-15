"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, FileText, Target, BarChart3, Sparkles, Upload, Search, Award, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  content: React.ReactNode
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome to ResumeAI",
    description: "Your AI-powered career acceleration platform",
    icon: Sparkles,
    content: (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black mb-2">Ready to transform your career?</h3>
          <p className="text-gray-600">
            Join 50,000+ professionals who've accelerated their job search with AI. 
            Let's get you set up in just 3 minutes.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-black">96%</div>
            <div className="text-sm text-gray-600">ATS Pass Rate</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-black">5x</div>
            <div className="text-sm text-gray-600">More Interviews</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-black">$45K</div>
            <div className="text-sm text-gray-600">Avg Salary Boost</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "upload",
    title: "Upload Your Resume",
    description: "Let our AI analyze your current resume",
    icon: Upload,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Upload Your Current Resume</h3>
          <p className="text-gray-600">
            Our AI will analyze your resume and provide instant feedback on how to improve it.
          </p>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-black transition-colors cursor-pointer">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Drop your resume here or click to browse</p>
          <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX (Max 5MB)</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800">Your data is secure</h4>
              <p className="text-sm text-blue-700">
                We use 256-bit encryption and never store your resume permanently.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "goals",
    title: "Set Your Career Goals",
    description: "Tell us what you're looking for",
    icon: Target,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">What's Your Career Goal?</h3>
          <p className="text-gray-600">
            Help us personalize your experience by selecting your primary objective.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {[
            { title: "Find a new job", description: "I'm actively job searching", icon: Search },
            { title: "Get promoted", description: "I want to advance in my current company", icon: Award },
            { title: "Switch careers", description: "I'm looking to change industries", icon: ArrowRight },
            { title: "Improve my resume", description: "I want to optimize my current resume", icon: FileText },
          ].map((goal, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black hover:bg-gray-50 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <goal.icon className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold text-black">{goal.title}</h4>
                <p className="text-sm text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "features",
    title: "Explore Key Features",
    description: "Discover what ResumeAI can do for you",
    icon: BarChart3,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Your AI-Powered Toolkit</h3>
          <p className="text-gray-600">
            Everything you need to accelerate your job search in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "ATS Optimization",
              description: "Get past applicant tracking systems",
              icon: Target,
              color: "bg-black",
            },
            {
              title: "Job Matching",
              description: "Find roles that fit your skills",
              icon: Search,
              color: "bg-gray-800",
            },
            {
              title: "Analytics Dashboard",
              description: "Track your application performance",
              icon: BarChart3,
              color: "bg-gray-700",
            },
            {
              title: "Career Insights",
              description: "Get personalized recommendations",
              icon: Award,
              color: "bg-gray-600",
            },
          ].map((feature, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "complete",
    title: "You're All Set!",
    description: "Start optimizing your job search",
    icon: CheckCircle,
    content: (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black mb-2">Welcome to ResumeAI!</h3>
          <p className="text-gray-600">
            You're now ready to accelerate your career. Let's start by analyzing your resume 
            and finding opportunities that match your goals.
          </p>
        </div>
        <div className="bg-black text-white rounded-xl p-6">
          <h4 className="font-semibold mb-2">Quick Start Checklist</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Account created</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Goals configured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border border-gray-400 rounded-full" />
              <span>Upload your resume</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border border-gray-400 rounded-full" />
              <span>Complete profile</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

interface OnboardingFlowProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

export function OnboardingFlow({ isOpen, onClose, onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    setIsVisible(false)
    setTimeout(() => {
      onComplete()
      onClose()
    }, 300)
  }

  const handleSkip = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const progress = ((currentStep + 1) / onboardingSteps.length) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-white border border-gray-200 shadow-2xl">
              <CardHeader className="relative">
                <button
                  onClick={handleSkip}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <onboardingSteps[currentStep].icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-black">{onboardingSteps[currentStep].title}</CardTitle>
                    <CardDescription>{onboardingSteps[currentStep].description}</CardDescription>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Step {currentStep + 1} of {onboardingSteps.length}
                    </span>
                    <span className="text-sm font-medium text-black">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-gray-200" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {onboardingSteps[currentStep].content}
                </motion.div>
              </CardContent>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="border-gray-300"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex gap-2">
                    {currentStep < onboardingSteps.length - 1 && (
                      <Button variant="outline" onClick={handleSkip} className="border-gray-300">
                        Skip Tour
                      </Button>
                    )}
                    <Button onClick={handleNext} className="bg-black hover:bg-gray-800">
                      {currentStep === onboardingSteps.length - 1 ? (
                        <>
                          Get Started
                          <CheckCircle className="h-4 w-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Next
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
