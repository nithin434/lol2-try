import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Syntexa - AI-Powered Resume Analyzer & Career Acceleration Platform",
    template: "%s | Syntexa - AI Career Tools"
  },
  description: "Transform your job search with Syntexa's AI-powered resume optimization, cover letter generator, cold email templates, ATS analysis, and career insights. Get hired faster with our advanced AI tools.",
  keywords: [
    "AI resume analyzer", "resume optimization", "cover letter generator", "cold email templates",
    "ATS resume checker", "job search tools", "career acceleration", "resume builder",
    "AI career coach", "job application tools", "resume scanner", "interview preparation",
    "LinkedIn optimization", "salary negotiation", "professional resume", "career insights",
    "job matching", "resume keywords", "applicant tracking system", "career development"
  ],
  authors: [{ name: "Syntexa Team" }],
  creator: "Syntexa",
  publisher: "Syntexa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://main.syntexa.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://main.syntexa.app',
    title: 'Syntexa - AI-Powered Resume Analyzer & Career Acceleration Platform',
    description: 'Transform your job search with AI-powered resume optimization, cover letter generator, and career insights. Get hired faster with advanced AI tools.',
    siteName: 'Syntexa',
    images: [
      {
        url: '/resume-optimization.png',
        width: 1200,
        height: 630,
        alt: 'Syntexa AI Resume Optimization Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntexa - AI-Powered Resume Analyzer & Career Tools',
    description: 'Transform your job search with AI-powered resume optimization, cover letter generator, and career insights.',
    images: ['/resume-optimization.png'],
    creator: '@syntexa',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Career Tools, AI Technology, Resume Optimization',
  generator: 'Next.js',
  applicationName: 'Syntexa',
  referrer: 'origin-when-cross-origin',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#10b981',
    'color-scheme': 'light',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Syntexa",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered resume analyzer and career acceleration platform that helps job seekers optimize their resumes, generate cover letters, and accelerate their career growth.",
    "url": "https://main.syntexa.app",
    "creator": {
      "@type": "Organization",
      "name": "Syntexa",
      "url": "https://main.syntexa.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "AI Resume Analysis",
      "Cover Letter Generator", 
      "Cold Email Templates",
      "ATS Compatibility Check",
      "Career Insights",
      "Job Matching",
      "Resume Optimization",
      "Interview Preparation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
