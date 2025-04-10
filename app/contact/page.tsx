import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us | TTM LOVE AI",
  description:
    "Contact TTM LOVE AI for any inquiries about our relationship coaching services. Reach out to us at ttmloveai@gmail.com.",
  keywords: "contact TTM LOVE AI, relationship coaching contact, relationship advice help",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | TTM LOVE AI",
    description: "Contact TTM LOVE AI for any inquiries about our relationship coaching services.",
    url: "https://ttmloveai.com/contact",
  },
}

export default function ContactPage() {
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
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Contact Us</h1>

            <div className="bg-rose-50 rounded-lg p-8 mb-10">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold mb-3">Email Us</h2>
                  <p className="text-gray-600 mb-4">
                    For any inquiries about our services, feedback, or partnership opportunities, please contact us at:
                  </p>
                  <a
                    href="mailto:ttmloveai@gmail.com"
                    className="text-rose-500 hover:text-rose-600 font-medium text-lg"
                  >
                    ttmloveai@gmail.com
                  </a>
                  <p className="text-gray-600 mt-4">
                    We strive to respond to all inquiries within 48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Follow Us</h2>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest relationship advice, tips, and updates about our
                services.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-rose-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-rose-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to improve your relationships?</h3>
              <Link href="/column">
                <Button className="bg-rose-500 hover:bg-rose-600 rounded-full px-6">
                  Get Free Relationship Columns
                </Button>
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
              href="https://instagram.com"
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
