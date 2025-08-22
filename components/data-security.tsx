import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, ShieldCheck, FileX, CheckCircle, AlertCircle } from "lucide-react"

export function DataSecurity() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Data Security</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We prioritize your privacy and security with industry-leading practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SecurityCard
            icon={<Lock className="h-8 w-8 text-blue-600" />}
            title="Encrypted Processing"
            description="Your resume is encrypted with 256-bit encryption before processing. All data transmission is secured with SSL/TLS."
          />

          <SecurityCard
            icon={<FileX className="h-8 w-8 text-blue-600" />}
            title="No Long-Term Storage"
            description="We never store your resume long-term. All data is automatically deleted after processing is complete."
          />

          <SecurityCard
            icon={<ShieldCheck className="h-8 w-8 text-blue-600" />}
            title="Compliance & Certification"
            description="We're fully compliant with GDPR, CCPA, and other privacy regulations to ensure your data is protected."
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Data Flow Transparency</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <DataFlowStep
                  number={1}
                  title="Upload"
                  description="Your resume is encrypted in your browser before transmission."
                  status="secure"
                />

                <DataFlowStep
                  number={2}
                  title="Processing"
                  description="Secure analysis in isolated environment with no human access."
                  status="secure"
                />

                <DataFlowStep
                  number={3}
                  title="Results"
                  description="Only you can access your results through encrypted connection."
                  status="secure"
                />

                <DataFlowStep
                  number={4}
                  title="Deletion"
                  description="All resume data is permanently deleted after 24 hours."
                  status="secure"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Badge variant="outline" className="py-1.5 px-3">
            <Lock className="h-4 w-4 mr-1" />
            GDPR Compliant
          </Badge>
          <Badge variant="outline" className="py-1.5 px-3">
            <Lock className="h-4 w-4 mr-1" />
            CCPA Compliant
          </Badge>
          <Badge variant="outline" className="py-1.5 px-3">
            <Lock className="h-4 w-4 mr-1" />
            SOC 2 Certified
          </Badge>
          <Badge variant="outline" className="py-1.5 px-3">
            <Lock className="h-4 w-4 mr-1" />
            256-bit Encryption
          </Badge>
        </div>
      </div>
    </section>
  )
}

function SecurityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function DataFlowStep({
  number,
  title,
  description,
  status,
}: {
  number: number
  title: string
  description: string
  status: "secure" | "warning" | "danger"
}) {
  return (
    <div className="relative">
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-2">
          {number}
        </div>
        <h4 className="font-bold">{title}</h4>
        {status === "secure" && <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />}
        {status === "warning" && <AlertCircle className="h-4 w-4 text-yellow-600 ml-auto" />}
        {status === "danger" && <AlertCircle className="h-4 w-4 text-red-600 ml-auto" />}
      </div>
      <p className="text-sm text-gray-600 ml-10">{description}</p>

      {number < 4 && <div className="hidden md:block absolute top-4 -right-4 w-8 h-0.5 bg-blue-200 z-0"></div>}
    </div>
  )
}
