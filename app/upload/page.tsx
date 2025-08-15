"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, FileText, Lock, Shield, Upload } from "lucide-react"

export default function UploadPage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingProgress, setProcessingProgress] = useState(0)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      handleFile(droppedFile)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      handleFile(selectedFile)
    }
  }

  const handleFile = (selectedFile: File) => {
    // Check if file is PDF, DOC, or DOCX
    const fileType = selectedFile.type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (!validTypes.includes(fileType)) {
      alert("Please upload a PDF, DOC, or DOCX file")
      return
    }

    setFile(selectedFile)
  }

  const handleUpload = () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setIsUploading(false)
          setIsProcessing(true)
          simulateProcessing()
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const simulateProcessing = () => {
    // Simulate processing progress
    const processingInterval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(processingInterval)
          setTimeout(() => {
            router.push("/dashboard")
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="font-bold">ResumeAI</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Resume</CardTitle>
              <CardDescription>Upload your resume to get started with AI-powered optimization</CardDescription>
            </CardHeader>
            <CardContent>
              {!file ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="resume-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileInput}
                  />
                  <label htmlFor="resume-upload" className="flex flex-col items-center cursor-pointer">
                    <FileText className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Drop your resume here or click to browse</p>
                    <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX (Max 5MB)</p>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium">{file.name}</div>
                        <div className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                      </div>
                    </div>
                  </div>

                  {isUploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading & Encrypting</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}

                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>AI Analysis</span>
                        <span>{processingProgress}%</span>
                      </div>
                      <Progress value={processingProgress} className="h-2" />
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mt-2">
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 rounded-full mr-1 ${processingProgress > 20 ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          <span>Parsing Content</span>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 rounded-full mr-1 ${processingProgress > 40 ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          <span>Analyzing Format</span>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 rounded-full mr-1 ${processingProgress > 60 ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          <span>Extracting Skills</span>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 rounded-full mr-1 ${processingProgress > 80 ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          <span>ATS Simulation</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              {file && !isUploading && !isProcessing && (
                <Button className="w-full" onClick={handleUpload}>
                  Upload & Analyze
                  <Upload className="ml-2 h-4 w-4" />
                </Button>
              )}

              {(isUploading || isProcessing) && (
                <Button className="w-full" disabled>
                  {isUploading ? "Uploading..." : "Analyzing..."}
                </Button>
              )}

              {!file && (
                <Button className="w-full" disabled>
                  Upload Resume
                </Button>
              )}

              <div className="text-xs text-center text-gray-500 flex items-center justify-center">
                <Lock className="h-3 w-3 mr-1" />
                Your resume is encrypted and processed securely
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
