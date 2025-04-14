import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | TTM LOVE AI",
  description:
    "Learn how TTM LOVE AI collects, uses, and protects your personal information. Read our comprehensive Privacy Policy.",
  keywords: "privacy policy, data protection, personal information, TTM LOVE AI privacy",
  alternates: {
    canonical: "/legal/privacy",
  },
}

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Privacy Policy</h1>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">Last Updated: April 8, 2025</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                At TTM LOVE AI ("we," "our," or "us"), we respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our website, services, and applications (collectively, the "Service").
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal information (name, email address, relationship status)</li>
                <li>Account information when you register</li>
                <li>Information you provide when using our AI counseling services</li>
                <li>Communications you have with us</li>
              </ul>
              <p>We also automatically collect certain information when you use our Service, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Log information (IP address, browser type, pages visited)</li>
                <li>Device information (hardware model, operating system)</li>
                <li>Usage information (interactions with our Service)</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Personalize your experience with our Service</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing of Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  With vendors, consultants, and other service providers who need access to such information to carry
                  out work on our behalf
                </li>
                <li>
                  In response to a request for information if we believe disclosure is in accordance with, or required
                  by, any applicable law, regulation, or legal process
                </li>
                <li>
                  If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                  rights, property, and safety of TTM LOVE AI or others
                </li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another company
                </li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse,
                unauthorized access, disclosure, alteration, and destruction. However, no security system is
                impenetrable, and we cannot guarantee the security of our systems.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Choices</h2>
              <p>
                You can access and update certain information about you from within your account settings. You can also
                opt out of receiving promotional communications from us by following the instructions in those
                communications.
              </p>
              <p>
                You can manage your cookie preferences and opt-out of certain data collection practices by visiting our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
              <p>
                Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set
                your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies,
                this could affect the availability and functionality of our Service.
              </p>
              <p>
                For more information about cookies and how we use them, please see our{" "}
                <Link href="/legal/cookies" className="text-rose-500 hover:text-rose-600">
                  Cookie Policy
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our Service is not directed to children under 18 years of age, and we do not knowingly collect personal
                information from children under 18. If we learn that we have collected personal information from a child
                under 18, we will promptly delete that information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. International Data Transfers</h2>
              <p>
                We may transfer your personal information to countries other than the one in which you live. By
                providing any information to us, you consent to the transfer of that information to the United States
                and other countries.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4" id="california-rights">
                10. California Privacy Rights
              </h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy
                Rights Act (CPRA) provide you with specific rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Right to Know:</strong> You have the right to request that we disclose certain information
                  about our collection and use of your personal information over the past 12 months.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You have the right to request that we delete any of your personal
                  information that we have collected from you and retained, subject to certain exceptions.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sales:</strong> You have the right to opt-out of the sale of your personal
                  information.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any
                  of your CCPA rights.
                </li>
                <li>
                  <strong>Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit the
                  use of your sensitive personal information.
                </li>
                <li>
                  <strong>Right to Correct:</strong> You have the right to correct inaccurate personal information.
                </li>
              </ul>
              <p>
                To exercise these rights, please visit our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>{" "}
                or contact us at ttmloveai@gmail.com.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Other State Privacy Laws</h2>
              <p>
                Residents of Virginia, Colorado, Connecticut, Utah, and other states with comprehensive privacy laws may
                have similar rights to those provided under the CCPA. We are committed to complying with all applicable
                state privacy laws.
              </p>
              <p>
                To exercise your rights under these laws, please visit our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>{" "}
                or contact us at ttmloveai@gmail.com.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
                email or through our Service prior to the change becoming effective.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at ttmloveai@gmail.com.</p>
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
