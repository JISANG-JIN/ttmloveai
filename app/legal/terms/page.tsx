import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export const metadata = {
  title: "Terms of Service | TTM LOVE AI",
  description:
    "Read the Terms of Service for TTM LOVE AI's relationship coaching services. Learn about our policies, eligibility, and service descriptions.",
  keywords: "terms of service, legal terms, TTM LOVE AI terms, relationship coaching terms",
  alternates: {
    canonical: "/legal/terms",
  },
}

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Terms of Service</h1>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">Last Updated: April 8, 2025</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to TTM LOVE AI ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to
                and use of the TTM LOVE AI website, services, and applications (collectively, the "Service"). By
                accessing or using our Service, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our Service. By using our Service, you represent and warrant
                that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
              <p>
                To access certain features of our Service, you may need to register for an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Service Description</h2>
              <p>
                TTM LOVE AI provides AI-based relationship counseling services and free relationship columns. Our
                Service is designed to provide general relationship advice and should not be considered a substitute for
                professional therapy or counseling.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Free Relationship Column</h2>
              <p>
                Our free relationship column is provided as-is without any warranties. We reserve the right to modify or
                discontinue the free column at any time without notice.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. AI Counseling Services</h2>
              <p>
                Our AI counseling services are provided on a paid basis. Pricing information will be provided before you
                purchase any services. All sales are final unless otherwise required by applicable law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our Service, including but not limited to text, graphics,
                logos, and software, are owned by TTM LOVE AI and are protected by United States and international
                copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. User Content</h2>
              <p>
                You retain all rights to any content you submit, post, or display on or through our Service. By
                submitting content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to use,
                reproduce, modify, adapt, publish, translate, and distribute such content.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Prohibited Conduct</h2>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Impersonating any person or entity</li>
                <li>Interfering with or disrupting the Service</li>
                <li>Attempting to gain unauthorized access to the Service</li>
                <li>Using the Service for any illegal or unauthorized purpose</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL TTM LOVE AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless TTM LOVE AI and its officers, directors, employees,
                agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs,
                expenses, or fees arising from your use of the Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Termination</h2>
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at ttmloveai@gmail.com.</p>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-rose-500 hover:text-rose-600">
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
