"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Facebook, Instagram } from 'lucide-react'
import dynamic from "next/dynamic"

// 동적 임포트로 LaunchAlert 컴포넌트 로드
const LaunchAlert = dynamic(() => import("@/components/launch-alert"), {
  ssr: false,
})

export default function ColumnSignupPage() {
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    relationshipStatus: "",
  })

  const openAlert = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAlertOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // 실제 Make.com 웹훅 URL로 직접 데이터 전송
      const response = await fetch("https://hook.us2.make.com/81b1jf08oeakdjlaojhkn4xgoundju1t", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // CORS 문제 해결을 위한 추가 헤더
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // 성공 메시지 표시
        setIsSuccess(true)
        // 폼 초기화
        setFormData({
          name: "",
          email: "",
          relationshipStatus: "",
        })
      } else {
        // 에러 처리
        const data = await response.json().catch(() => ({ message: "Unknown error" }))
        console.error("Form submission failed:", data.message || "Unknown error")
        setErrorMessage(data.message || "Form submission failed. Please try again later.")
        alert("죄송합니다. 문제가 발생했습니다. 나중에 다시 시도해주세요.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("An unexpected error occurred. Please try again later.")
      alert("죄송합니다. 문제가 발생했습니다. 나중에 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
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
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-white to-rose-50">
        <div className="container py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Get Free Relationship Columns</h1>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Receive free columns with valuable relationship advice via email. We provide practical tips that can help
              your relationship situation all at once.
            </p>

            {isSuccess ? (
              <div className="bg-green-50 p-8 rounded-2xl shadow-soft text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
                <p className="text-gray-700 mb-6">
                  Your free relationship column has been sent to your email. Please check your inbox (and spam folder
                  just in case).
                </p>
                <Button onClick={() => setIsSuccess(false)} className="bg-rose-500 hover:bg-rose-600 rounded-full">
                  Sign Up for Another Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-soft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    placeholder="Name"
                    className="bg-white h-12 text-base"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="bg-white h-12 text-base"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <select
                  className="w-full p-3 rounded-md border border-gray-300 bg-white h-12 text-base"
                  name="relationshipStatus"
                  value={formData.relationshipStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Current Relationship Status (Optional)</option>
                  <option value="single">Single</option>
                  <option value="dating">Dating</option>
                  <option value="relationship">In a Relationship</option>
                  <option value="breakup">Post-Breakup</option>
                </select>

                {errorMessage && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{errorMessage}</div>}

                <Button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 rounded-full h-12 font-medium text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Free Columns"}
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Your information is securely protected, and we will not send spam emails.
                </p>
              </form>
            )}

            <div className="mt-10">
              <Link href="/" className="text-rose-500 hover:text-rose-600 font-medium">
                Return to Home
              </Link>
            </div>
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
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/column" className="text-gray-400 hover:text-white transition-colors text-sm">
              Free Relationship Columns
            </Link>
            <a href="#" onClick={openAlert} className="text-gray-400 hover:text-white transition-colors text-sm">
              AI Relationship Counseling
            </a>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
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
      {isAlertOpen && <LaunchAlert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />}
    </div>
  )
}
