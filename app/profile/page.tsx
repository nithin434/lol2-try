"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, Star, Edit, Download, Share, Eye, TrendingUp, Target } from 'lucide-react'
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [profileViews] = useState(127)
  const [profileStrength] = useState(85)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-30">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-black">Profile</h1>
                <p className="text-gray-600">Manage your professional profile and showcase your expertise</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="border-gray-300">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" className="bg-black hover:bg-gray-800">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </header>

          <main className="p-4 lg:p-6 space-y-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start">
                      <Avatar className="h-32 w-32 border-4 border-gray-200">
                        <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                        <AvatarFallback className="bg-black text-white text-2xl font-bold">JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="mt-4 border-gray-300">
                        <Edit className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-3xl font-bold text-black">John Doe</h2>
                        <p className="text-xl text-gray-600">Senior Software Engineer</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            <span>john.doe@example.com</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            <span>+1 (555) 123-4567</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        Passionate software engineer with 5+ years of experience building scalable web applications.
                        Specialized in React, Node.js, and cloud technologies. Led teams of 8+ developers and delivered
                        products used by millions of users.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Node.js", "AWS", "Python", "Docker"].map((skill) => (
                          <Badge key={skill} className="bg-black text-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-64 space-y-4">
                      <Card className="bg-gray-50 border border-gray-200">
                        <CardContent className="pt-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-black">{profileViews}</div>
                            <div className="text-sm text-gray-600">Profile Views</div>
                            <div className="text-xs text-green-600 mt-1">+23% this week</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-50 border border-gray-200">
                        <CardContent className="pt-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-black">Profile Strength</span>
                              <span className="text-sm font-bold text-black">{profileStrength}%</span>
                            </div>
                            <Progress value={profileStrength} className="h-2 bg-gray-200" />
                            <div className="text-xs text-gray-600">Add 2 more skills to reach 95%</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Tabs defaultValue="experience" className="space-y-6">
              <TabsList className="bg-gray-100 border border-gray-200 p-1 rounded-xl">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Achievements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: "Senior Software Engineer",
                      company: "Tech Solutions Inc.",
                      period: "2022 - Present",
                      location: "San Francisco, CA",
                      current: true,
                      description:
                        "Lead a team of 8 engineers developing scalable web applications. Increased user engagement by 45% through performance optimizations and new feature development.",
                      achievements: [
                        "Led migration to microservices architecture, reducing deployment time by 60%",
                        "Implemented CI/CD pipeline that decreased bug reports by 40%",
                        "Mentored 3 junior developers, 2 of whom were promoted within 6 months",
                      ],
                    },
                    {
                      title: "Software Engineer",
                      company: "StartupXYZ",
                      period: "2020 - 2022",
                      location: "San Francisco, CA",
                      current: false,
                      description:
                        "Full-stack development of customer-facing applications using React and Node.js. Collaborated with design and product teams to deliver user-centric solutions.",
                      achievements: [
                        "Built real-time chat feature used by 50K+ daily active users",
                        "Optimized database queries, improving response times by 35%",
                        "Contributed to open-source projects with 1K+ GitHub stars",
                      ],
                    },
                  ].map((job, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-black">{job.title}</h3>
                            <p className="text-lg text-gray-600">{job.company}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{job.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                          {job.current && <Badge className="bg-green-100 text-green-800">Current</Badge>}
                        </div>

                        <p className="text-gray-700 mb-4">{job.description}</p>

                        <div>
                          <h4 className="font-semibold text-black mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    {
                      degree: "Bachelor of Science in Computer Science",
                      school: "University of California, Berkeley",
                      period: "2016 - 2020",
                      gpa: "3.8/4.0",
                      honors: "Magna Cum Laude",
                      coursework: [
                        "Data Structures and Algorithms",
                        "Software Engineering",
                        "Database Systems",
                        "Machine Learning",
                      ],
                    },
                    {
                      degree: "AWS Certified Solutions Architect",
                      school: "Amazon Web Services",
                      period: "2023",
                      gpa: null,
                      honors: "Professional Certification",
                      coursework: ["Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
                    },
                  ].map((edu, index) => (
                    <Card key={index} className="bg-white border border-gray-200">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                            <p className="text-lg text-gray-600">{edu.school}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.period}</span>
                              </div>
                              {edu.gpa && (
                                <div>
                                  <span>GPA: {edu.gpa}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <Badge className="bg-black text-white">{edu.honors}</Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold text-black mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, i) => (
                              <Badge key={i} variant="outline" className="border-gray-300">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Technical Skills</CardTitle>
                      <CardDescription>Your proficiency in various technologies</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { skill: "React/Next.js", level: 95, years: "5 years" },
                        { skill: "TypeScript", level: 90, years: "4 years" },
                        { skill: "Node.js", level: 85, years: "4 years" },
                        { skill: "Python", level: 80, years: "3 years" },
                        { skill: "AWS", level: 75, years: "2 years" },
                        { skill: "Docker", level: 70, years: "2 years" },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-black">{item.skill}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">{item.years}</span>
                              <span className="text-sm font-semibold text-black">{item.level}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-black h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Soft Skills</CardTitle>
                      <CardDescription>Leadership and interpersonal abilities</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { skill: "Team Leadership", level: 90 },
                        { skill: "Communication", level: 95 },
                        { skill: "Problem Solving", level: 92 },
                        { skill: "Project Management", level: 85 },
                        { skill: "Mentoring", level: 88 },
                        { skill: "Strategic Thinking", level: 82 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-black">{item.skill}</span>
                            <span className="text-sm font-semibold text-black">{item.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gray-700 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: "Employee of the Year",
                      organization: "Tech Solutions Inc.",
                      date: "2023",
                      description: "Recognized for outstanding leadership and technical contributions",
                      icon: Award,
                    },
                    {
                      title: "AWS Solutions Architect Certification",
                      organization: "Amazon Web Services",
                      date: "2023",
                      description: "Professional certification in cloud architecture and best practices",
                      icon: Target,
                    },
                    {
                      title: "Open Source Contributor",
                      organization: "GitHub",
                      date: "2022",
                      description: "Contributed to 15+ open source projects with 5K+ combined stars",
                      icon: Star,
                    },
                    {
                      title: "Tech Conference Speaker",
                      organization: "ReactConf 2022",
                      date: "2022",
                      description: "Presented on 'Building Scalable React Applications' to 500+ attendees",
                      icon: TrendingUp,
                    },
                  ].map((achievement, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center">
                            <achievement.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-bold text-black">{achievement.title}</h3>
                              <span className="text-sm text-gray-500">{achievement.date}</span>
                            </div>
                            <p className="text-gray-600 mb-2">{achievement.organization}</p>
                            <p className="text-gray-700">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>

            {/* Profile Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-black text-white border border-gray-200">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold">Ready to Share Your Profile?</h3>
                    <p className="text-gray-300">
                      Your profile is {profileStrength}% complete. Share it with recruiters or download as PDF.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button className="bg-white text-black hover:bg-gray-100">
                        <Share className="h-4 w-4 mr-2" />
                        Share Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  )
}
