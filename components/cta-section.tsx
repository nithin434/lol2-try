import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, CreditCard } from "lucide-react"

export function CTASection() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Job Search?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started today and see the difference our AI-powered resume optimization can make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free Trial"
            price="$0"
            description="Try our basic features for free"
            features={["ATS Score Analysis", "Basic Resume Feedback", "1 Resume Upload", "24-hour Data Access"]}
            buttonText="Start Free Trial"
            buttonVariant="outline"
            popular={false}
          />

          <PricingCard
            title="Professional"
            price="$19"
            period="monthly"
            description="Everything you need for your job search"
            features={[
              "Unlimited Resume Uploads",
              "Advanced ATS Optimization",
              "Job Match Analysis",
              "Cover Letter Generator",
              "30-day Data Access",
            ]}
            buttonText="Get Started"
            buttonVariant="default"
            popular={true}
          />

          <PricingCard
            title="Premium"
            price="$39"
            period="monthly"
            description="Advanced features for serious job seekers"
            features={[
              "All Professional Features",
              "Salary Negotiation Tools",
              "Career Roadmap & Skill Gap Analysis",
              "Priority Support",
              "LinkedIn Profile Optimization",
              "90-day Data Access",
            ]}
            buttonText="Go Premium"
            buttonVariant="default"
            popular={false}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
            <CreditCard className="h-4 w-4" />
            No credit card required for free trial
          </p>
          <p className="text-sm text-gray-600">
            All plans include our secure, encrypted processing and data protection.
          </p>
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular,
}: {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular: boolean
}) {
  return (
    <Card className={`relative h-full ${popular ? "border-blue-500 shadow-lg" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white hover:bg-blue-600">Most Popular</Badge>
        </div>
      )}
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-baseline mb-2">
            <span className="text-3xl font-bold">{price}</span>
            {period && <span className="text-gray-500 ml-1">/{period}</span>}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/signup" className="mt-auto">
          <Button variant={buttonVariant} className="w-full">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
