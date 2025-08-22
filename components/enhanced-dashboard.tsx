"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GlobalSearch } from "@/components/global-search"
import { Search } from "lucide-react"

export function EnhancedDashboard({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    // Global keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSearchOpen = () => {
    setIsSearchOpen(true)
  }

  return (
    <>
      {children}

      {/* Global Search */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Global Search Trigger (floating button for mobile) */}
      <Button
        onClick={handleSearchOpen}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black hover:bg-gray-800 shadow-lg z-40 lg:hidden"
        size="icon"
      >
        <Search className="h-6 w-6 text-white" />
      </Button>

      {/* Keyboard shortcut hint */}
      <div className="fixed bottom-6 left-6 hidden lg:block">
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">K</kbd>
            </div>
            <span>to search</span>
          </div>
        </div>
      </div>
    </>
  )
}
