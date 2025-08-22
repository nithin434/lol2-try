"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  Search,
  Settings,
  Shield,
  FileUp,
  Briefcase,
  HelpCircle,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

export function DashboardSidebar() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r border-gray-200 bg-white/95 backdrop-blur-xl text-black w-[280px] shadow-sm">
        <SidebarHeader className="border-b border-gray-200">
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="relative">
              <Shield className="h-6 w-6 text-black" />
              <motion.div
                className="absolute inset-0 bg-black/10 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <span className="font-bold text-lg text-black">ResumeAI</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-gray-600" />
            </motion.div>
            <SidebarTrigger className="ml-auto text-gray-600 hover:text-black" />
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link
                  href="/dashboard"
                  className="bg-black text-white hover:bg-gray-800 border border-gray-200 rounded-xl transition-all duration-300"
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/resumes" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <FileText className="h-5 w-5" />
                  <span>My Resumes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/upload" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <FileUp className="h-5 w-5" />
                  <span>Upload Resume</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/analyze-job" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <Search className="h-5 w-5" />
                  <span>Job Match</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/analytics" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <BarChart3 className="h-5 w-5" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/career-path" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <Briefcase className="h-5 w-5" />
                  <span>Career Path</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <div className="mt-8">
            <div className="px-3 mb-3">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Support</h3>
            </div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/help" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Resources</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings" className="hover:bg-gray-100 rounded-xl transition-all duration-300">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <Avatar className="h-10 w-10 border-2 border-gray-200">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback className="bg-black text-white font-semibold">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate text-black">John Doe</p>
              <p className="text-xs text-gray-600 truncate">john@example.com</p>
            </div>
            <motion.div whileHover={{ rotate: 15 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </motion.div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
