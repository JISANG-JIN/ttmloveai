import PrivacyCenterClient from "./PrivacyCenterClient"

export const metadata = {
  title: "Privacy Center | TTM LOVE AI",
  description:
    "Manage your privacy preferences, cookie settings, and data deletion requests at TTM LOVE AI's Privacy Center.",
  keywords: "privacy center, privacy preferences, cookie settings, data deletion, CCPA",
  alternates: {
    canonical: "/privacy-center",
  },
}

export default function PrivacyCenter() {
  return <PrivacyCenterClient />
}
