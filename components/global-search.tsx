"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, BarChart3, User, Settings, Briefcase, X, Clock, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "resume" | "analytics" | "profile" | "settings" | "job" | "feature"
  url: string
  icon: React.ComponentType<{ className?: string }>
  category: string
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Upload Resume",
    description: "Upload and analyze your resume with AI",
    type: "resume",
    url: "/upload",
    icon: FileText,
    category: "Resume",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "View your job search performance metrics",
    type: "analytics",
    url: "/analytics",
    icon: BarChart3,
    category: "Analytics",
  },
  {
    id: "3",
    title: "Profile Settings",
    description: "Manage your personal information and preferences",
    type: "profile",
    url: "/profile",
    icon: User,
    category: "Profile",
  },
  {
    id: "4",
    title: "Account Settings",
    description: "Update security, billing, and notification settings",
    type: "settings",
    url: "/settings",
    icon: Settings,
    category: "Settings",
  },
  {
    id: "5",
    title: "Career Path",
    description: "Explore career opportunities and growth paths",
    type: "job",
    url: "/career-path",
    icon: Briefcase,
    category: "Career",
  },
  {
    id: "6",
    title: "Job Matching",
    description: "Find jobs that match your skills and experience",
    type: "job",
    url: "/analyze-job",
    icon: Search,
    category: "Jobs",
  },
]

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "upload resume",
    "analytics",
    "job matching",
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  const handleResultClick = (result: SearchResult) => {
    // Add to recent searches
    setRecentSearches((prev) => {
      const updated = [result.title, ...prev.filter((item) => item !== result.title)].slice(0, 5)
      return updated
    })
    onClose()
    // Navigate to result URL
    window.location.href = result.url
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="h-5 w-5 text-gray-400" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for features, pages, or help..."
              className="border-0 focus:ring-0 text-lg bg-transparent"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() ? (
              <div className="p-2">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    {results.map((result) => (
                      <motion.button
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => handleResultClick(result)}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                          <result.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-black">{result.title}</h3>
                          <p className="text-sm text-gray-600">{result.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-medium text-black mb-2">No results found</h3>
                    <p className="text-sm text-gray-600">
                      Try searching for "upload", "analytics", or "profile"
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-gray-900">Recent Searches</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </Button>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{search}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: "Upload Resume", icon: FileText, url: "/upload" },
                      { title: "View Analytics", icon: BarChart3, url: "/analytics" },
                      { title: "Edit Profile", icon: User, url: "/profile" },
                      { title: "Job Search", icon: Search, url: "/analyze-job" },
                    ].map((action, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          onClose()
                          window.location.href = action.url
                        }}
                        className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 transition-all"
                      >
                        <action.icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-black">{action.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Press ESC to close</span>
              <div className="flex items-center gap-4">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
