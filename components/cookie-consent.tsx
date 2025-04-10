"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

// 쿠키 유형 정의
type CookieType = "essential" | "functional" | "analytics" | "marketing"

// 쿠키 설정 상태 인터페이스
interface CookieSettings {
  essential: boolean // 필수 쿠키는 항상 true
  functional: boolean
  analytics: boolean
  marketing: boolean
}

// 지역 정보 인터페이스
interface RegionInfo {
  isUS: boolean
  isCalifornia: boolean
  isEU: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [regionInfo, setRegionInfo] = useState<RegionInfo>({
    isUS: true, // 기본값으로 미국 설정
    isCalifornia: false,
    isEU: false,
  })

  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true, // 필수 쿠키는 항상 활성화
    functional: false,
    analytics: false,
    marketing: false,
  })

  // 지역 정보 감지 (실제 구현에서는 IP 기반 서비스 사용 권장)
  useEffect(() => {
    // 실제 구현에서는 IP 기반 지역 감지 서비스를 사용해야 함
    // 여기서는 예시로 미국으로 설정
    const detectRegion = async () => {
      // 실제 구현: const response = await fetch('https://geolocation-api.com/...')
      // 여기서는 예시로 미국/캘리포니아로 설정
      setRegionInfo({
        isUS: true,
        isCalifornia: true, // 캘리포니아 사용자로 가정
        isEU: false,
      })
    }

    detectRegion()
  }, [])

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    } else {
      try {
        // 저장된 설정이 있으면 불러오기
        const savedSettings = JSON.parse(consent)
        setCookieSettings(savedSettings)
      } catch (e) {
        // 파싱 오류 시 기본값 사용
        console.error("Error parsing cookie settings", e)
      }
    }
  }, [])

  const saveCookieSettings = (settings: CookieSettings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(settings))
    setIsVisible(false)

    // 여기에 각 쿠키 유형에 따른 실제 쿠키 설정 로직 추가
    // 예: settings.analytics가 true이면 Google Analytics 활성화
  }

  const acceptAllCookies = () => {
    const allAccepted: CookieSettings = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    saveCookieSettings(allAccepted)
  }

  const acceptSelectedCookies = () => {
    saveCookieSettings(cookieSettings)
  }

  const declineCookies = () => {
    const essentialOnly: CookieSettings = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    saveCookieSettings(essentialOnly)
  }

  const handleCookieToggle = (type: CookieType) => {
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const openCookieSettings = () => {
    setShowDetails(!showDetails)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container py-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="TTM LOVE AI Logo" width={28} height={28} className="h-7 w-auto" />
            <h3 className="text-lg font-bold">Privacy Preferences</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full p-2"
            onClick={() => setIsVisible(false)}
            aria-label="Close cookie consent"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>

          {regionInfo.isCalifornia && (
            <div className="bg-gray-50 p-3 rounded-md mb-3">
              <p className="text-sm text-gray-700">
                <strong>California Residents:</strong> Under the California Consumer Privacy Act (CCPA), you have the
                right to opt-out of the sale of your personal information.
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600 ml-1 font-medium">
                  Do Not Sell My Personal Information
                </Link>
              </p>
            </div>
          )}

          <div className="flex items-center">
            <Button variant="outline" size="sm" onClick={openCookieSettings} className="text-xs mr-2">
              {showDetails ? "Hide Details" : "Cookie Settings"}
            </Button>
            <Link href="/legal/cookies" className="text-xs text-rose-500 hover:text-rose-600">
              View Cookie Policy
            </Link>
          </div>
        </div>

        {showDetails && (
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h4 className="font-bold text-sm mb-3">Manage Consent Preferences</h4>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-5 mt-0.5">
                  <Checkbox
                    id="essential-cookies"
                    checked={cookieSettings.essential}
                    disabled={true} // 필수 쿠키는 비활성화 불가
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="essential-cookies" className="font-medium text-sm">
                    Essential Cookies
                  </label>
                  <p className="text-xs text-gray-500">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-0.5">
                  <Checkbox
                    id="functional-cookies"
                    checked={cookieSettings.functional}
                    onCheckedChange={() => handleCookieToggle("functional")}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="functional-cookies" className="font-medium text-sm">
                    Functional Cookies
                  </label>
                  <p className="text-xs text-gray-500">These cookies enable personalized features and functionality.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-0.5">
                  <Checkbox
                    id="analytics-cookies"
                    checked={cookieSettings.analytics}
                    onCheckedChange={() => handleCookieToggle("analytics")}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="analytics-cookies" className="font-medium text-sm">
                    Analytics Cookies
                  </label>
                  <p className="text-xs text-gray-500">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-0.5">
                  <Checkbox
                    id="marketing-cookies"
                    checked={cookieSettings.marketing}
                    onCheckedChange={() => handleCookieToggle("marketing")}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="marketing-cookies" className="font-medium text-sm">
                    Marketing Cookies
                  </label>
                  <p className="text-xs text-gray-500">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-end">
          <Button variant="outline" size="sm" onClick={declineCookies} className="rounded-full px-5">
            Essential Only
          </Button>

          {showDetails && (
            <Button
              variant="outline"
              size="sm"
              onClick={acceptSelectedCookies}
              className="rounded-full px-5 border-rose-200 text-rose-500 hover:bg-rose-50"
            >
              Save Preferences
            </Button>
          )}

          <Button size="sm" className="bg-rose-500 hover:bg-rose-600 rounded-full px-5" onClick={acceptAllCookies}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
