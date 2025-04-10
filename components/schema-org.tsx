export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TTM LOVE AI",
    url: "https://ttmloveai.com", // 실제 도메인으로 변경하세요
    logo: "https://ttmloveai.com/images/logo.png", // 실제 도메인으로 변경하세요
    sameAs: [
      "https://facebook.com/ttmloveai", // 실제 소셜 미디어 URL로 변경하세요
      "https://instagram.com/ttmloveai", // 실제 소셜 미디어 URL로 변경하세요
    ],
    description: "AI-based personalized relationship coaching service.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "ttmloveai@gmail.com",
      contactType: "customer service",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
