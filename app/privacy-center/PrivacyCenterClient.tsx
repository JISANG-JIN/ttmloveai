"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, ArrowLeft, Shield, Lock, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// 쿠키 유형 정의
type CookieType = "essential" | "functional" | "analytics" | "marketing"

// 쿠키 설정 상태 인터페이스
interface CookieSettings {
  essential: boolean // 필수 쿠키는 항상 true
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function PrivacyCenterClient() {
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  const [doNotSell, setDoNotSell] = useState(false)
  const [deleteRequestSubmitted, setDeleteRequestSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    confirmDelete: false,
  })

  // 저장된 쿠키 설정 불러오기
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent) {
      try {
        const savedSettings = JSON.parse(consent)
        setCookieSettings(savedSettings)
      } catch (e) {
        console.error("Error parsing cookie settings", e)
      }
    }

    // Do Not Sell 설정 불러오기
    const doNotSellSetting = localStorage.getItem("do-not-sell")
    if (doNotSellSetting === "true") {
      setDoNotSell(true)
    }
  }, [])

  const handleCookieToggle = (type: CookieType) => {
    const newSettings = {
      ...cookieSettings,
      [type]: !cookieSettings[type],
    }

    setCookieSettings(newSettings)
    localStorage.setItem("cookie-consent", JSON.stringify(newSettings))

    // 여기에 각 쿠키 유형에 따른 실제 쿠키 설정 로직 추가
  }

  const handleDoNotSellToggle = () => {
    const newValue = !doNotSell
    setDoNotSell(newValue)
    localStorage.setItem("do-not-sell", newValue.toString())

    // 여기에 Do Not Sell 설정에 따른 추가 로직 구현
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      confirmDelete: checked,
    }))
  }

  const handleDeleteRequest = (e: React.FormEvent) => {
    e.preventDefault()

    // 여기에 실제 데이터 삭제 요청 로직 구현
    console.log("Data deletion request submitted:", formData)

    // 요청 성공 표시
    setDeleteRequestSubmitted(true)

    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      reason: "",
      confirmDelete: false,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="TTM LOVE AI Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-2xl font-playfair font-bold gradient-heading">TTM LOVE AI</span>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600 mb-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Privacy Center</h1>
              <p className="text-gray-600">
                Manage your privacy preferences, cookie settings, and data deletion requests.
              </p>
            </div>

            <Tabs defaultValue="cookie-settings" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cookie-settings">Cookie Settings</TabsTrigger>
                <TabsTrigger value="do-not-sell">Do Not Sell My Info</TabsTrigger>
                <TabsTrigger value="data-deletion">Data Deletion</TabsTrigger>
              </TabsList>

              {/* Cookie Settings Tab */}
              <TabsContent value="cookie-settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-rose-500" />
                      Cookie Preferences
                    </CardTitle>
                    <CardDescription>
                      Manage which types of cookies you allow us to use. Essential cookies cannot be disabled as they
                      are necessary for the website to function.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Essential Cookies</h3>
                          <p className="text-sm text-gray-500">Necessary for the website to function properly</p>
                        </div>
                        <Switch checked={cookieSettings.essential} disabled />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Functional Cookies</h3>
                          <p className="text-sm text-gray-500">Enable personalized features and functionality</p>
                        </div>
                        <Switch
                          checked={cookieSettings.functional}
                          onCheckedChange={() => handleCookieToggle("functional")}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Analytics Cookies</h3>
                          <p className="text-sm text-gray-500">Help us understand how visitors use our website</p>
                        </div>
                        <Switch
                          checked={cookieSettings.analytics}
                          onCheckedChange={() => handleCookieToggle("analytics")}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Marketing Cookies</h3>
                          <p className="text-sm text-gray-500">Used for targeted advertising and marketing purposes</p>
                        </div>
                        <Switch
                          checked={cookieSettings.marketing}
                          onCheckedChange={() => handleCookieToggle("marketing")}
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <h3 className="font-medium mb-2">More Information</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        For more details about the cookies we use and how we process your data, please read our:
                      </p>
                      <div className="flex gap-4">
                        <Link href="/legal/cookies" className="text-rose-500 hover:text-rose-600 text-sm font-medium">
                          Cookie Policy
                        </Link>
                        <Link href="/legal/privacy" className="text-rose-500 hover:text-rose-600 text-sm font-medium">
                          Privacy Policy
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Do Not Sell Tab */}
              <TabsContent value="do-not-sell" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-rose-500" />
                      Do Not Sell My Personal Information
                    </CardTitle>
                    <CardDescription>
                      Under the California Consumer Privacy Act (CCPA), you have the right to opt-out of the sale of
                      your personal information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <h3 className="font-medium mb-2">What This Means</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        When you opt out of the sale of your personal information, we will:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2 mb-4">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          <span>Stop sharing your personal information with third parties for marketing purposes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          <span>Disable certain tracking technologies that share data with third parties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          <span>Continue to collect essential information needed to provide our services</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <h3 className="font-medium">Do Not Sell My Personal Information</h3>
                        <p className="text-sm text-gray-500">
                          {doNotSell
                            ? "You have opted out of the sale of your personal information."
                            : "Toggle this switch to opt out of the sale of your personal information."}
                        </p>
                      </div>
                      <Switch checked={doNotSell} onCheckedChange={handleDoNotSellToggle} />
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <h3 className="font-medium mb-2">Your California Privacy Rights</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        California residents have specific rights regarding their personal data under the CCPA. Learn
                        more about your rights in our:
                      </p>
                      <Link
                        href="/legal/privacy#california-rights"
                        className="text-rose-500 hover:text-rose-600 text-sm font-medium"
                      >
                        California Privacy Rights Section
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Data Deletion Tab */}
              <TabsContent value="data-deletion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trash2 className="h-5 w-5 mr-2 text-rose-500" />
                      Request Data Deletion
                    </CardTitle>
                    <CardDescription>
                      You have the right to request deletion of your personal information. Please note that this action
                      cannot be undone.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {deleteRequestSubmitted ? (
                      <div className="bg-green-50 p-6 rounded-md text-center">
                        <h3 className="font-medium text-green-700 mb-2">Request Submitted Successfully</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          We have received your data deletion request. Our team will process your request within 30 days
                          and will contact you via email with updates.
                        </p>
                        <Button variant="outline" onClick={() => setDeleteRequestSubmitted(false)} className="mt-2">
                          Submit Another Request
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleDeleteRequest}>
                        <div className="space-y-4 mb-6">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                          </div>

                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Must match the email associated with your account
                            </p>
                          </div>

                          <div>
                            <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
                            <Textarea
                              id="reason"
                              name="reason"
                              value={formData.reason}
                              onChange={handleInputChange}
                              placeholder="Please let us know why you're requesting data deletion"
                              className="resize-none h-24"
                            />
                          </div>

                          <div className="bg-amber-50 p-4 rounded-md">
                            <h3 className="font-medium text-amber-700 mb-2">Important Information</h3>
                            <p className="text-sm text-gray-600 mb-4">When you request data deletion:</p>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>All your personal information will be permanently deleted from our systems</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>
                                  Your account will be deactivated and you will no longer have access to our services
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>This process may take up to 30 days to complete</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex items-start space-x-2 mt-4">
                            <Checkbox
                              id="confirmDelete"
                              checked={formData.confirmDelete}
                              onCheckedChange={handleCheckboxChange}
                              required
                            />
                            <label
                              htmlFor="confirmDelete"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I understand that this action cannot be undone and all my data will be permanently deleted
                            </label>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="bg-rose-500 hover:bg-rose-600 w-full"
                          disabled={!formData.confirmDelete}
                        >
                          Submit Deletion Request
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/images/logo.png" alt="TTM LOVE AI Logo" width={24} height={24} className="h-5 w-auto" />
            <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
              TTM LOVE AI
            </span>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
          <div className="flex justify-center gap-3 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn w-9 h-9"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a
              href="https://www.instagram.com/ttmloveai/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn w-9 h-9"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2025 TTM AI LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
