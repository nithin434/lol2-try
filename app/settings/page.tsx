"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Bell, Shield, CreditCard, Download, Trash2, Eye, EyeOff, Save, AlertTriangle, CheckCircle } from 'lucide-react'
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-30">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-black">Settings</h1>
              <p className="text-gray-600">Manage your account preferences and security settings</p>
            </div>
          </header>

          <main className="p-4 lg:p-6">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="bg-gray-100 border border-gray-200 p-1 rounded-xl">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-600 rounded-lg transition-all duration-300"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Personal Information</CardTitle>
                      <CardDescription>Update your personal details and preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-black">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            defaultValue="John"
                            className="border-gray-300 focus:border-black focus:ring-black/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-black">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            defaultValue="Doe"
                            className="border-gray-300 focus:border-black focus:ring-black/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-black">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="border-gray-300 focus:border-black focus:ring-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-black">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                          className="border-gray-300 focus:border-black focus:ring-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-black">
                          Location
                        </Label>
                        <Input
                          id="location"
                          defaultValue="San Francisco, CA"
                          className="border-gray-300 focus:border-black focus:ring-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-black">
                          Professional Bio
                        </Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about your professional background..."
                          className="border-gray-300 focus:border-black focus:ring-black/20 min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-black">
                          Experience Level
                        </Label>
                        <Select defaultValue="mid">
                          <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black/20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                            <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                            <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                            <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardContent className="pt-0">
                      <Button className="bg-black hover:bg-gray-800 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Notification Preferences</CardTitle>
                      <CardDescription>Choose how you want to receive updates and alerts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-black">Email Notifications</h4>
                            <p className="text-sm text-gray-600">Receive updates about your applications and matches</p>
                          </div>
                          <Switch
                            checked={notifications.email}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, email: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-black">Push Notifications</h4>
                            <p className="text-sm text-gray-600">Get instant alerts on your device</p>
                          </div>
                          <Switch
                            checked={notifications.push}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, push: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-black">SMS Notifications</h4>
                            <p className="text-sm text-gray-600">Receive text messages for urgent updates</p>
                          </div>
                          <Switch
                            checked={notifications.sms}
                            onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, sms: checked }))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-black">Marketing Communications</h4>
                            <p className="text-sm text-gray-600">Tips, insights, and product updates</p>
                          </div>
                          <Switch
                            checked={notifications.marketing}
                            onCheckedChange={(checked) =>
                              setNotifications((prev) => ({ ...prev, marketing: checked }))
                            }
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardContent className="pt-0">
                      <Button className="bg-black hover:bg-gray-800 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        Save Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Change Password</CardTitle>
                      <CardDescription>Update your password to keep your account secure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-black">
                          Current Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            className="border-gray-300 focus:border-black focus:ring-black/20"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-black">
                          New Password
                        </Label>
                        <Input
                          id="newPassword"
                          type="password"
                          className="border-gray-300 focus:border-black focus:ring-black/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-black">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          className="border-gray-300 focus:border-black focus:ring-black/20"
                        />
                      </div>
                    </CardContent>
                    <CardContent className="pt-0">
                      <Button className="bg-black hover:bg-gray-800 text-white">Update Password</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Two-Factor Authentication</CardTitle>
                      <CardDescription>Add an extra layer of security to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-black">Enable 2FA</h4>
                          <p className="text-sm text-gray-600">Secure your account with two-factor authentication</p>
                        </div>
                        <Button variant="outline" className="border-gray-300">
                          Enable
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Data & Privacy</CardTitle>
                      <CardDescription>Manage your data and privacy settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full border-gray-300">
                        <Download className="h-4 w-4 mr-2" />
                        Download My Data
                      </Button>
                      <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="billing" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Current Plan</CardTitle>
                      <CardDescription>Manage your subscription and billing information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-black">Professional Plan</h4>
                          <p className="text-sm text-gray-600">$19/month • Renews on May 15, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="border-gray-300">
                            Change Plan
                          </Button>
                          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Payment Method</CardTitle>
                      <CardDescription>Update your payment information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">VISA</span>
                          </div>
                          <div>
                            <p className="font-medium text-black">•••• •••• •••• 4242</p>
                            <p className="text-sm text-gray-600">Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-gray-300">
                          Update
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-black">Billing History</CardTitle>
                      <CardDescription>View and download your invoices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { date: "Apr 15, 2024", amount: "$19.00", status: "Paid" },
                          { date: "Mar 15, 2024", amount: "$19.00", status: "Paid" },
                          { date: "Feb 15, 2024", amount: "$19.00", status: "Paid" },
                        ].map((invoice, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-medium text-black">{invoice.amount}</p>
                              <p className="text-sm text-gray-600">{invoice.date}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-green-600 flex items-center gap-1">
                                <CheckCircle className="h-4 w-4" />
                                {invoice.status}
                              </span>
                              <Button variant="outline" size="sm" className="border-gray-300">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
