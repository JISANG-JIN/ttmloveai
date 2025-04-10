"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LaunchAlertProps {
  isOpen: boolean
  onClose: () => void
}

export default function LaunchAlert({ isOpen, onClose }: LaunchAlertProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image src="/images/logo.png" alt="TTM LOVE AI Logo" width={64} height={64} className="h-16 w-auto" />
          </div>
          <h3 className="text-2xl font-playfair font-bold mb-4 gradient-heading">Service Coming Soon</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            TTM LOVE AI's personalized AI relationship counseling service is currently under development and is
            scheduled to launch in April 2025. To be the first to receive launch news, please sign up for our free
            relationship columns.
          </p>
          <Button
            onClick={onClose}
            className="bg-rose-500 hover:bg-rose-600 rounded-full px-8 py-6 h-auto font-medium text-base"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}
