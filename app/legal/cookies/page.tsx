import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | TTM LOVE AI",
  description:
    "Understand how TTM LOVE AI uses cookies and similar technologies. Learn about your choices regarding cookies.",
  keywords: "cookie policy, cookies, tracking technologies, TTM LOVE AI cookies",
  alternates: {
    canonical: "/legal/cookies",
  },
}

export default function CookiePolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Cookie Policy</h1>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">Last Updated: April 8, 2025</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how TTM LOVE AI ("we," "our," or "us") uses cookies and similar technologies
                to recognize you when you visit our website and use our services (collectively, the "Service"). It
                explains what these technologies are and why we use them, as well as your rights to control our use of
                them.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, TTM LOVE AI) are called "first-party cookies." Cookies
                set by parties other than the website owner are called "third-party cookies." Third-party cookies enable
                third-party features or functionality to be provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the Service to function properly
                  and cannot be switched off in our systems. They are usually only set in response to actions made by
                  you which amount to a request for services, such as setting your privacy preferences, logging in, or
                  filling in forms.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These cookies enable the Service to provide enhanced
                  functionality and personalization. They may be set by us or by third-party providers whose services we
                  have added to our pages.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we
                  can measure and improve the performance of our Service. They help us to know which pages are the most
                  and least popular and see how visitors move around the site.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies may be set through our Service by our advertising
                  partners. They may be used by those companies to build a profile of your interests and show you
                  relevant advertisements on other sites.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To authenticate users and prevent fraudulent use of user accounts</li>
                <li>To remember information about your preferences and choices</li>
                <li>To provide you with content that is relevant to you</li>
                <li>To understand how you use our Service</li>
                <li>To improve our Service based on your usage patterns</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Choices Regarding Cookies</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                preferences by clicking on the appropriate opt-out links provided in our cookie banner or by visiting
                our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>
                .
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                cookies, you may still use our Service, but your access to some functionality and areas of our Service
                may be restricted.
              </p>
              <p>
                How to control cookies varies depending on which browser you use. Please refer to your browser's help
                menu for more information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the Service, deliver advertisements, and so on. These cookies may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics cookies to help us understand how visitors interact with our website</li>
                <li>Social media cookies to enable you to share content on platforms like Facebook and Twitter</li>
                <li>Advertising cookies to help us and our advertising partners show relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. California Consumer Privacy Act (CCPA)</h2>
              <p>
                Under the California Consumer Privacy Act (CCPA), California residents have certain rights regarding
                their personal information, including the right to know what personal information is collected, the
                right to request deletion of personal information, and the right to opt-out of the sale of personal
                information.
              </p>
              <p>
                Some of our cookies and tracking technologies may constitute a "sale" of your personal information as
                defined by the CCPA. You can opt-out of the sale of your personal information by visiting our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>{" "}
                and selecting "Do Not Sell My Personal Information."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Other State Privacy Laws</h2>
              <p>
                In addition to the CCPA, other states such as Virginia, Colorado, Connecticut, and Utah have enacted
                comprehensive privacy laws that may affect how we use cookies and process your personal information. We
                are committed to complying with all applicable state privacy laws.
              </p>
              <p>
                Regardless of where you reside, you can manage your cookie preferences through our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Data Retention</h2>
              <p>
                Different cookies have different lifespans. Some cookies are session cookies, which means they are
                stored temporarily and are deleted when you close your browser. Others are persistent cookies, which
                means they remain on your device for a specified period.
              </p>
              <p>
                The expiration date of each cookie is listed in our{" "}
                <Link href="/privacy-center" className="text-rose-500 hover:text-rose-600">
                  Privacy Center
                </Link>{" "}
                under the Cookie Settings tab.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this
                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at
                ttmloveai@gmail.com.
              </p>
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
