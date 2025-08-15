"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  FileText,
  MoreVertical,
  Download,
  Edit,
  Trash2,
  Copy,
  Search,
  Filter,
  Plus,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface Resume {
  id: string
  name: string
  lastModified: string
  atsScore: number
  status: "active" | "draft" | "archived"
  jobMatches: number
  views: number
}

const mockResumes: Resume[] = [
  {
    id: "1",
    name: "Software Engineer - Tech Focus",
    lastModified: "2 days ago",
    atsScore: 86,
    status: "active",
    jobMatches: 12,
    views: 45,
  },
  {
    id: "2",
    name: "Senior Developer - Leadership",
    lastModified: "1 week ago",
    atsScore: 92,
    status: "active",
    jobMatches: 8,
    views: 32,
  },
  {
    id: "3",
    name: "Full Stack Developer",
    lastModified: "2 weeks ago",
    atsScore: 78,
    status: "draft",
    jobMatches: 5,
    views: 18,
  },
  {
    id: "4",
    name: "Frontend Specialist",
    lastModified: "1 month ago",
    atsScore: 84,
    status: "archived",
    jobMatches: 15,
    views: 67,
  },
]

export default function ResumesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")

  const filteredResumes = mockResumes.filter((resume) => {
    const matchesSearch = resume.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || resume.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1">
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">My Resumes</h1>
            <Link href="/upload">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload New Resume
              </Button>
            </Link>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Resumes</p>
                    <p className="text-2xl font-bold">{mockResumes.length}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Resumes</p>
                    <p className="text-2xl font-bold">{mockResumes.filter((r) => r.status === "active").length}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Avg. ATS Score</p>
                    <p className="text-2xl font-bold">
                      {Math.round(mockResumes.reduce((acc, r) => acc + r.atsScore, 0) / mockResumes.length)}%
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold">{mockResumes.reduce((acc, r) => acc + r.views, 0)}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resumes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter: {selectedStatus === "all" ? "All" : selectedStatus}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedStatus("all")}>All Resumes</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("active")}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("draft")}>Drafts</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("archived")}>Archived</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Resumes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{resume.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" />
                        Modified {resume.lastModified}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">ATS Score</span>
                        <span className="text-sm font-medium">{resume.atsScore}%</span>
                      </div>
                      <Progress value={resume.atsScore} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          resume.status === "active" ? "default" : resume.status === "draft" ? "secondary" : "outline"
                        }
                      >
                        {resume.status}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Search className="h-3 w-3" />
                          {resume.jobMatches} matches
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {resume.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Analyze
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Improve
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredResumes.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes found</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery ? "Try adjusting your search or filters" : "Upload your first resume to get started"}
              </p>
              <Link href="/upload">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Resume
                </Button>
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
