"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, CheckCircle, TrendingUp, Target, Mail, FileText, Sparkles } from "lucide-react"

// Type definitions
interface BlogTemplate {
  subject: string
  body: string
}

interface BlogVariation {
  scenario: string
  template: string
}

interface BlogSubsection {
  title: string
  content: string
  tips?: string[]
}

interface BlogFrameworkItem {
  step: string
  description: string
  example: string
}

interface BlogStat {
  label: string
  value: string
  description: string
}

interface BlogScript {
  scenario: string
  script: string
}

interface BlogSection {
  title: string
  content: string
  image?: string
  template?: BlogTemplate
  variations?: BlogVariation[]
  subsections?: BlogSubsection[]
  framework?: BlogFrameworkItem[]
  stats?: BlogStat[]
  scripts?: BlogScript[]
  steps?: string[]
}

interface BlogContent {
  introduction: string
  sections: BlogSection[]
  conclusion: string
}

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  authorTitle: string
  authorImage: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  tags: string[]
  content: BlogContent
  relatedPosts: number[]
}

// Blog post data with full content
const blogPosts: Record<string, BlogPost> = {
  "ats-resume-optimization-secrets": {
    id: 1,
    title: "10 ATS Resume Optimization Secrets That Actually Work in 2024",
    slug: "ats-resume-optimization-secrets",
    excerpt: "Discover the latest ATS algorithms and how to optimize your resume to pass through automated screening systems with a 95% success rate.",
    category: "Resume Tips",
    author: "Sarah Chen",
    authorTitle: "Senior Career Coach",
    authorImage: "/placeholder.svg?height=50&width=50&text=SC",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image: "/resume-optimization.png",
    featured: true,
    tags: ["ATS", "Resume", "Job Search", "Career Tips"],
    content: {
      introduction: "In 2024, over 95% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter resumes before they reach human recruiters. This means your perfectly crafted resume might never be seen by actual hiring managers if it doesn't pass the ATS screening first.",
      sections: [
        {
          title: "Understanding Modern ATS Technology",
          content: "Today's ATS systems are more sophisticated than ever. They don't just scan for keywords—they analyze context, understand synonyms, and even evaluate formatting consistency. The latest systems use AI to understand industry-specific language and can detect attempts to game the system with keyword stuffing.",
          image: "/placeholder.svg?height=300&width=600&text=ATS+Technology"
        },
        {
          title: "The 10 Critical ATS Optimization Secrets",
          content: "Based on analysis of over 50,000 successful resumes, here are the optimization techniques that consistently improve ATS scores:",
          subsections: [
            {
              title: "1. Strategic Keyword Placement",
              content: "Place your most important keywords in the first third of your resume. ATS systems weight the beginning of documents more heavily.",
              tips: [
                "Include exact job title matches in your professional summary",
                "Use both acronyms and full forms (e.g., 'Search Engine Optimization (SEO)')",
                "Mirror the language from the job description naturally"
              ]
            },
            {
              title: "2. Format for Machine Readability",
              content: "While creative designs look impressive to humans, they confuse ATS systems. Stick to clean, simple formatting.",
              tips: [
                "Use standard section headers (Experience, Education, Skills)",
                "Avoid tables, text boxes, and graphics for important content",
                "Use standard bullet points (• or -)"
              ]
            },
            {
              title: "3. Optimize Your File Type and Name",
              content: "The way you save and name your resume file can impact ATS processing.",
              tips: [
                "Save as .docx or .pdf (avoid .txt or .rtf)",
                "Use descriptive filenames: 'John_Smith_Marketing_Manager_Resume.pdf'",
                "Avoid special characters in filename"
              ]
            }
          ]
        },
        {
          title: "Real Results: Before and After",
          content: "Here's how these techniques transformed one candidate's success rate:",
          stats: [
            { label: "Interview Rate Before", value: "3%", description: "1 interview from 33 applications" },
            { label: "Interview Rate After", value: "28%", description: "14 interviews from 50 applications" },
            { label: "ATS Score Improvement", value: "+340%", description: "From 23% to 98% pass rate" }
          ]
        }
      ],
      conclusion: "ATS optimization isn't about tricking the system—it's about communicating your qualifications in a language that both machines and humans can understand. When you master these techniques, you'll see a dramatic increase in interview requests."
    },
    relatedPosts: [2, 3, 4]
  },
  "cold-email-templates-87-response-rates": {
    id: 2,
    title: "Cold Email Templates That Get 87% Response Rates",
    slug: "cold-email-templates-87-response-rates",
    excerpt: "Learn the psychology behind effective cold emails and get access to proven templates that have helped thousands land interviews.",
    category: "Cold Outreach",
    author: "Mike Rodriguez",
    authorTitle: "Outreach Specialist",
    authorImage: "/placeholder.svg?height=50&width=50&text=MR",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    image: "/email-templates.png",
    tags: ["Cold Email", "Outreach", "Networking", "Templates"],
    content: {
      introduction: "After analyzing over 10,000 cold emails and their response rates, we've identified the exact patterns that separate emails that get ignored from those that get responses. The difference isn't luck—it's psychology and strategy.",
      sections: [
        {
          title: "The Psychology of Cold Email Response",
          content: "Successful cold emails trigger three psychological principles: reciprocity, social proof, and curiosity. Understanding these principles is the foundation of any effective outreach strategy.",
          image: "/placeholder.svg?height=300&width=600&text=Email+Psychology"
        },
        {
          title: "The 87% Response Rate Template",
          content: "This template has been tested across 15 industries and consistently achieves response rates above 85%:",
          template: {
            subject: "Quick question about [Company's recent achievement]",
            body: "Hi [Name],\n\nI noticed [Company] just [specific recent achievement]. Impressive work on [specific detail].\n\nI'm [brief relevant credential] and have helped similar companies [specific relevant result]. \n\nWould you be open to a brief chat about [specific value proposition]?\n\nBest regards,\n[Your name]"
          }
        },
        {
          title: "Template Variations for Different Scenarios",
          content: "Here are proven variations for specific outreach scenarios:",
          variations: [
            {
              scenario: "Reaching out to hiring managers",
              template: "Subject: [Your background] interested in [Team/Role]\n\nBody: Brief, relevant experience + specific interest in their company + soft ask for conversation"
            },
            {
              scenario: "Networking with industry peers", 
              template: "Subject: Fellow [Industry] professional\n\nBody: Mutual connection/interest + specific compliment + value offer + meeting request"
            }
          ]
        }
      ],
      conclusion: "The key to cold email success isn't just the template—it's the research, personalization, and genuine value proposition you bring to each conversation."
    },
    relatedPosts: [1, 4, 5]
  },
  "salary-negotiation-increase-offer-25-percent": {
    id: 3,
    title: "Salary Negotiation: How to Increase Your Offer by 25%",
    slug: "salary-negotiation-increase-offer-25-percent",
    excerpt: "Master the art of salary negotiation with data-driven strategies and scripts that have helped professionals secure better compensation.",
    category: "Career Growth",
    author: "Emily Johnson",
    authorTitle: "Compensation Consultant",
    authorImage: "/placeholder.svg?height=50&width=50&text=EJ",
    date: "Jan 10, 2024",
    readTime: "12 min read",
    image: "/salary-negotiation-meeting.png",
    tags: ["Salary Negotiation", "Career Growth", "Compensation", "Professional Development"],
    content: {
      introduction: "Salary negotiation is one of the most impactful career skills you can develop. A successful negotiation can add hundreds of thousands of dollars to your lifetime earnings, yet most professionals never learn how to do it effectively.",
      sections: [
        {
          title: "The Foundation: Research and Preparation",
          content: "Before entering any negotiation, you need data. Successful negotiations are built on market research, not emotions or assumptions.",
          steps: [
            "Research salary ranges using Glassdoor, PayScale, and industry reports",
            "Document your achievements and quantifiable contributions",
            "Understand the company's financial position and compensation philosophy",
            "Prepare for multiple scenarios and potential objections"
          ]
        },
        {
          title: "The 25% Increase Strategy",
          content: "This proven framework has helped professionals increase their offers by an average of 25%:",
          framework: [
            {
              step: "Anchor High",
              description: "Start with a number 15-20% above your target",
              example: "If you want $100k, anchor at $115k-120k"
            },
            {
              step: "Justify with Value",
              description: "Connect your ask to specific value you bring",
              example: "Based on my track record of increasing sales by 40%, I believe $115k reflects the value I'll bring to this role"
            },
            {
              step: "Bundle Benefits",
              description: "Negotiate total compensation, not just base salary",
              example: "Consider stock options, flexible work arrangements, professional development budget"
            }
          ]
        },
        {
          title: "Scripts That Work",
          content: "Here are word-for-word scripts for common negotiation scenarios:",
          scripts: [
            {
              scenario: "Initial offer is too low",
              script: "I'm excited about this opportunity. Based on my research and the value I bring, I was expecting something closer to [X]. Can we work together to bridge that gap?"
            },
            {
              scenario: "They say budget is fixed",
              script: "I understand budget constraints. Are there other ways we could structure the compensation package that might work better for both of us?"
            }
          ]
        }
      ],
      conclusion: "Remember, negotiation is a conversation, not a confrontation. Approach it with data, professionalism, and a genuine desire to find a win-win solution."
    },
    relatedPosts: [1, 2, 6]
  },
  "linkedin-profile-optimization-zero-to-hero": {
    id: 4,
    title: "LinkedIn Profile Optimization: From Zero to Hero",
    slug: "linkedin-profile-optimization-zero-to-hero",
    excerpt: "Transform your LinkedIn profile into a lead magnet that attracts recruiters and opportunities with these proven optimization techniques.",
    category: "LinkedIn",
    author: "David Park",
    authorTitle: "LinkedIn Strategist",
    authorImage: "/placeholder.svg?height=50&width=50&text=DP",
    date: "Jan 8, 2024",
    readTime: "10 min read",
    image: "/professional-linkedin-profile.png",
    tags: ["LinkedIn", "Personal Branding", "Networking", "Career Growth"],
    content: {
      introduction: "Your LinkedIn profile is your digital business card, resume, and networking tool all rolled into one. With over 800 million users, standing out requires strategic optimization that goes beyond just filling out the basic fields.",
      sections: [
        {
          title: "The LinkedIn Algorithm: What You Need to Know",
          content: "LinkedIn's algorithm prioritizes profiles that demonstrate expertise, engagement, and activity. Understanding how it works is crucial for maximizing your visibility.",
          image: "/placeholder.svg?height=300&width=600&text=LinkedIn+Algorithm"
        },
        {
          title: "Profile Optimization Checklist",
          content: "Follow this comprehensive checklist to transform your profile:",
          subsections: [
            {
              title: "Professional Photo Strategy",
              content: "Your profile photo is the first impression you make. It's viewed 21 times more than profiles without photos.",
              tips: [
                "Use a high-quality, professional headshot",
                "Smile genuinely and make eye contact with the camera",
                "Dress appropriately for your industry",
                "Use a simple, non-distracting background"
              ]
            },
            {
              title: "Headline Optimization",
              content: "Your headline appears in search results and determines whether people click on your profile.",
              tips: [
                "Include your target job title and key skills",
                "Add industry keywords that recruiters search for",
                "Show value proposition, not just job title",
                "Use all 220 characters available"
              ]
            },
            {
              title: "Summary Section Excellence",
              content: "Your summary is prime real estate for storytelling and keyword optimization.",
              tips: [
                "Start with a compelling hook in the first two lines",
                "Include 3-5 key achievements with numbers",
                "Add relevant keywords naturally throughout",
                "End with a clear call-to-action"
              ]
            }
          ]
        },
        {
          title: "Content Strategy That Works",
          content: "Posting strategic content increases your visibility and establishes thought leadership:",
          framework: [
            {
              step: "Share Industry Insights",
              description: "Post about trends and developments in your field",
              example: "Weekly insights about AI developments in your industry"
            },
            {
              step: "Personal Success Stories",
              description: "Share professional achievements and lessons learned",
              example: "How you solved a complex problem at work"
            },
            {
              step: "Engage Meaningfully",
              description: "Comment thoughtfully on others' posts in your network",
              example: "Add valuable insights to discussions in your field"
            }
          ]
        }
      ],
      conclusion: "LinkedIn optimization is an ongoing process. Consistency in posting, engaging, and updating your profile will compound over time to create significant career opportunities."
    },
    relatedPosts: [1, 3, 5]
  },
  "cover-letter-mistakes-kill-chances": {
    id: 5,
    title: "5 Cover Letter Mistakes That Kill Your Chances",
    slug: "cover-letter-mistakes-kill-chances",
    excerpt: "Avoid these common cover letter pitfalls that immediately disqualify candidates and learn what hiring managers actually want to see.",
    category: "Cover Letters",
    author: "Lisa Wang",
    authorTitle: "Hiring Manager",
    authorImage: "/placeholder.svg?height=50&width=50&text=LW",
    date: "Jan 5, 2024",
    readTime: "7 min read",
    image: "/cover-letter-mistakes.png",
    tags: ["Cover Letters", "Job Applications", "Hiring", "Career Tips"],
    content: {
      introduction: "As a hiring manager who has reviewed over 10,000 cover letters, I've seen the same mistakes repeatedly cost qualified candidates their dream jobs. Here are the most critical errors and how to avoid them.",
      sections: [
        {
          title: "The 5 Fatal Cover Letter Mistakes",
          content: "These mistakes immediately signal to hiring managers that a candidate isn't serious about the role:",
          subsections: [
            {
              title: "Mistake #1: Generic Templates",
              content: "Using the same cover letter for every application is the fastest way to get rejected.",
              tips: [
                "Research the company and mention specific details",
                "Reference the exact job title and requirements",
                "Connect your experience to their specific challenges",
                "Show you understand their company culture and values"
              ]
            },
            {
              title: "Mistake #2: Repeating Your Resume",
              content: "Your cover letter should complement, not duplicate, your resume.",
              tips: [
                "Tell the story behind your achievements",
                "Explain career transitions or gaps",
                "Highlight soft skills that aren't obvious from your resume",
                "Show your personality and communication style"
              ]
            },
            {
              title: "Mistake #3: Focusing on What You Want",
              content: "Hiring managers care about what you can do for them, not what they can do for you.",
              tips: [
                "Lead with the value you bring to the role",
                "Address their pain points and challenges",
                "Quantify your potential impact",
                "Show enthusiasm for contributing to their goals"
              ]
            },
            {
              title: "Mistake #4: Poor Formatting and Errors",
              content: "Typos and poor formatting suggest lack of attention to detail.",
              tips: [
                "Proofread multiple times and use tools like Grammarly",
                "Keep formatting clean and professional",
                "Use standard business letter format",
                "Ensure consistent font and spacing"
              ]
            },
            {
              title: "Mistake #5: Wrong Length",
              content: "Too long and it won't be read; too short and you seem uninterested.",
              tips: [
                "Aim for 3-4 paragraphs and under 400 words",
                "Be concise but comprehensive",
                "Every sentence should add value",
                "Use bullet points sparingly for key achievements"
              ]
            }
          ]
        },
        {
          title: "The Perfect Cover Letter Formula",
          content: "Here's the structure that consistently gets results:",
          framework: [
            {
              step: "Opening Hook",
              description: "Grab attention with a compelling first line",
              example: "'Your recent expansion into AI-driven analytics aligns perfectly with my 5 years of experience in machine learning implementation.'"
            },
            {
              step: "Value Proposition",
              description: "Clearly state what you bring to the role",
              example: "'I increased data processing efficiency by 40% at my previous company using similar technologies.'"
            },
            {
              step: "Proof Points",
              description: "Provide specific examples that support your claims",
              example: "'Led a cross-functional team that delivered a $2M project ahead of schedule.'"
            },
            {
              step: "Company Connection",
              description: "Show why you're excited about this specific opportunity",
              example: "'Your commitment to sustainable technology innovation resonates with my values and career goals.'"
            }
          ]
        }
      ],
      conclusion: "A great cover letter opens doors that a resume alone cannot. Avoid these common mistakes, follow the proven formula, and watch your interview rate increase dramatically."
    },
    relatedPosts: [1, 2, 4]
  },
  "remote-work-interview-preparation-guide": {
    id: 6,
    title: "Remote Work Interview Preparation: Complete Guide",
    slug: "remote-work-interview-preparation-guide",
    excerpt: "Everything you need to know about acing remote job interviews, from technical setup to answering behavioral questions effectively.",
    category: "Interview Prep",
    author: "Alex Thompson",
    authorTitle: "Remote Work Consultant",
    authorImage: "/placeholder.svg?height=50&width=50&text=AT",
    date: "Jan 3, 2024",
    readTime: "15 min read",
    image: "/placeholder-b6vhs.png",
    tags: ["Remote Work", "Interview Prep", "Virtual Interviews", "Career Development"],
    content: {
      introduction: "Remote work interviews have unique challenges that traditional in-person interviews don't have. Success requires mastering both the technical aspects and adapting your communication style for virtual interactions.",
      sections: [
        {
          title: "Technical Setup for Success",
          content: "Your technical setup can make or break a remote interview. First impressions matter more in virtual settings.",
          subsections: [
            {
              title: "Audio and Video Quality",
              content: "Poor audio/video quality immediately creates a negative impression.",
              tips: [
                "Test your camera and microphone 24 hours before the interview",
                "Use a wired internet connection when possible",
                "Have a backup plan (phone hotspot, alternative device)",
                "Invest in a decent headset or external microphone"
              ]
            },
            {
              title: "Lighting and Background",
              content: "Professional appearance extends to your virtual environment.",
              tips: [
                "Position yourself facing a window for natural lighting",
                "Use a plain, uncluttered background",
                "Avoid sitting with a window behind you",
                "Test your setup at the same time of day as your interview"
              ]
            }
          ]
        },
        {
          title: "Virtual Communication Best Practices",
          content: "Effective virtual communication requires different skills than in-person interactions:",
          framework: [
            {
              step: "Eye Contact Technique",
              description: "Look at the camera, not the screen, when speaking",
              example: "Place a small arrow near your camera as a reminder"
            },
            {
              step: "Energy and Enthusiasm",
              description: "Increase your energy by 20% to compensate for virtual distance",
              example: "Smile more, use hand gestures, and vary your vocal tone"
            },
            {
              step: "Clear Communication",
              description: "Speak slower and more clearly than in person",
              example: "Pause between thoughts and ask for confirmation if needed"
            }
          ]
        },
        {
          title: "Remote-Specific Interview Questions",
          content: "Prepare for questions that are unique to remote positions:",
          scripts: [
            {
              scenario: "How do you stay productive working from home?",
              script: "I maintain productivity through structured routines, dedicated workspace, and clear boundaries. I use time-blocking techniques and regular check-ins with my team to stay accountable."
            },
            {
              scenario: "How do you handle communication in a remote team?",
              script: "I believe in over-communicating rather than under-communicating. I prefer written updates for documentation and video calls for complex discussions. I'm proactive about reaching out when I need clarification."
            }
          ]
        }
      ],
      conclusion: "Remote interviews are an opportunity to demonstrate your digital communication skills and remote work readiness. With proper preparation and practice, you can excel in virtual interview environments."
    },
    relatedPosts: [3, 4, 5]
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blogs">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-black/50 backdrop-blur-sm border-white/10 relative z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Blogs</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">
              <span className="text-emerald-400">Syn</span>
              <span className="text-white">texa</span>
            </span>
          </div>
        </div>
      </header>

      <main className="py-20 relative">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2 backdrop-blur-sm">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                    <div className="text-gray-400 text-sm">{post.authorTitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-white/5 border-white/20 text-gray-400">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-emerald max-w-none">
              {/* Introduction */}
              <div className="text-lg text-gray-300 mb-12 leading-relaxed bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                {post.content.introduction}
              </div>

              {/* Main Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
                  
                  {section.image && (
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{section.content}</p>

                  {/* Template Display */}
                  {section.template && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
                      <h4 className="text-emerald-400 font-semibold mb-4">Email Template:</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-emerald-300 font-medium">Subject: </span>
                          <span className="text-gray-300">{section.template.subject}</span>
                        </div>
                        <div>
                          <span className="text-emerald-300 font-medium">Body:</span>
                          <pre className="text-gray-300 whitespace-pre-wrap mt-2 font-mono text-sm bg-black/30 p-4 rounded-lg">
                            {section.template.body}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Framework Steps */}
                  {section.framework && (
                    <div className="space-y-4 mb-6">
                      {section.framework.map((item, i) => (
                        <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <h4 className="text-emerald-400 font-semibold mb-2">{item.step}</h4>
                          <p className="text-gray-300 mb-3">{item.description}</p>
                          <div className="text-sm text-gray-400 bg-black/30 p-3 rounded-lg">
                            <strong>Example:</strong> {item.example}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-8 mb-6">
                      {section.subsections.map((subsection, i) => (
                        <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <h3 className="text-xl font-semibold text-white mb-4">{subsection.title}</h3>
                          <p className="text-gray-300 mb-4">{subsection.content}</p>
                          {subsection.tips && (
                            <ul className="space-y-2">
                              {subsection.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-3 text-gray-300">
                                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats Display */}
                  {section.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {section.stats.map((stat, i) => (
                        <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                          <div className="text-white font-medium mb-1">{stat.label}</div>
                          <div className="text-gray-400 text-sm">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 p-8 rounded-2xl border border-emerald-500/20 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                <p className="text-gray-300 leading-relaxed">{post.content.conclusion}</p>
              </div>

              {/* Call to Action */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply These Strategies?</h3>
                <p className="text-gray-300 mb-6">
                  Get our free AI-powered tools to optimize your resume and start getting more interviews.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Try Syntexa Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* You would fetch related posts here based on post.relatedPosts */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/email-templates.png"
                      alt="Related post"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold mb-2">Cold Email Templates That Work</h4>
                    <p className="text-gray-400 text-sm mb-4">Learn proven email templates...</p>
                    <Link href="/blogs/cold-email-templates-87-response-rates">
                      <Button variant="outline" size="sm" className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}