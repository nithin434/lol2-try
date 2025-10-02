import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowRight,
  Star,
  Users,
  Award
} from "lucide-react"

export function EnhancedFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-bold text-2xl">
                  <span className="text-emerald-400">Syn</span>
                  <span className="text-white">texa</span>
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                The world's most advanced AI-powered career acceleration platform. 
                Transform your job search with intelligent resume optimization, 
                personalized cold emails, and data-driven career insights.
              </p>

                             {/* Trust badges */}
               <div className="space-y-3 mb-8">
                 <div className="flex items-center gap-2">
                   <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-xs">
                     <CheckCircle className="h-3 w-3 mr-1" />
                     Trusted by Thousands
                   </Badge>
                 </div>
                 <div className="flex items-center gap-2">
                   <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">
                     <Award className="h-3 w-3 mr-1" />
                     Industry Leader 2024
                   </Badge>
                 </div>
                 <div className="flex items-center gap-2">
                   <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                     <Star className="h-3 w-3 mr-1" />
                     Excellent Customer Rating
                   </Badge>
                 </div>
               </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <Link href="https://discord.gg/qNHAJzYQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors group">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    ATS Resume Wizard
                  </Link>
                </li>
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cold Email Magic
                  </Link>
                </li>
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cover Letter Crafter
                  </Link>
                </li>
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Salary Insights Hub
                  </Link>
                </li>
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Job Hunt Hacks
                  </Link>
                </li>
                <li>
                  <Link href="https://syntexa.app/upload" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Global Career Boost
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Get Demo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Sales
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#press" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Support & Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#help" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#compliance" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-12 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Ahead in Your Career
              </h3>
              <p className="text-gray-300">
                Get the latest job search tips, industry insights, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <a href="https://syntexa.app/upload">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

                 {/* Contact info */}
         <div className="py-8 border-t border-gray-800">
           <div className="flex justify-center">
             <div className="flex items-center gap-3">
               <Mail className="h-5 w-5 text-emerald-400" />
               <div>
                 <p className="text-sm text-gray-400">Email</p>
                 <p className="text-white">info@syntex.app</p>
               </div>
             </div>
           </div>
         </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Syntexa. All rights reserved. Made with ❤️ for career success.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#status" className="text-gray-400 hover:text-emerald-400 transition-colors">
                System Status
              </Link>
              <Link href="#sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Sitemap
              </Link>
              <Link href="#accessibility" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
